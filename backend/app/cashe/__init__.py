from .connect import conn
from .migrations import *

def setup_cashe():
    cursor = conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS weather_cashe")
    cursor.execute("DROP TABLE IF EXISTS pollution_cashe")

    Migrate_pollution(conn=conn)
    Migrate_weather(conn=conn)
