# Backend

Tripsplit runs on Ruby on Rails and is hosted on Heroku. The sole purpose of the backend is to provide RESTful APIs and respond with JSON data.

Rails controllers handle the filtering of results being passed back to the front end. Bills can be requested in full by current user signed in or filtered by specific friend selected by passing the specific friend's id to the controller as a filter parameter.

User authorization is handled by the session controller and ensures that the current user has access limited to his data. Password security is handled by using BCrypt encryption technology and stored in a password digest.

## Database

PostgreSQL
