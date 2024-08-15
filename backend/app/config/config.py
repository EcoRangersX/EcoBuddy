from app.database import setup_database
from app.globals import globals

class Config:
   def __init__(self):
      self.debug = globals['debug']
      setup_database(debug=self.debug)


   