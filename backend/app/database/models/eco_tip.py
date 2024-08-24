from app.database import conn




class Eco_tip():
    def __init__(self,description: str,title: str):
        self.description = description
        self.title = title

        self.cursor = conn.cursor()


    def insert_into_database(self):
        self.cursor.execute("INSERT INTO eco_tips (title,description) VALUES(:title, :description)",
                       {
                           "title": self.title,
                           "description": self.description
                        }
        )

        conn.commit()

    def check_if_exists(self):
        if self.get_from_database():
            return True
        return False

    def get_from_database(self):
        self.cursor.execute("SELECT title FROM eco_tips WHERE title= :title",{'title': self.title})

        return self.cursor.fetchone()
