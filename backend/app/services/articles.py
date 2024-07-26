from bs4 import BeautifulSoup
import requests


class Get_articles:
    domain_prefix = "https://www.the-scientist.com"
    response = requests.get(
        url=f"{domain_prefix}/tag/ecology"
        )
    document = BeautifulSoup(response.text, "html.parser")
    articles_dict = {}

    def find_article(self):
        self.articles = self.document.main.main.find_all(class_="ArticleSummary")

    def get_articles_summary(self):
        self.find_article()
        for articlesummary in self.articles:
            header = articlesummary.find("header")

            link = self.domain_prefix + header.find("a")["href"]
            title = header.find("div").text
            img = articlesummary.find("img")["src"]

            self.articles_dict[title.lower()] = {
                "title": title,
                "link": link,
                "img": img,
            }
        
        return self.articles_dict

   

