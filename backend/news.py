from bs4 import BeautifulSoup
import requests
import json


class Get_Article:
    def __init__(self):
        self.domain_prefix = "https://www.the-scientist.com"
        self.response = requests.get(f"{self.domain_prefix}/tag/ecology")
        self.document = BeautifulSoup(self.response.text, "html.parser")
        self.articles = {}
        self.find_article()

    def find_article(self):
        self.article = self.document.main.main.find_all(class_="ArticleSummary")

    def get_article_summary(self):
        for articlesummary in self.article:
            header = articlesummary.find("header")

            link = self.domain_prefix + header.find("a")["href"]
            title = header.find("div").text
            img = articlesummary.find("img")["src"]

            self.articles[title.lower()] = {"title": title, "link": link, "img": img}

        return self.articles

    def save_file(self):
        with open("article_list.json", "w") as file:
            data = json.dumps(self.articles, indent=2)

            file.write(data)
            file.close()


