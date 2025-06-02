import docker

def image_exists(image_name):
    client = docker.from_env()
    try:
        client.images.get(image_name)
        return True
    except docker.errors.ImageNotFound:
        return False
    except docker.errors.APIError:
        return False  