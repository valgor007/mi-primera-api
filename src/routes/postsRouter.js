import { Router } from "express";

const router = Router()

router.route('/posts')
  .get()
  .post()

router.route('/posts/:id')
  .get()
  .put()
  .delete()