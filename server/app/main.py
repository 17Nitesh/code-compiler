from fastapi import FastAPI
from pydantic import BaseModel
from app.executor import run_code
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeRequest(BaseModel):
    code: str
    language: str
    stdin: str = ""

@app.post("/api/execute/")
async def execute_code(data: CodeRequest):
    result = run_code(data.code, data.language, data.stdin)
    return {"output": result}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
