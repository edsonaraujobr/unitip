## 📋 Project

Unitip is a RestFul API created with the purpose of helping college students by providing the necessary routes to create an application that provides tips.
<br>

## 💻 How to install?

To clone and run this application you need to have [Git](https://git-scm.com) and [Docker](https://www.docker.com/) installed on your computer

<br>
In your command line:
<br>

```bash
# Clone the repository
$ git clone https://github.com/edsonaraujobr/undefined_api

# Run the application through docker
$ docker compose up --build

# To close the application
$ docker compose down -v
```
<br>

Done, now you can acess the endpoints locally with http://localhost:4444

## 💻 How to acess endpoints without installing?

You can acess endpoints through [Postman](https://postman.com/) using this [link](api-unit.onrender.com/)

<br>

## 💻 Entities

### Professors

Professors who teach at this university

Method | Description | endpoint
---|---|---
`POST`| Create professor | `/add/professor`
`GET`| Read all professors | `/professors`
`PUT`| Update professor | `/update/professor/:id`
`DELETE`| Delete professor | `/delete/professor:id`

* Body
  ```bash
  {
     "name": "example",
     "email": "example@gmail.com",
     "stars": 5
  }
  ```

### Courses

Existing courses at this university

Method | Description | endpoint
---|---|---
`POST`| Create course | `/add/course`
`GET`| Read all courses | `/courses`
`PUT`| Update course | `/update/course/:id`
`DELETE`| Delete course | `/delete/course/:id`

* Body
  ```bash
  {
    "name": "example",
    "idUniversity": "xxxxxxxxxxxxxxxxxx",
    "duration": 8,
    "field": "example",
    "type": "example"
  }
  ```

### Universities

University where the student studies

Method | Description | endpoint
---|---|---
`POST`| Create university | `/add/university`
`GET`| Read all universities | `/universities`
`PUT`| Update university | `/update/university/:id`
`DELETE`| Delete university | `/delete/university/:id`

* Body
  ```bash
  {
    "name": "example",
    "email": "example@gmail.com",
    "city": "example",
    "state": "example",
    "street": "example",
    "neighborhood": "example"
  }
  ```

### Semesters

Existing Semesters at this course

Method | Description | endpoint
---|---|---
`POST`| Create semester | `/add/semester`
`GET`| Read all semesters | `/semesters`
`PUT`| Update semester | `/update/semester/:id`
`DELETE`| Delete semester | `/delete/semester/:id`

* Body
  ```bash
  {
    "period": 8,
    "level": "example",
    "idCourses": "xxxxxxxxxxxxxx"
  }
  ```

### Matters

Existing Semesters at this course

Method | Description | endpoint
---|---|---
`POST`| Create matter | `/add/matter`
`GET`| Read all matters | `/matters`
`PUT`| Update matter | `/update/matter/:code`
`DELETE`| Delete matter | `/delete/matter/:code`

* Body
  ```bash
  {
    "code": "xxxxxxxx",
    "name": "example",
    "hours": 60,
    "level": "example",
    "idSemesters": "xxxxxxxxx"
  }
  ```

<br>

## 👨‍💻 Technologies

These are the technologies used in this project

**Backend:** [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/pt-br/), [MySQL](https://www.mysql.com/). <br>

## 📝 License

This project are is under the MIT license. See the [LICENSE](https://github.com/edsonaraujobr/undefined_api/blob/main/LICENSE) to get more details.












   




