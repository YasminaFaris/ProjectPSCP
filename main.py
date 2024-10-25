from fastapi import FastAPI
import MySQLdb
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

def db_connect():
    connect = MySQLdb.connect(
        host="localhost",
        user="root",
        password="0909804595za",
        database="database"
    )
    return connect

app = FastAPI()
@app.get('/db')
def database():
    connect = db_connect()
    cursor = connect.cursor()
    query = "SELECT * FROM table_login"
    cursor.execute(query)
    rows = cursor.fetchall()
    
    # ปิดการเชื่อมต่อ
    cursor.close()
    connect.close()

    data = []
    for row in rows:
        data.append({
            "id" : row[0] ,
            "username" : row[1] ,
            "password" : row[2] ,
        })
    return data

@app.get('/')
def main():
    return{"hello":"world"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ปรับเป็น URL ที่ต้องการอนุญาต
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Subject(BaseModel):
    total_score: float
    midterm_score: float
    final_score: float
    assignments_score: float

@app.post('/insert')
def insert(score: Subject):
    cursor = db_connect().cursor()
    cursor.execute("INSERT INTO table_subject (total_score, midterm_score, final_score, assignments_score ) VALUES (%s, %s, %s, %s)", 
                   (score.total_score, score.midterm_score, score.final_score, score.assignments_score))
    cursor.connection.commit()
    return {"message": "User created."}

