from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.io as pio

from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from bson import ObjectId # Para trabajar con IDs de MongoDB

MONGO_DETAILS = "mongodb+srv://adminDavid:<Mayo2025*>@0.0.0.0/0/?retryWrites=true&w=majority&appName=Cluster0"
MONGO_DB= "MoneyManage"

app = FastAPI()