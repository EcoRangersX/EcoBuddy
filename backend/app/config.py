from .database import setup_database

class Config:
   def __init__(self):
      setup_database()


   