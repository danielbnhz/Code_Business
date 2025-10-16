# backend/graphs.py
from fastapi import FastAPI
import plotly.graph_objects as go

app = FastAPI()

@app.get("/graph_data")
def graph_data():
    x = [1, 2, 3, 4, 5]
    y = [10, 2, 3, 4, 5]

    fig = go.Figure(data=go.Scatter(x=x, y=y, mode='lines+markers'))
    return fig.to_dict()  # Send JSON to frontend
