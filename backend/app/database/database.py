import sqlite3


conn = sqlite3.connect('database.db')
cursor = conn.cursor()


cursor.execute(

    """
    CREATE TABLE IF NOT EXISTS users(
    name text,
    email  text,
    password text
    )

    """)

conn.commit()







