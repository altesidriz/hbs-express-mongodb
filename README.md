# hbs-express-mongodb
Projects with Express.js MongoDB and Handlebars

1. Steps for init project and structure
        % npm i express
        % npm i mongoose -D
2. Setup developer environment
         - configure bodyparser
         - configure static middleware
         - configure routes
3. Add images and css in public folder
4. Add html files in views
5. Install express-handlebars
        % npm i express-handlebars
        - configure view engine
        - add main layout
        - fix paths to img and static css files in template
6. Convert all html to hbs and fix view
7. Add database
        - install mongoose
        - connect to db
8. Users functionality
        - user controler
        - add controler to route
        - fix navigation in the navbar (login, reg, logout)
        - render login page
        - render register page
9. Add user model
        - simple validation in Schema
        - add method for register
        - create User record
        - validate repeat password
        - validate email already exists
        - pass hashingg
10. Login
        - find user by email
        - validate pass with hashed pass
11. JsonWebToken
        - promisify jwt
        - generate secret
        - generate token at login
12. Return token in cookie
        - cookie-parser
        - configure cookie parser
        - set cookie with token
13. Implement logout func
14. Authentication middleware
