from app.database import cursor,conn


class Migrate_eco_tips():
    def __init__(self):
        cursor.execute('CREATE TABLE IF NOT EXISTS eco_tips(title TEXT, description TEXT)')
        conn.commit()