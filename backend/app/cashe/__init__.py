from .connect import make_cashe_file
from .migrations import *
from .utils import *

conn = make_cashe_file()
def setup_cashe():
    cursor = conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS weather_cashe")
    cursor.execute("DROP TABLE IF EXISTS pollution_cashe")

    Migrate_pollution(conn=conn)
    Migrate_weather(conn=conn)
