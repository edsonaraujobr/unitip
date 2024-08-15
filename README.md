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
     "name": STRING,
     "email": STRING,
     "stars": INTEGER
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
    "name": STRING,
    "idUniversity": UUID,
    "duration": INTEGER,
    "field": STRING,
    "type": STRING
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
    "name": STRING,
    "email": STRING,
    "city": STRING,
    "state": STRING,
    "street": STRING,
    "neighborhood": STRING
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
    "period": INTEGER,
    "level": STRING,
    "idCourses": UUID
  }
  ```

### Matters

Existing matters at this semester

Method | Description | endpoint
---|---|---
`POST`| Create matter | `/add/matter`
`GET`| Read all matters | `/matters`
`PUT`| Update matter | `/update/matter/:code`
`DELETE`| Delete matter | `/delete/matter/:code`

* Body
  ```bash
  {
    "code": STRING,
    "name": STRING,
    "hours": INTEGER,
    "level": STRING,
    "idSemesters": UUID
  }
  ```

### Student

User acessing application

Method | Description | endpoint
---|---|---
`POST`| Create student | `/add/student`
`GET`| Read all students | `/students`
`PUT`| Update student | `/update/student/:registration`
`DELETE`| Delete student | `/delete/student/:registration`

* Body
  ```bash
  {
    "registration": STRING,
    "full_name": STRING,
    "email": STRING,
    "password": STRING,
    "idCourses": UUID,
    "date_admission": DATE,
    "photo": BLOB,
    "idCourses": UUID
  }
  ```

### Tip

Tip written by student

Method | Description | endpoint
---|---|---
`POST`| Create tip | `/add/tip`
`GET`| Read all tips | `/tips`
`PUT`| Update tip | `/update/tip/:id`
`DELETE`| Delete tip | `/delete/tip/:id`

* Body
  ```bash
  {
    "tittle": STRING,
    "date": DATE,
    "tip": TEXT,
    "idMatters": STRING,
    "idStudents": STRING
  }
  ```

### Proof

Proof made by student

Method | Description | endpoint
---|---|---
`POST`| Create proof | `/add/proof`
`GET`| Read all proofs | `/proofs`
`PUT`| Update proof | `/update/proof/:id`
`DELETE`| Delete proof | `/delete/proof/:id`

* Body
  ```bash
  {
    "date": DATE,
    "tip": TEXT,
    "file": BLOB,
    "idMatters": STRING,
    "idStudents": STRING
  }
  ```
### ProfessorMatter

Subjects a teacher teaches

Method | Description | endpoint
---|---|---
`POST`| Create professorMatter | `/add/professorMatter`
`GET`| Read all professorMatters | `/professorMatters`
`GET`| Read all matter from a professor | `/professor/:professorId/matters`
`GET`| Read all professor from a matter | `/matterr/:matterId/professors`
`DELETE`| Delete professorMatter | `/delete/professorMatter`

* Body
  ```bash
  {
    "professorId": UUID,
    "matterId": STRING
  }
  ```

<br>

## 👨‍💻 Technologies

These are the technologies used in this project

**Backend:** [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/pt-br/), [MySQL](https://www.mysql.com/). <br>

## 📝 License

This project are is under the MIT license. See the [LICENSE](https://github.com/edsonaraujobr/undefined_api/blob/main/LICENSE) to get more details.












   




