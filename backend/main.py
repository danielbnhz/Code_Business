import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
from metrics2 import get_2nd_metrics

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
@app.get("/get_2nd_metrics")

def metrics2():
    return get_2nd_metrics()

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

current_y = 0
step = 0.1
max_y = .5

@app.get("/graph_data")
def graph_data():
    global current_y, step, max_y
    current_y += step
    if current_y > max_y:
        current_y = 0

    return {"x": [current_y], "y": [current_y]}