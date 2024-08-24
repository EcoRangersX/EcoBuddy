
from app.database.models import Article
from app.utils import scrape_articles

class Migrate_articles:
    def __init__(self,conn):
        cursor = conn.cursor()
        
