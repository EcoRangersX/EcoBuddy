import requests,json
from threading import Thread


class Article_tester():
    def __init__(self):
        self.articles_components_thread = Thread(target=self.articles_components)
        self.articles_thread = Thread(target=self.articles)

        self.threads = [self.articles_components_thread,self.articles_thread]

    def articles_components(self):
        articles_components = requests.get(
            url='http://127.0.0.1:5000/api/news/article_component',
            params={
                'Component': 'title',
                'Amount': 5
                }
            )
        print(f"\n ARTICLES_COMPONENTS \n {json.dumps(articles_components.json(),indent=2)}")

    def articles(self):
        articles = requests.get(
            url="http://127.0.0.1:5000/api/news/articles"
            )
        
        print(f"\n ARTICLES \n {json.dumps(articles.json(),indent=2)}")
        