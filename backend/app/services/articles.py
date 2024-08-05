from bs4 import BeautifulSoup
import requests
from app.database import cursor
from app.models import Article



class Articles:
        
    def find_article(self):
        self.domain_prefix = "https://www.the-scientist.com"
        self.response = requests.get(
            url=f"{self.domain_prefix}/tag/ecology"
        )
        self.document = BeautifulSoup(self.response.text, "html.parser")
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
 
    def get_articles_summary(self) -> dict:
        cursor.execute("SELECT * FROM articles")
        list_of_articles = cursor.fetchall()

        to_return = {}

        for title, link, img in list_of_articles:
            to_return[title] = {'link': link, 'img': img}

        return to_return
            
    def get_articles_component(self,component: str,amount: int) -> list:
        command = f'SELECT {component} FROM articles LIMIT {amount}'
        cursor.execute(command)
        list_of_components = cursor.fetchall()

        to_return = {}
        for itr in range(amount):
            to_return[f'article_{component}_{itr+1}'] = list_of_components[itr][0]

        return to_return
        



   

