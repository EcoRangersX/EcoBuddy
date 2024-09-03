import yaml


class Air_data_parent():
    def __init__(self,type: str):
        from app.cashe import conn
        
        self.type = type

        self.conn = conn
        self.cursor = conn.cursor()

    def check_cashe(self) -> bool:
        self.cursor.execute(f"""SELECT 1 FROM {self.type}_cashe WHERE 
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
        self.cursor.execute(f"""INSERT INTO {self.type}_cashe(latitude,longitude,data) VALUES(
                            :latitude,
                            :longitude,
                            :data)""",
                            {'latitude': self.latitude,
                            'longitude': self.longitude,
                            'data': str(self.data)})
        self.conn.commit()
        

    def get_cashe(self) -> dict:
        self.cursor.execute(f"""SELECT data FROM {self.type}_cashe WHERE 
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
                data[0],
                Loader=yaml.FullLoader)
        else:
            return None