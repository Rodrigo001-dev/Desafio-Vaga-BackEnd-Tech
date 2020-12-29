import { Router } from 'express'

import ListPosts from './Controllers/Posts/index';
import ListOnePost from './Controllers/Posts/show';
import CreatePosts from './Controllers/Posts/create';

import CreateComment from './Controllers/Commets/create';
import ListOneComment from './Controllers/Commets/show';

const routes = Router();

routes.get('/posts', ListPosts);
routes.get('/posts/:id', ListOnePost);
routes.post('/posts', CreatePosts);

routes.post('/posts/:id/comments', CreateComment);
routes.get('/posts/:id/comments', ListOneComment);

export default routes;