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



# initial metrics
metrics = {
    "users": 2000,
    "uptime_percent": 99.5,
    "tasks_completed": 500,
    "revenue": 25000
}

@app.get("/api/random_metrics_continuous")


def random_metrics_continuous(prev_metrics):
    new_metrics = {}
    for key, value in prev_metrics.items():
        if key == "uptime_percent":
            # small fluctuation
            change = random.uniform(-0.05, 0.05)
            new_metrics[key] = round(max(95, min(100, value + change)), 2)
        else:
            # random drift by ±5%
            change = value * random.uniform(-0.05, 0.05)
            new_metrics[key] = int(value + change) if isinstance(value, int) else round(value + change, 2)
    return new_metrics

# usage
metrics = random_metrics_continuous(metrics)
