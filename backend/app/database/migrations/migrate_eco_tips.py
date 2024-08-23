from app.database.models import Eco_tip
from app.globals import globals


class Migrate_eco_tips():
    def __init__(self,conn):
        cursor = conn.cursor()
        cursor.execute('CREATE TABLE IF NOT EXISTS eco_tips(title TEXT, description TEXT)')
        conn.commit()

        eco_tips = globals['Eco_tips']

        for eco_tip in eco_tips:
            title = eco_tip['title']
            description = eco_tip['description']
            eco_tip_g = Eco_tip(title=title,description=description)
            if not eco_tip_g.check_if_exists():
                eco_tip_g.insert_into_database()
