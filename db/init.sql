CREATE TYPE priority_level AS ENUM ('LOW', 'MEDIUM', 'HIGH');

CREATE TABLE todos (
    id integer primary key generated always as identity,
    message varchar NOT NULL UNIQUE,
    priority priority_level,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CHECK(length(message)>0)
);

