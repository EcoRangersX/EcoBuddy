
from .database import conn, cursor
from app.migrations import Users
from app.migrations import Articles

__all__ = ['conn','cursor']

def setup_database(debug: bool):
    if debug:
        cursor.execute("DROP TABLE IF EXISTS articles")
        cursor.execute("DROP TABLE IF EXISTS users")
    Articles()
    Users()
