CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    tarefa TEXT NOT NULL,
     ativo BOOLEAN DEFAULT TRUE,
    data DATE NOT NULL DEFAULT NOW(),
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id)
);

INSERT INTO usuarios (id, nome, email, senha) VALUES ('3', 'maroquinho', 'maroquinho@email.com', '123456')
INSERT INTO usuarios (id, nome, email, senha) VALUES ('4', 'jess', 'jess@email.com', '123456789')