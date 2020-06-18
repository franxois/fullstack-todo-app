CREATE TABLE todos (
    id integer primary key generated always as identity,
    message varchar,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

