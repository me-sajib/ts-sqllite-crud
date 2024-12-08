
# EXPRESS TS & BETTER SQLLITE3 CRUD

A CRUD REST API application build with Express.js, TypeScript and better-sqllite3.

### INSTALLATION & SETUP

Clone application from given repository: 
```bash
git clone https://github.com/mamun-swe/express-ts-better-sqllite3-crud.git
```

Install neccessarry packages, using given command
```bash
cd ./express-ts-better-sqllite3-crud
npm i --save
```

Make .env file to root directory and copy & paste all variables from .env.example to .env file.

Run in development mode:
```bash
npm run dev
```
Build application:
```bash
npm run build
```

Run in production mode:
```bash
npm start
```
Browse http://localhost:5000 to your browser.

### API ENDPOINTS

- [GET] http://localhost:5000/api/v1/todos
- [POST] http://localhost:5000/api/v1/todos
- [GET] http://localhost:5000/api/v1/todos/3
- [PUT] http://localhost:5000/api/v1/todos/3
- [DELETE] http://localhost:5000/api/v1/todos/3