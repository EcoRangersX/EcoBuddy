import sqlite3
import os

def make_cashe_file():
    current_dir = os.path.dirname(__file__)

    cashe_dir = os.path.join(current_dir,'cashe.db')

    conn = sqlite3.connect(cashe_dir,check_same_thread=False)
    return conn