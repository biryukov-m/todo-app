import { Router } from 'express';
import { validateRequest } from '../../middleware/validateRequest.middleware';
import { tryCatch } from '../../middleware/tryCatch.middleware';
import { isExist } from '../../middleware/isExist.middleware';
import {
  getOneTodoValidationSchema,
  postTodoValidationSchema,
  updateTodoValidationSchema,
  Todo
} from '../../models/Todo';

import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

// @route   GET api/todo/:todoId
// @desc    Get Todo by id, returns Todo from db
// @access  Public
todosRouter.get(
  '/:id',
  validateRequest(getOneTodoValidationSchema, 'params'),
  isExist(Todo),
  tryCatch(todoController.getOneTodo.bind(todoController))
);

// @route   GET api/todo/
// @desc    Get all Todos, returns array of Todos from db
// @access  Public
todosRouter.get('', tryCatch(todoController.getAllTodo.bind(todoController)));

// @route   POST api/todo/
// @desc    Create new Todo, returns new Todo
// @access  Public
todosRouter.post(
  '',
  validateRequest(postTodoValidationSchema),
  tryCatch(todoController.addTodo.bind(todoController))
);

// @route   PUT api/todo/
// @desc    Update existing Todo, returns updated todo
// @access  Public
todosRouter.put(
  '',
  validateRequest(updateTodoValidationSchema),
  isExist(Todo),
  tryCatch(todoController.updateTodo.bind(todoController))
);

// @route   DELETE api/todo/:todoId
// @desc    Deletes Todo by id from db, returns deleted Todo from db
// @access  Public
todosRouter.delete(
  '/:id',
  validateRequest(getOneTodoValidationSchema, 'params'),
  isExist(Todo),
  tryCatch(todoController.deleteOneTodo.bind(todoController))
);

export default todosRouter;
