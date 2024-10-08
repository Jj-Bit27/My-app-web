import express from 'express'
import { getPosts, getPost, createPost, deletePost, editPost } from '../controllers/posts.controller.js'

const router = express.Router()

router.get('/', getPosts) // localhost:3000/api/posts -> obtener publicaciones

router.get('/:id', getPost) // localhost:3000/api/posts/1 -> obtener una publicacion por id

router.post('/create', createPost) // localhost:3000/api/posts/create -> crear una publicacion

router.delete('/delete/:id', deletePost) // localhost:3000/api/posts/delete/1 -> eliminar una publicacion por id

router.put('/edit/:id', editPost) // localhost:3000/api/posts/edit/1 -> editar una publicacion por id

export default router