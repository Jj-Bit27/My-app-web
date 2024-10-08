import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./db/connectDB.js";

import postsRouter from './routes/posts.routes.js'
import usersRouter from './routes/users.routes.js'
import authRouter from './routes/auth.routes.js'

dotenv.config()

const server = express()
const port = process.env.PORT || 5000

server.use(cors({ origin: "http://localhost:3000", credentials: true }));
server.use(express.json())
server.use(cookieParser())

server.use('/api/posts', postsRouter)
server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.use('*', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  connectDB();
  console.log("Server is running on http://localhost:" + port);
});