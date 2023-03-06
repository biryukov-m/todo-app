import { Router } from 'express';

import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

todosRouter.get('', todoController.getAllTodo.bind(todoController));
todosRouter.post('', todoController.addTodo.bind(todoController));

export default todosRouter;
