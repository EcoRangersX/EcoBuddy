import requests,json


class Article_tester():
    def __init__(self):

        articles_components = requests.post(
            url='http://127.0.0.1:5000/api/news/article_component',
            json={
                'Component': 'title',
                'Amount': 5
                }
            )
        articles = requests.get(
            url="http://127.0.0.1:5000/api/news/articles"
            )
        
        print(f"\n ARTICLES \n {json.dumps(articles.json(),indent=2)}")
        print(f"\n ARTICLES_COMPONENTS \n {json.dumps(articles_components.json(),indent=2)}")