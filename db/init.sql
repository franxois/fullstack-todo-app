CREATE TYPE priority_level AS ENUM ('LOW', 'MEDIUM', 'HIGH');

CREATE TABLE todos (
    todo_id integer primary key generated always as identity,
    message varchar NOT NULL UNIQUE,
    priority priority_level,
    created_at timestamptz not null default now(),
    done boolean DEFAULT false,
    CHECK(length(message)>0)
);
