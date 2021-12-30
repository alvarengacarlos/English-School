# English School API
This application controls an English school

# Entry Points

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

# Database Configuration
[Mariadb](https://mariadb.org/) is used as database.

- Change the information in the __"/src/config/config.json"__ file.
- Run migrations via ["__sequelize-cli__"](https://www.npmjs.com/package/sequelize-cli).