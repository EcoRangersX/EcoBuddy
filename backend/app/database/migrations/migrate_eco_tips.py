from app.database import cursor,conn
from app.database.models import Eco_tip
from app.globals import globals


class Migrate_eco_tips():
    def __init__(self):
        cursor.execute('CREATE TABLE IF NOT EXISTS eco_tips(title TEXT, description TEXT)')
        conn.commit()

        eco_tips = globals['Eco_tips']

        for title,description in eco_tips:
            eco_tip = Eco_tip(title=title,description=description)
            if not eco_tip.check_if_exists():
                eco_tip.insert_into_database()