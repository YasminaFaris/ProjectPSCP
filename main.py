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

class Signup(BaseModel):
    userid:str
    username: str
    password: str

@app.post('/signup')
def insert(values: Signup):
    cursor = db_connect().cursor()
    cursor.execute("INSERT INTO table_user (user_id,username, password) VALUES (%s, %s, %s)", 
                    (values.userid, values.username, values.password))
    cursor.connection.commit()
    return {"message": "Successful"}
#uvicorn main:app --reload
#python -m uvicorn main:app --reload

class totoaldata(BaseModel):
    userid:str
    subjectid:int
    subjectname:str
    subjectassignment:str
    scoreassinment:int
    myscore:int

@app.post('/totoaldata')
def insert(values: totoaldata):
    cursor = db_connect().cursor()
    cursor.execute("INSERT INTO table_database (user_id,subject_id,subject_name,subject_assignment,score_assignment,my_score) VALUES (%s, %s, %s,%s, %s, %s)", 
                    (values.userid, values.subjectid, values.subjectname , values.subjectassignment , values.scoreassinment , values.myscore))
    cursor.connection.commit()
    return {"message": "Successful"}

def get_data_from_db():
    cursor = db_connect().cursor()
    cursor.execute("SELECT * FROM table_subject")
    data = cursor.fetchall()
    return data

@app.get("/data")
def read_data():
    data = get_data_from_db()
    return {"data": data}

#@app.get("/data")
#def get_data():
#    return {"data": ["Test 1", "Test 2", "Test 3" ,"Test 4"]}