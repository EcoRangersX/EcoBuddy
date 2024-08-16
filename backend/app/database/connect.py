import os
import sqlite3


current_directory = os.path.dirname(__file__)

path = os.path.join(current_directory,'database.db')

conn = sqlite3.connect(path,check_same_thread=False)
