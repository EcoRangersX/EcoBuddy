from app.database import conn



class Quiz():
    def __init__(self):

        self.cursor = conn.cursor()


        self.cursor.execute(
            """SELECT quiz FROM quizes 
            WHERE 
            id=:id
            """,
            {'id': id})
        
        return self.cursor.fetchone()
