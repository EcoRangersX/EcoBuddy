import sqlite3
from insertions import *



def insert_data(data,data_name):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    if data_name == 'quiz':
        insert_quiz(json_quiz=data,conn=conn,cursor=cursor)


data = None

data_name = str(input('Enter the type of data you want to insert: '))

insert_data(data,data_name)


