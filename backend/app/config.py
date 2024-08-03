from .database import setup_database
from .globals import globals

class Config:
   def __init__(self):
      self.debug = globals['debug']
      setup_database(debug=self.debug)


   