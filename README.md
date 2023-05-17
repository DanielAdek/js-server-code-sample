# js-server-code-sample

## This is a list of Python scripts for beginner projects.

### Description

This repository contains a sample NodeJS server code example. It is a simple application to send json data throw API endpoint.


### Interesting things to note

- Modularization
  - This simple app is modularized for easy readability to other developers
  - The module folders contains the below
    - Controllers
    - Services
    - Routes
    - Repository
    - Constants
- The use of recent Javascript syntax
  - This project uses recent JS syntax like import and export, arrow functions, etc
- Object Oriented Programing implementation
  - The implementation is mostly class base which implements the OOP implementation like inheritance.
  Note that the controller class is inherited by the routes class
- Constant response
  - The constant folder contains a base response format for the api. The use of this me or any other developer would allow for one format response to the client side engineers consuming the endpoint. thereby making there work easy knowing fully well the struction of response from the api. 
- The repository
  - Some technologies/languages like java, nestjs/repository uses the repository folder to store functions that fetches or insert to database. I thought its a nice to use on Javascript as it would help to implement the DRY (dont repeat yourself) priciple when writing queries.



## Projects

| SR No | API                                                                                                                                           | Endpoint                                                      |
|-------|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| 1     | Base Endpoint                                   | http://localhost:8080                      |
| 2     | GET: All Colors                                           | ${base_endpoint}/color                  |
| 3     | POST: Create Color                                                  | ${base_endpoint}/color                     |