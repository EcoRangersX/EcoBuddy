from bs4 import BeautifulSoup
import requests
from app.database import *
from app.database import Article


class Get_articles:
    domain_prefix = "https://www.the-scientist.com"
    response = requests.get(
        url=f"{domain_prefix}/tag/ecology"
    )
    document = BeautifulSoup(response.text, "html.parser")

    def find_article(self):
        self.articles = self.document.main.main.find_all(class_="ArticleSummary")

    def insert_articles_to_database(self):
        self.find_article()
        for articlesummary in self.articles:
            header = articlesummary.find("header")

            link = self.domain_prefix + header.find("a")["href"]
            title = header.find("div").text
            img = articlesummary.find("img")["src"]
            article = Article(link=link, title=title, img=img)
            if not article.check_if_article_exists():
              
                article.insert_to_database()

    
    def get_articles_summary(self):
        cursor.execute("SELECT * FROM articles")
        list_of_articles = cursor.fetchall()

        to_return = {}

        for title, link, img in list_of_articles:
            to_return[title] = {'link': link, 'img': img}

        return to_return
            


   

