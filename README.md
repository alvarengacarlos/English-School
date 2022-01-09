# English School API
This application controls an English school

# End Points

## People

|Url|Http Verb|Parameters|Body Json| 
|:---|:---|:---|:---|
|/people|GET|empty|empty|
|/people/id|GET|:id|empty|
|/people|POST|empty|yes|
|/people/id|PATCH|:id|yes|
|/people/id|DELETE|:id|empty|

### Body Json Example
```json
{
    "name": "Fulano",
    "status": 1,
    "email": "fulano@email.com",
    "role": "estudante"
}
```

## Levels

|Url|Http Verb|Parameters|Body Json| 
|:---|:---|:---|:---|
|/levels|GET|empty|empty|
|/levels/id|GET/|:id|empty|
|/levels|POST|empty|yes|
|/levels/id|PATCH|:id|yes|
|/levels/id|DELETE|:id|empty|

### Body Json Example
```json
{
    "description": "Intermediário"
}
```

## Classes

|Url|Http Verb|Parameters|Body Json| 
|:---|:---|:---|:---|
|/classes|GET|empty|empty|
|/classes/id|GET|:id|empty|
|/classes|POST|empty|yes|
|/classes/id|PATCH|:id|yes|
|/classes/id|DELETE|:id|empty|

### Body Json Example
```json
{
    "startDate": "2022-01-01",
    "teacherId": 1,
    "levelId": 1
}
```

## Enrollments

|Url|Http Verb|Parameters|Body Json| 
|:---|:---|:---|:---|
|/people/studentId/enrollments/id|GET|:studentId :id|empty|
|/people/studentId/enrollments|POST|:studentId|yes|
|/people/studentId/enrollments/id|PATCH|:studentId :id|yes|
|/people/studentId/enrollments/id|DELETE|:studentId :id|empty|

### Body Json Example
```json
{
    "status": "Confirmado",
    "classId": 1
}
```

# Database Configuration
[Mariadb](https://mariadb.org/) is used as database.

- Change the information in the __"/src/config/config.json"__ file.
- Run migrations via ["__sequelize-cli__"](https://www.npmjs.com/package/sequelize-cli).
