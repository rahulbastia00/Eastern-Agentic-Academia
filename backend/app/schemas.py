'''
This defines what data the Frontend sends to us and what we send back.
'''

from pydantic import BaseModel, EmailStr

# Schema for receiving data during Signup
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

# Schema for receiving data during Login
class UserLogin(BaseModel):
    emai: EmailStr
    password: str

# Schema for returning User data (Response)
# We exclude the password here for security.
class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr

    class Config:
        from_attributes = True

# Schema for the Token response
class Token(BaseModel):
    sucess_token: str
    token_type: str 