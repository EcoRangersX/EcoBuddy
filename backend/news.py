from bs4 import BeautifulSoup
import requests
import json


class Get_Articles:
    def __init__(self):
        self.domain_prefix = "https://www.the-scientist.com"
        self.response = requests.get(f"{self.domain_prefix}/tag/ecology")
        self.document = BeautifulSoup(self.response.text, "html.parser")
        self.articles_dict = {}
        self.find_article()

    def find_article(self):
        self.articles = self.document.main.main.find_all(class_="ArticleSummary")

    def get_articles_summary(self):
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

    def save_file(self):
        with open("articles_list.json", "w") as file:
            data = json.dumps(self.articles_dict, indent=2)

            file.write(data)
            file.close()