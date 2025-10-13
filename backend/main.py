from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# Allow your React frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/random_metrics")
def random_metrics():
    return {
        "users": random.randint(1000, 5000),
        "uptime_percent": round(random.uniform(98, 100), 2),
        "tasks_completed": random.randint(100, 1000),
        "revenue": round(random.uniform(10000, 50000), 2)
    }
