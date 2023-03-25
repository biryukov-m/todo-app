import { useQuery } from '@tanstack/react-query';
import todoService from '../../../services/todo.service';
import { QueryKeys } from '../../common/consts/app-keys.const';

export const useTodo = (id: string) =>
  useQuery({
    queryKey: [QueryKeys.TODO, id],
    queryFn: () => todoService.getTodo(id as string)
  });
