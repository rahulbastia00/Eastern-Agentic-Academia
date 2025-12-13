from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from . import models, schemas, utils, database

# Create tables in  Database automatically if they don't exist
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="backend engine")

# --- SIGN UP ENDPOINT ---
@app.post('/signup', response_model=schemas.UserResponse)
def create_user(user: schemas.UserCreate, db: Session = Depends(database.get_db)):

    # Check if email already exists
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registerd")
    
    # Hash the password
    hashed_pwd = utils.hash_password(user.password)

    # Create new user object
    new_user = models.User(
        username = user.username,
        email = user.email,
        hashed_password =  hashed_pwd
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

# --- LOGIN ENDPOINT ---
@app.post("login", response_model=schemas.Token)
def login(user_credentials: schemas.UserLogin, db: Session = Depends(database.get_db)):

    # find user by email
    user = db.query(models.User).filter(models.User.email == user_credentials.emai).first()

    # Check if user exists AND password matches
    if not user or not utils.varify_password(user_credentials.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Credentials"
        )

    # Create Access Token
    acess_token = utils.create_acess_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

# --- HEALTH CHECK ---

@app.get("/")
def read_root():
    return {"message": "Server is running !!!!!!!"}