from app.database import conn

class Articles:
    def __init__(self):
        
        self.cursor = conn.cursor()
 
    def get_articles_summary(self) -> dict:
        self.cursor.execute("SELECT * FROM articles")
        list_of_articles = self.cursor.fetchall()

        to_return = {}

        for title, link, img in list_of_articles:
            to_return[title] = {'link': link, 'img': img}

        return to_return
            
    def get_articles_component(self,component: str,amount: int) -> list:
        command = f'SELECT {component} FROM articles LIMIT {amount}'
        self.cursor.execute(command)
        list_of_components = self.cursor.fetchall()

        to_return = {}
        for itr in range(amount):
            to_return[f'article_{component}_{itr+1}'] = list_of_components[itr][0]

        return to_return
        



   

