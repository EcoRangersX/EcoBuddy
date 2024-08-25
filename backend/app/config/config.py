from app.database import setup_database
from app.globals import globals
from app.cashe import setup_cashe

class Config:
   def __init__(self):
      self.debug = globals['debug']
      setup_database(debug=self.debug)
      setup_cashe()


   