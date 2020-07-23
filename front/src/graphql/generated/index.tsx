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
  priority_level: any;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** An object with globally unique ID */
export type Node = {
  /** A globally unique identifier */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  todo_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}


/** expression to compare columns of type priority_level. All fields are combined with logical 'AND'. */
export type Priority_Level_Comparison_Exp = {
  _eq?: Maybe<Scalars['priority_level']>;
  _gt?: Maybe<Scalars['priority_level']>;
  _gte?: Maybe<Scalars['priority_level']>;
  _in?: Maybe<Array<Scalars['priority_level']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['priority_level']>;
  _lte?: Maybe<Scalars['priority_level']>;
  _neq?: Maybe<Scalars['priority_level']>;
  _nin?: Maybe<Array<Scalars['priority_level']>>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  node?: Maybe<Node>;
  /** fetch data from the table: "todos" */
  todos_connection: TodosConnection;
};


/** query root */
export type Query_RootNodeArgs = {
  id: Scalars['ID'];
};


/** query root */
export type Query_RootTodos_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  node?: Maybe<Node>;
  /** fetch data from the table: "todos" */
  todos_connection: TodosConnection;
};


/** subscription root */
export type Subscription_RootNodeArgs = {
  id: Scalars['ID'];
};


/** subscription root */
export type Subscription_RootTodos_ConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = Node & {
  __typename?: 'todos';
  created_at: Scalars['timestamptz'];
  done?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message: Scalars['String'];
  priority?: Maybe<Scalars['priority_level']>;
  todo_id: Scalars['Int'];
};

/** A Relay Connection object on "todos" */
export type TodosConnection = {
  __typename?: 'todosConnection';
  edges: Array<TodosEdge>;
  pageInfo: PageInfo;
};

