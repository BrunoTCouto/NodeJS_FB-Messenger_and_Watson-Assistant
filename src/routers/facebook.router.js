`use strict`

import { auth } from "../controllers/Facebook"

import { Router } from 'express'
// --- Import controllers ---

var router = Router()

const initRouter = () => {
    router.route('/')
        .get(auth)

    return router
}

// --- Functions ---

// -----------------

export default initRouter()