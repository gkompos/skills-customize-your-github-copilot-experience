from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

# Initialize the FastAPI application
app = FastAPI()

# Data model for a book
class Book(BaseModel):
    title: str
    author: str
    year: int

# Sample data - a simple in-memory database
books_db = [
    {"id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "year": 1925},
    {"id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee", "year": 1960},
    {"id": 3, "title": "1984", "author": "George Orwell", "year": 1949},
]

# Keep track of the next ID to assign
next_id = max([book["id"] for book in books_db]) + 1

# TODO: Task 1 - Create GET endpoints
# 1. Create a GET "/" endpoint that returns a welcome message
# 2. Create a GET "/books" endpoint that returns all books
# 3. Create a GET "/books/{id}" endpoint that returns a specific book

# TODO: Task 2 - Create POST endpoint
# 1. Create a POST "/books" endpoint that accepts a Book and adds it to the database
# 2. Remember to increment next_id and return the created book with 201 status

# TODO: Task 3 (Stretch) - Create PUT and DELETE endpoints
# 1. Create a PUT "/books/{id}" endpoint to update a book
# 2. Create a DELETE "/books/{id}" endpoint to remove a book

# To run this application, use:
# uvicorn starter_code:app --reload
