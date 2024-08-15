from app.database import conn



class Quizes():
    def __init__(self):
        self.cursor = conn.cursor()
    def get_quiz_titles(self,amount: int = None) -> list:
        if not amount:
            self.cursor.execute("SELECT title FROM quizes")
        else:
            self.cursor.execute(f"SELECT title FROM quizes LIMIT {amount}")

        return self.cursor.fetchall()
    
    def get_quizes(self,amount: int = None,titles: bool = True) -> list:
        if titles:
            if not amount:
                self.cursor.execute("SELECT * FROM quizes")
            else:
                self.cursor.execute(f"SELECT * FROM quizes LIMIT {amount}")
        else:
            if not amount:
                self.cursor.execute("SELECT quiz FROM quizes")
            else:
                self.cursor.execute(f"SELECT quiz FROM quizes LIMIT {amount}")


        return self.cursor.fetchall()