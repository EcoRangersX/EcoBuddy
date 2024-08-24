from app.database import conn




class Article:
    def __init__(self,title,link,img):
        self.title: str = title
        self.link: str = link
        self.img: str = img
        self.cursor = conn.cursor()
   

    def check_if_article_exists(self) -> bool:
        self.cursor.execute("SELECT title FROM articles WHERE title LIKE :title AND link LIKE :link",{'title': self.title,'link': self.link})

        if self.cursor.fetchone():
            return True
        return False

    def insert_to_database(self) -> bool:
        try:
            self.cursor.execute("INSERT INTO articles (title,link,img) VALUES(:title, :link, :img)",{
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
        
    


