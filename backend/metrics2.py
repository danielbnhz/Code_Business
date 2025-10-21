# backend/services/metrics.py
from fastapi import APIRouter
import random
from datetime import datetime
from fastapi import FastAPI


app = FastAPI()

@app.get("/get_2nd_metrics")
def get_2nd_metrics():
    return {
        "timestamp": datetime.now().isoformat(),
        "cpu_load": round(random.uniform(20, 95), 2),      # percentage
        "memory_usage": round(random.uniform(30, 90), 2),  # percentage
        "disk_io": round(random.uniform(100, 900), 2),     # MB/s
        "network_speed": round(random.uniform(50, 1000), 2) # Mbps
    }
