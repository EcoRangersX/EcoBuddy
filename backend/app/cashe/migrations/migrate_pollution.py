
class Migrate_pollution():
    def __init__(self,conn):
        self.cursor = conn.cursor()

        self.cursor.execute('''CREATE TABLE IF NOT EXISTS pollution_cashe(
                            latitude TEXT, 
                            longitude TEXT, 
                            data TEXT)''')
        conn.commit()