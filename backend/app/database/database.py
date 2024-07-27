import sqlite3


conn = sqlite3.connect('database.db',check_same_thread=False)
cursor = conn.cursor()

def setup_database():
    cursor.execute("DROP TABLE IF EXISTS articles")
    conn.commit()
    cursor.execute(

        """
        CREATE TABLE IF NOT EXISTS users(
        name text,
        email  text,
        password text
        )

        """)

    conn.commit()

    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS articles(
        title text,
        link text,
        img text
        )
        """)

    conn.commit()







