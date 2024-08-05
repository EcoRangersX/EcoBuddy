
from .database import conn, cursor
from app.migrations import Migrate_quizes
from app.migrations import Migrate_users
from app.migrations import Migrate_articles

__all__ = ['conn','cursor']

def setup_database(debug: bool):
    if debug:
        cursor.execute("DROP TABLE IF EXISTS quizes")
        cursor.execute("DROP TABLE IF EXISTS articles")
        cursor.execute("DROP TABLE IF EXISTS users")
    Migrate_articles()
    Migrate_users()
    Migrate_quizes()
