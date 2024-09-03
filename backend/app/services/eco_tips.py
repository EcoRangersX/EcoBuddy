from app.database import conn
from app.database.models import Eco_tip


class Eco_tips():
    def __init__(self):
        
        self.cursor = conn.cursor()
    def get_eco_tips(self,amount: int=1):
        self.cursor.execute("SELECT title,description FROM eco_tips LIMIT :amount", {'amount':amount})

        eco_tips_list = self.cursor.fetchall()
     
        eco_tips = []

        for title,description in eco_tips_list:
            eco_tips.append(
                {
                    "title": title,
                    'description': description
                }
            )
            
  
        return eco_tips

    
    def insert_eco_tips_into_database(self,eco_tips: list):
        for title,description in eco_tips:
            tip = Eco_tip(title=title , description=description)
            if tip.check_if_exists():
                continue
            tip.insert_into_database()







