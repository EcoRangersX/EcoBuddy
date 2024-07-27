from .database import *

class Article:
    def __init__(self,title,link,img):
        self.title: str = title
        self.link: str = link
        self.img: str = img
   

    def check_if_article_exists(self) -> list:
        cursor.execute("SELECT * FROM articles WHERE title LIKE :title AND link LIKE :link",{'title': self.title,'link': self.link})

        return cursor.fetchall()

    def insert_to_database(self) -> bool:
        try:
            cursor.execute("INSERT INTO articles VALUES(:title, :link, :img)",{
                                                                                'title': self.title,
                                                                                'link': self.link,
                                                                                'img': self.img
                                                                                }
                            )
            conn.commit()
        except:
            return False
        else:
            return True

 
    