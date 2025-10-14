import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

metrics = {
    "users": 2000,
    "uptime_percent": 99.5,
    "tasks_completed": 500,
    "revenue": 25000
}

def random_metrics_continuous(prev_metrics):
    new_metrics = {}
    for key, value in prev_metrics.items():
        if key == "uptime_percent":
            change = random.uniform(-0.05, 0.05)
            new_metrics[key] = round(max(95, min(100, value + change)), 2)
        else:
            change = value * random.uniform(-0.05, 0.05)
            new_metrics[key] = int(value + change) if isinstance(value, int) else round(value + change, 2)
    return new_metrics

# Background task to update metrics every second
async def update_metrics_periodically():
    global metrics
    while True:
        metrics = random_metrics_continuous(metrics)
        await asyncio.sleep(1)

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(update_metrics_periodically())

@app.get("/api/random_metrics_continuous")
def get_metrics():
    return metrics
