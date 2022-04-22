# FLAP-Backend

## Table of content
* [General Information](#general-information)
* [Technologies Used](#technologies-used)
* [Recommended IDE Setup](#recommended-ide-setup)
* [Project Setup](#project-setup)
* [Usage](#usage)

## General Information
This repository is REST API in Node with Express and MongoDB for ***F***orum ***L***ike an ***A***dvertisement ***P***ole app.

#### Features:
- User Registration
- User Login
- Post CRUD Operations
- Comment CRUD Operations
- Authorization Checking
- Authorization Refreshing

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token
- Bcrypt

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Project Setup
To run this project you need to use [Docker](https://www.docker.com/):
```bash
# Clone this repository
$ git clone git@github.com:piotrorczykowski/FLAP-Backend.git

# Go into the repository
$ cd FLAP-Backend

# Start docker
$ docker-compose up --build
```

## Usage
You can test this project by sending requests in [requests.http](https://github.com/piotrorczykowski/FLAP-Backend/blob/59edd9eb400d760c982d0b0e5675a0bd33f1709e/requests.http) file.
