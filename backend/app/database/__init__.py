
from .database import conn, cursor
from app.migrations import *

__all__ = ['conn','cursor']

def setup_database(debug: bool):
    if debug:
        cursor.execute("DROP TABLE IF EXISTS articles")
        cursor.execute("DROP TABLE IF EXISTS users")
    Migrate_articles()
    Migrate_users()
    Migrate_quizes()
    Migrate_ai_questions()
    Migrate_eco_tips()
