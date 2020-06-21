import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: any;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form. */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Todo`. */
  allTodos?: Maybe<TodosConnection>;
  todoById?: Maybe<Todo>;
  /** Reads a single `Todo` using its globally unique `ID`. */
  todo?: Maybe<Todo>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTodosArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TodosOrderBy>>;
  condition?: Maybe<TodoCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTodoByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTodoArgs = {
  nodeId: Scalars['ID'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


/** Methods to use when ordering `Todo`. */
export enum TodosOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MessageAsc = 'MESSAGE_ASC',
  MessageDesc = 'MESSAGE_DESC',
  PriorityAsc = 'PRIORITY_ASC',
  PriorityDesc = 'PRIORITY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Todo` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TodoCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `message` field. */
  message?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `priority` field. */
  priority?: Maybe<PriorityLevel>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
};

export enum PriorityLevel {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH'
}


/** A connection to a list of `Todo` values. */
export type TodosConnection = {
  __typename?: 'TodosConnection';
  /** A list of `Todo` objects. */
  nodes: Array<Maybe<Todo>>;
  /** A list of edges which contains the `Todo` and cursor to aid in pagination. */
  edges: Array<TodosEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Todo` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Todo = Node & {
  __typename?: 'Todo';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  priority?: Maybe<PriorityLevel>;
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A `Todo` edge in the connection. */
export type TodosEdge = {
  __typename?: 'TodosEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Todo` at the end of the edge. */
  node?: Maybe<Todo>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Todo`. */
  createTodo?: Maybe<CreateTodoPayload>;
  /** Updates a single `Todo` using its globally unique id and a patch. */
  updateTodo?: Maybe<UpdateTodoPayload>;
  /** Updates a single `Todo` using a unique key and a patch. */
  updateTodoById?: Maybe<UpdateTodoPayload>;
  /** Deletes a single `Todo` using its globally unique id. */
  deleteTodo?: Maybe<DeleteTodoPayload>;
  /** Deletes a single `Todo` using a unique key. */
  deleteTodoById?: Maybe<DeleteTodoPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTodoByIdArgs = {
  input: UpdateTodoByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTodoByIdArgs = {
  input: DeleteTodoByIdInput;
};

/** All input for the create `Todo` mutation. */
export type CreateTodoInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Todo` to be created by this mutation. */
  todo: TodoInput;
};

/** An input for mutations affecting `Todo` */
export type TodoInput = {
  message?: Maybe<Scalars['String']>;
  priority?: Maybe<PriorityLevel>;
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** The output of our create `Todo` mutation. */
export type CreateTodoPayload = {
  __typename?: 'CreateTodoPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Todo` that was created by this mutation. */
  todo?: Maybe<Todo>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Todo`. May be used by Relay 1. */
  todoEdge?: Maybe<TodosEdge>;
};


/** The output of our create `Todo` mutation. */
export type CreateTodoPayloadTodoEdgeArgs = {
  orderBy?: Maybe<Array<TodosOrderBy>>;
};

/** All input for the `updateTodo` mutation. */
export type UpdateTodoInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Todo` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Todo` being updated. */
  todoPatch: TodoPatch;
};

/** Represents an update to a `Todo`. Fields that are set will be updated. */
export type TodoPatch = {
  message?: Maybe<Scalars['String']>;
  priority?: Maybe<PriorityLevel>;
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** The output of our update `Todo` mutation. */
export type UpdateTodoPayload = {
  __typename?: 'UpdateTodoPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Todo` that was updated by this mutation. */
  todo?: Maybe<Todo>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Todo`. May be used by Relay 1. */
  todoEdge?: Maybe<TodosEdge>;
};


/** The output of our update `Todo` mutation. */
export type UpdateTodoPayloadTodoEdgeArgs = {
  orderBy?: Maybe<Array<TodosOrderBy>>;
};

/** All input for the `updateTodoById` mutation. */
export type UpdateTodoByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Todo` being updated. */
  todoPatch: TodoPatch;
  id: Scalars['Int'];
};

/** All input for the `deleteTodo` mutation. */
export type DeleteTodoInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Todo` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Todo` mutation. */
export type DeleteTodoPayload = {
  __typename?: 'DeleteTodoPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Todo` that was deleted by this mutation. */
  todo?: Maybe<Todo>;
  deletedTodoId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Todo`. May be used by Relay 1. */
  todoEdge?: Maybe<TodosEdge>;
};


/** The output of our delete `Todo` mutation. */
export type DeleteTodoPayloadTodoEdgeArgs = {
  orderBy?: Maybe<Array<TodosOrderBy>>;
};

/** All input for the `deleteTodoById` mutation. */
export type DeleteTodoByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type AllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodosQuery = (
  { __typename?: 'Query' }
  & { allTodos?: Maybe<(
    { __typename?: 'TodosConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'priority' | 'createdAt' | 'message'>
    )>> }
  )> }
);

export type CreateTodoMutationVariables = Exact<{
  message: Scalars['String'];
  priority: PriorityLevel;
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo?: Maybe<(
    { __typename?: 'CreateTodoPayload' }
    & { todo?: Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id'>
    )> }
  )> }
);


export const AllTodosDocument = gql`
    query allTodos {
  allTodos {
    nodes {
      id
      priority
      createdAt
      message
    }
  }
}
    `;

/**
 * __useAllTodosQuery__
 *
 * To run a query within a React component, call `useAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
        return ApolloReactHooks.useQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, baseOptions);
      }
export function useAllTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, baseOptions);
        }
export type AllTodosQueryHookResult = ReturnType<typeof useAllTodosQuery>;
export type AllTodosLazyQueryHookResult = ReturnType<typeof useAllTodosLazyQuery>;
export type AllTodosQueryResult = ApolloReactCommon.QueryResult<AllTodosQuery, AllTodosQueryVariables>;
export const CreateTodoDocument = gql`
    mutation createTodo($message: String!, $priority: PriorityLevel!) {
  createTodo(input: {todo: {message: $message, priority: $priority}}) {
    todo {
      id
    }
  }
}
    `;
export type CreateTodoMutationFn = ApolloReactCommon.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      message: // value for 'message'
 *      priority: // value for 'priority'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;