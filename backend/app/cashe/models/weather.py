from app.cashe import Air_data_parent
import yaml

class Weather():
    def __init__(self,latitude: float,longitude: float):
        #model
        self.latitude = round(latitude,1)
        self.longitude = round(longitude,1)
        self.data: dict = None

        #methods from Air_data_parent
        Air_data_parent.__init__(self,'weather')

    
        

        

