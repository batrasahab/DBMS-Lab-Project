const express = require('express')
const session = require('express-session')
const app = express()
const path = require('path')
const passport = require('./passport/passport')
const db = require('./db/models').db


app.use(session({
    secret : abc,
    resave : false,
    saveUninitialized : false
}))

app.use(passport.intialize())
app.use(passport.session())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

db.sync({alter: true})
	.then(()=> {
		console.log("Database synchronised")
		app.listen(2626, ()=> 
			console.log("server listenig to port 2626"))
	})