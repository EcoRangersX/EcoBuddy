from .connect import conn
from .migrations import *




def setup_database(debug: bool):    
    cursor = conn.cursor()
    if debug:
        cursor.execute("DROP TABLE IF EXISTS articles")
        cursor.execute("DROP TABLE IF EXISTS users")
    Migrate_articles(conn=conn)
    Migrate_users(conn=conn)
    Migrate_quizes(conn=conn)
    Migrate_ai_questions(conn=conn)
    Migrate_eco_tips(conn=conn)



