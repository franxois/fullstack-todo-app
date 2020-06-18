import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  created_at: Scalars['Float'];
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Mutation = {
  __typename?: 'Mutation';
  todoAdd: Todo;
};


export type MutationTodoAddArgs = {
  message: Scalars['String'];
};

export type Get_All_TodosQueryVariables = {};


export type Get_All_TodosQuery = (
  { __typename?: 'Query' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'message' | 'created_at'>
  )> }
);


export const Get_All_TodosDocument = gql`
    query get_all_todos {
  todos {
    id
    message
    created_at
  }
}
    `;

export function useGet_All_TodosQuery(options: Omit<Urql.UseQueryArgs<Get_All_TodosQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Get_All_TodosQuery>({ query: Get_All_TodosDocument, ...options });
};