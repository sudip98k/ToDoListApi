## ToDoList App Using RESTful  API
### Description: Build a RESTful api for a TODO App using Node.js and implementing JWT(jsonwebtoken) authentication.This api would allow us to do create read update delete operations as well as authentication and manage their task using JWT
## Prerequisites
    1.Node.js
    2.Git
## Tech Used
    1.mongoose
    2.jwt
    3.express
    4.bcrypt
    4.nodemon
### install the npm first
`npm install`
### start the server
`nodemon index.js`
### UserRegister:When user hit the register endpoint Bearer Token will be generated

![Alt text](images/user_register.png)

### UserLogin:When user hit the login endpoint i am returning the token which generated from the register endpoint
![Alt text](images/user_login.png)

### CreateTask:When user creates a task i am setting the authentication as Bearer token which generated from the register endpoint to see whether user is authenticated or not.

![Alt text](images/create_task.png)

### UpdateTask:When user updates a task i am setting the authentication as Bearer Token which generated from the register endpoint to see whether user is authenticated or not.This route will be updated the task's authentication.

![Alt text](images/update_task.png)

### RetrieveTask: This endpoint will retrieve the task by sending the task identifier
![Alt text](images/retrieve_task.png)

### DeleteTask: This endpoint will be deleted the task by sending the task identifier and also from the database.
![Alt text](images/delete_task.png)
### File Structure
|--- .vscode<br>
|--- config<br>
|--- |--- middleware<br>
|--- |--- mongoose<br>
|--- controllers<br>
|--- |--- todoController<br>
|--- |--- userController<br>
|--- models<br>
|--- |--- TodoModel<br>
|--- |--- User<br>
|--- routes<br>
|--- |--- todo<br>
|--- |--- user<br>
|--- gitignore<br>
|--- index.js<br>
|--- package-lock.json<br>
|--- package.json<br>
|--- Readme.md<br>