from app.database import cursor,conn
from app.models import Article
from app.utils import scrape_articles

class Migrate_articles:
    def __init__(self):
        cursor.execute("""CREATE TABLE IF NOT EXISTS articles(
                    title text,
                    link text,
                    img text
                    )""")
    
        conn.commit()

        articles = scrape_articles()

        for link,title,img in articles:
            article = Article(title=title,link=link,img=img)
            if not article.check_if_article_exists():
                article.insert_to_database()