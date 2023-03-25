// Local storage keys
export enum StorageKeys {
  JWT_TOKEN_STUDENT = 'JWT_TOKEN_STUDENT',
  JWT_TOKEN_INSTRUCTOR = 'JWT_TOKEN_INSTRUCTOR',
  ADDRESS = 'ADDRESS',
  TOKEN = 'TOKEN'
}

// React-query keys
export enum QueryKeys {
  TODOS = 'todos',
  TODO = 'todo'
}

// Backend Routes
export enum BackendKeys {
  TODOS_ROOT = 'todos'
}

export const ROUTER_KEYS = {
  // ROOT: '/',
  TODOS_ROOT: '/',
  TODO: '/todo/:id'
  // HOME: 'home',
  // AUTHORIZED: 'authorized',
};
