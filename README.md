# Mongo-Admin
A simple web interface for local mongodb database management. Made with Node JS, EJS and bootstrap

## Environment variable

Create a `.env` file in the root of your project and insert
your key/value pairs in the following format of `KEY=VALUE`:
```sh
DATABASE_HOST=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
ACCESS_PASSWORD=
PORT=
```

## Todo

- [X] View and access databases 
- [X] View and access collections
- [X] View documents 
- [ ] Add login for production
- [ ] View a single document
- [ ] Edit document
- [ ] Delete document
- [ ] Delete collections
- [ ] Delete database
- [ ] Add database
- [ ] Add collection database
- [ ] Add document database
- [ ] Good design
- [ ] View documents exactly as in MongoDB Compass
- [ ] Download data
- [ ] Import/Export database

<img src="https://i.imgur.com/RaVJNsM.png" width="500">
<img src="https://i.imgur.com/trL220J.png" width="500">
<img src="https://i.imgur.com/GB4VytM.png" width="500">

## Dependencies

- [ejs](https://www.npmjs.com/package/ejs)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [express](https://www.npmjs.com/package/express)
- [express-session](https://www.npmjs.com/package/express-session)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [compression](https://www.npmjs.com/package/compression)

## Dev Dependencies

- [nodemon](https://www.npmjs.com/package/nodemon)