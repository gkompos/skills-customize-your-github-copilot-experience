# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Learn how to build a modern REST API using the FastAPI framework. You'll create endpoints to handle GET and POST requests, implement request validation, and understand how to structure an API application for real-world use.

## 📝 Tasks

### 🛠️ Task 1: Create Your First API with GET Endpoints

#### Description
Build a basic FastAPI application with GET endpoints that return data. You'll start by setting up a FastAPI server and creating endpoints that retrieve information about books from a simple in-memory data store.

#### Requirements
Completed program should:

- Import and initialize FastAPI application
- Create a GET `/` endpoint that returns a welcome message
- Create a GET `/books` endpoint that returns a list of all books (each with id, title, author, and year)
- Create a GET `/books/{id}` endpoint that returns a specific book by its ID
- Return appropriate 404 error when a book ID doesn't exist

### 🛠️ Task 2: Add POST Endpoints and Request Validation

#### Description
Extend your API to handle incoming data with POST endpoints. You'll implement request validation using Pydantic models to ensure data quality and learn how to add new items to your data store.

#### Requirements
Completed program should:

- Define a Pydantic model `Book` with fields: title (str), author (str), year (int)
- Create a POST `/books` endpoint that accepts book data and adds it to the collection
- Return the created book with a generated ID and 201 status code
- Validate that all required fields are provided and year is a valid number
- Return appropriate validation error messages (400) if data is invalid

### 🛠️ Task 3: Enhance Your API with Updates and Deletions (Stretch Goal)

#### Description
Complete your API by implementing endpoints to update and delete books. This demonstrates full CRUD (Create, Read, Update, Delete) operations and helps you understand how to modify stored data through API requests.

#### Requirements
Completed program should:

- Create a PUT `/books/{id}` endpoint that updates an existing book's information
- Create a DELETE `/books/{id}` endpoint that removes a book from the collection
- Return 404 errors if attempting to update or delete a non-existent book
- Update endpoints should accept partial updates (not all fields required)
- Return the updated/deleted book data in the response
