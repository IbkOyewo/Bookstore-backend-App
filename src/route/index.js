const express = require('express')
const router = express.Router()
const { validateUser,  checkUser } = require('../middleware/checkData')
const { createNewUser, loginUser } = require('../controller/book')
const { createUserSchema, loginUserSchema } = require('../validation')


router.post(
    '/api/create-user',
    validateUser(createUserSchema, 'body'),
    checkUser('signup'),
    createNewUser
)

router.post(
    '/api/login-user',
    validateUser(loginUserSchema, 'body'),
    checkUser('login'),
    loginUser
 )

 