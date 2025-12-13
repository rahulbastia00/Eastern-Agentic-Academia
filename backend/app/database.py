'''
handles connection
'''

from sqlalchemy import create_engine # Creates a connection to the database
from sqlalchemy.ext.declarative import declarative_base # Used to define database tables using Python classes
from sqlalchemy.orm import sessionmaker  # Creates database sessions (used to run queries)
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency: This function gives us a database session for each request
# and closes it strictly afterwards.

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()