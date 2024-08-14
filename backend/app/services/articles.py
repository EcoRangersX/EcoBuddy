
from app.database import cursor




class Articles:
 
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
        



   

