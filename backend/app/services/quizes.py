from app.database import cursor

class Quizes():
    def get_quiz_titles(self,amount: int = None) -> list:
        if not amount:
            cursor.execute("SELECT title FROM quizes")
        else:
            cursor.execute(f"SELECT title FROM quizes LIMIT {amount}")

        return cursor.fetchall()
    
    def get_quizes(self,amount: int = None,titles: bool = True) -> list:
        if titles:
            if not amount:
                cursor.execute("SELECT * FROM quizes")
            else:
                cursor.execute(f"SELECT * FROM quizes LIMIT {amount}")
        else:
            if not amount:
                cursor.execute("SELECT quiz FROM quizes")
            else:
                cursor.execute(f"SELECT quiz FROM quizes LIMIT {amount}")


        return cursor.fetchall()