import os, uuid, subprocess
from app.helper.dockerImageCheck import image_exists

def run_code(code: str, language: str, stdin: str = "") -> str:
    
    container_id = str(uuid.uuid4())
    
    workdir = f"./tmp/{container_id}"
    os.makedirs(workdir, exist_ok=True)
    
    ext = {"python":"py",
           "javascript":"js",
           "c++":"cpp",
           "cpp":"cpp",
           "c":"c"
           }[language]
    
    code_path = os.path.join(workdir, f"main.{ext}")
    
    with open(code_path, "w")  as f:
        f.write(code)
        
    image = f"exec-{language}"
    dockerfile = f"Dockerfiles/Dockerfile.{language}"
    
    if not image_exists(image):
        subprocess.run(["docker", "build", "-t", image, "-f", dockerfile, "."], check=True)

    try:
        result = subprocess.run(
            ["docker", "run", "--rm", "--net=none", "--memory=50m", "--cpus=0.5", "-v", f"{os.path.abspath(workdir)}:/app", image],
            input=stdin,
            capture_output=True,
            text=True,
            timeout=10
        )
        return result.stdout + result.stderr
    except subprocess.TimeoutExpired:
        return "⏰ Timeout or resource limit exceeded!"
    finally:
        os.system(f"rm -rf {workdir}")
    
    