export type TodosEdge = {
  __typename?: 'todosEdge';
  cursor: Scalars['String'];
  node: Todos;
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields';
  avg?: Maybe<Todos_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
  stddev?: Maybe<Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Todos_Sum_Fields>;
  var_pop?: Maybe<Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Todos_Var_Samp_Fields>;
  variance?: Maybe<Todos_Variance_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todos" */
export type Todos_Aggregate_Order_By = {
  avg?: Maybe<Todos_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Todos_Max_Order_By>;
  min?: Maybe<Todos_Min_Order_By>;
  stddev?: Maybe<Todos_Stddev_Order_By>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Order_By>;
  sum?: Maybe<Todos_Sum_Order_By>;
  var_pop?: Maybe<Todos_Var_Pop_Order_By>;
  var_samp?: Maybe<Todos_Var_Samp_Order_By>;
  variance?: Maybe<Todos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: 'todos_avg_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "todos" */
export type Todos_Avg_Order_By = {
  todo_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  _not?: Maybe<Todos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  done?: Maybe<Boolean_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  priority?: Maybe<Priority_Level_Comparison_Exp>;
  todo_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosMessageKey = 'todos_message_key',
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for incrementing integer column in table "todos" */
export type Todos_Inc_Input = {
  todo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  done?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['priority_level']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  message?: Maybe<Scalars['String']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "todos" */
export type Todos_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  message?: Maybe<Scalars['String']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "todos" */
export type Todos_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todos>;
};

/** input type for inserting object relation for remote table "todos" */
export type Todos_Obj_Rel_Insert_Input = {
  data: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns: Array<Todos_Update_Column>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** ordering options when selecting data from "todos" */
export type Todos_Order_By = {
  created_at?: Maybe<Order_By>;
  done?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "todos" */
export type Todos_Pk_Columns_Input = {
  todo_id: Scalars['Int'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Done = 'done',
  /** column name */
  Message = 'message',
  /** column name */
  Priority = 'priority',
  /** column name */
  TodoId = 'todo_id'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  done?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['priority_level']>;
  todo_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: 'todos_stddev_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "todos" */
export type Todos_Stddev_Order_By = {
  todo_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: 'todos_stddev_pop_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "todos" */
export type Todos_Stddev_Pop_Order_By = {
  todo_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: 'todos_stddev_samp_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "todos" */
export type Todos_Stddev_Samp_Order_By = {
  todo_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: 'todos_sum_fields';
  todo_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todos" */
export type Todos_Sum_Order_By = {
  todo_id?: Maybe<Order_By>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Done = 'done',
  /** column name */
  Message = 'message',
  /** column name */
  Priority = 'priority',
  /** column name */
  TodoId = 'todo_id'
}

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: 'todos_var_pop_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "todos" */
export type Todos_Var_Pop_Order_By = {
  todo_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: 'todos_var_samp_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "todos" */
export type Todos_Var_Samp_Order_By = {
  todo_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: 'todos_variance_fields';
  todo_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "todos" */
export type Todos_Variance_Order_By = {
  todo_id?: Maybe<Order_By>;
};

export type AllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodosQuery = (
  { __typename?: 'query_root' }
  & { todos_connection: (
    { __typename?: 'todosConnection' }
    & { edges: Array<(
      { __typename?: 'todosEdge' }
      & { node: (
        { __typename?: 'todos' }
        & Pick<Todos, 'id' | 'todo_id' | 'priority' | 'created_at' | 'message' | 'done'>
      ) }
    )> }
  ) }
);

export type InsertTodoMutationVariables = Exact<{
  priority?: Maybe<Scalars['priority_level']>;
  message?: Maybe<Scalars['String']>;
}>;


export type InsertTodoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todos?: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type SetTodoDoneMutationVariables = Exact<{
  _eq: Scalars['Int'];
}>;


export type SetTodoDoneMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos?: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id' | 'done'>
    )> }
  )> }
);


export const AllTodosDocument = gql`
    query allTodos {
  todos_connection(order_by: {created_at: desc}) {
    edges {
      node {
        id
        todo_id
        priority
        created_at
        message
        done
      }
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
export const InsertTodoDocument = gql`
    mutation insertTodo($priority: priority_level, $message: String) {
  insert_todos(objects: {message: $message, priority: $priority}) {
    returning {
      id
    }
  }
}
    `;
export type InsertTodoMutationFn = ApolloReactCommon.MutationFunction<InsertTodoMutation, InsertTodoMutationVariables>;

/**
 * __useInsertTodoMutation__
 *
 * To run a mutation, you first call `useInsertTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTodoMutation, { data, loading, error }] = useInsertTodoMutation({
 *   variables: {
 *      priority: // value for 'priority'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useInsertTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTodoMutation, InsertTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertTodoMutation, InsertTodoMutationVariables>(InsertTodoDocument, baseOptions);
      }
export type InsertTodoMutationHookResult = ReturnType<typeof useInsertTodoMutation>;
export type InsertTodoMutationResult = ApolloReactCommon.MutationResult<InsertTodoMutation>;
export type InsertTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertTodoMutation, InsertTodoMutationVariables>;
export const SetTodoDoneDocument = gql`
    mutation setTodoDone($_eq: Int!) {
  update_todos(_set: {done: true}, where: {todo_id: {_eq: $_eq}}) {
    returning {
      id
      done
    }
  }
}
    `;
export type SetTodoDoneMutationFn = ApolloReactCommon.MutationFunction<SetTodoDoneMutation, SetTodoDoneMutationVariables>;

/**
 * __useSetTodoDoneMutation__
 *
 * To run a mutation, you first call `useSetTodoDoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTodoDoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTodoDoneMutation, { data, loading, error }] = useSetTodoDoneMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useSetTodoDoneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetTodoDoneMutation, SetTodoDoneMutationVariables>) {
        return ApolloReactHooks.useMutation<SetTodoDoneMutation, SetTodoDoneMutationVariables>(SetTodoDoneDocument, baseOptions);
      }
export type SetTodoDoneMutationHookResult = ReturnType<typeof useSetTodoDoneMutation>;
export type SetTodoDoneMutationResult = ApolloReactCommon.MutationResult<SetTodoDoneMutation>;
export type SetTodoDoneMutationOptions = ApolloReactCommon.BaseMutationOptions<SetTodoDoneMutation, SetTodoDoneMutationVariables>;