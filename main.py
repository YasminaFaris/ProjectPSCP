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
    id:int
    name: str
    subID: int

@app.post('/insertsubject')
def insert(values: Subject):

    cursor = db_connect().cursor()
    cursor.execute("INSERT INTO table_subject (user_id,subject_name, subject_id) VALUES (%s, %s, %s)", 
                    (values.id, values.name, values.subID))
    cursor.connection.commit()
    return {"message": "Successful"}
#uvicorn main:app --reload