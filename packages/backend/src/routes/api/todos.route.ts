import { Router } from 'express';
import { validateBody } from '../../middleware/validateBody.middleware';
import { todoValidationSchema } from '../../models/Todo';

import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

todosRouter.get('/:todoId', todoController.getOneTodo.bind(todoController));
todosRouter.get('', todoController.getAllTodo.bind(todoController));
todosRouter.post(
  '',
  validateBody(todoValidationSchema),
  todoController.addTodo.bind(todoController)
);
todosRouter.put('', todoController.updateTodo.bind(todoController));
todosRouter.delete('/:todoId', todoController.deleteOneTodo.bind(todoController));

export default todosRouter;
