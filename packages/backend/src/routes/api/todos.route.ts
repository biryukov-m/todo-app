import { Router } from 'express';

import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

todosRouter.get('/:todoId', todoController.getOneTodo.bind(todoController));
todosRouter.get('', todoController.getAllTodo.bind(todoController));
todosRouter.post('', todoController.addTodo.bind(todoController));
todosRouter.put('', todoController.updateTodo.bind(todoController));

export default todosRouter;
