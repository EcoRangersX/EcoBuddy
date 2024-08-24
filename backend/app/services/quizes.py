from app.database import conn



class Quizes():
    def __init__(self):
        self.cursor = conn.cursor()
    