from app.database import conn
import yaml

class Pollution():
    def __init__(self,latitude: float,longitude: float):
        latitude,longitude = (round(latitude,2),round(longitude,2))
        self.cursor = conn.cursor()
        self.latitude = latitude
        self.longitude = longitude
        self.latitude_range = f'{latitude-0.04} {latitude+0.04}'
        self.longitude_range = f'{longitude-0.04} {longitude+0.04}'
        self.data: dict = None

    def check_cashe(self) -> bool:
        self.cursor.execute("""SELECT 1 FROM pollution_cashe WHERE 
                            latitude=:latitude 
                            AND 
                            longitude=:longitude
                            """,
                            {
                                'latitude': self.latitude,
                                'longitude': self.longitude
                            })
        
        if self.cursor.fetchone():
            return True
        return False

    def cashe(self):
        self.cursor.execute("""INSERT INTO pollution_cashe(latitude,longitude,data) VALUES(
                            :latitude,
                            :longitude,
                            :data)""",
                            {'latitude': self.latitude,
                            'longitude': self.longitude,
                            'data': self.data})
        conn.commit()

    def get_cashe(self) -> dict:
        self.cursor.execute("""SELECT data FROM pollution_cashe WHERE 
                            latitude=:latitude 
                            AND 
                            longitude=:longitude""",
                            {
                                'latitude': self.latitude,
                                'longitude': self.longitude
                            })
        data = self.cursor.fetchone()
        if data:
            return yaml.load(
                data,
                Loader=yaml.FullLoader)
        else:
            return None
    
    