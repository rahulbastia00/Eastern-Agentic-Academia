'''
Here we handle password hashing (so hackers can't read passwords if they steal the DB) and Token creation.
'''

from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt 
import os
from dotenv import load_dotenv

# setup password hasing 
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

# Function to hash a password
def hash_password(password: str):
    pwd_context.hash(password)

# Function to verify a password (plain vs hashed)
def varify_password(plain_pass, hash_pass):
    return pwd_context.varify(plain_pass, hash_pass)

# Function to create a JWT Access Token
def create_acess_token(data: str):
    to_encode = data.copy()
    # Token expires in 30 minutes
    expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp":expire})
    encode_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encode_jwt