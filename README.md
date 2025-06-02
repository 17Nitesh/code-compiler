# 🐍 Nit⋅Code — The Dark Compiler

> *“There is no good and evil. There is only power... and those too weak to seek it.”*  
> — Lord Voldemort

**Nit⋅Code** is no ordinary compiler. It’s a conjuration of code, forged in shadows. Built for those who dare to wield the power of execution across Python, C++, C, and JavaScript — all within a single spellbinding interface.

## 🧪 Dark Powers (Features)

- 🧠 Execute unholy scripts in Python, C++, C, or JavaScript
- 🔥 React + FastAPI frontend/backend fusion (Dark Mark certified)
- 🐉 Secure execution within Docker-bound chambers
- ⚡ Terminal-style real-time output, error incantations included
- 🕯️ UI crafted in the depths of TailwindCSS

## 🦴 Forbidden Stack

- **Frontend**: React + TypeScript + Tailwind (inspired by dark arts)
- **Backend**: FastAPI + Docker (for safe execution of unstable spells)
- **Execution Realm**: `/api/execute/`

## 🕳️ Summoning Instructions

# Clone the Horcrux
git clone https://github.com/17Nitesh/code-compiler.git
cd code-compiler

# Start the backend (you must control Docker)
cd server
docker build -t code-executor .
docker run -p 8000:8000 code-executor

# Ignite the frontend flames
```bash
cd ../client
npm install
npm run dev
```
Add this to your .env (hide it from the Order):

VITE_API_URI=http://localhost:8000/api/execute/
🪞 Mirror of Compilation (UI Preview)


⚠️ Dark Magic Disclaimer
🕷️ This project runs user code. Without proper sandboxing or resource guards, public deployment may result in chaos. Proceed with caution.

💀 License of the Damned
MIT License — even dark wizards respect open-source etiquette.

"Only I can live... forever."
