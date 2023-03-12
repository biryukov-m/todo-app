import React from 'react';
import { Filters } from '../components/Filters/Filters.component';
import { TodosTable } from '../components/TodosTable/TodosTable.component';
import { TodosMobile } from '../components/TodosMobile/TodosMobile.component';
import { useViewPortWidth } from '../../common/hooks/useViewPortWidth';
import { MEDIA } from '../../theme';

// const todos = [
//   {
//     isPublic: false,
//     isCompleted: false,
//     _id: '6408b2b38abb0642e228aefa',
//     title: 'Todo #1 !',
//     description: 'Hello',
//     createdAt: '2023-03-08T16:07:15.677Z',
//     updatedAt: '2023-03-08T23:18:00.232Z',
//     __v: 0
//   },
//   {
//     isPublic: false,
//     isCompleted: false,
//     _id: '6408b2b38abb0642e228aefc',
//     title: 'Todo #2!',
//     description: 'Hello',
//     createdAt: '2023-03-08T16:07:15.682Z',
//     updatedAt: '2023-03-08T22:26:40.329Z',
//     __v: 0
//   },
//   {
//     isPublic: true,
//     isCompleted: true,
//     _id: '6409bed919b3d618e2777b63',
//     title: 'Todo #3',
//     description: 'New todo description',
//     createdAt: '2023-03-09T11:11:21.195Z',
//     updatedAt: '2023-03-09T11:11:21.195Z',
//     __v: 0
//   }
// ];

const todos = [
  {
    isPublic: false,
    isCompleted: false,
    _id: '6408b2b38abb0642e228aefa',
    title: 'Todo #1 !',
    description:
      'Lorem Ipsum is simply dummy text of the prook a gng Lorem Ipsum passages, and software like Aldus PageMaing versions of Lorem Ipsum.'
  },
  {
    isPublic: false,
    isCompleted: false,
    _id: '6408b2b38abb0642e228aefc',
    title: 'Todo #2!',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard '
  },
  {
    isPublic: false,
    isCompleted: false,
    _id: '6408b2b38abb0642e228aefe',
    title: 'ZTodo #1 !',
    description: 'ZHello'
  },
  {
    isPublic: true,
    isCompleted: true,
    _id: '6409bed919b3d618e2777b63',
    title: 'Todo #3',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ever since the 1500s,'
  }
];

export const Todos: React.FC = () => {
  const viewPortWidth = useViewPortWidth(window.innerWidth);
  return (
    <>
      <Filters />
      {viewPortWidth > MEDIA.tablet && <TodosTable {...{ todos }} />}
      {viewPortWidth < MEDIA.mobile && <TodosMobile {...{ todos }} />}
      <span>Pagination</span>
    </>
  );
};
