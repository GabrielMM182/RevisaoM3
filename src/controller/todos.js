const pool = require("../database/conexao");

const cadastrarTarefa = async (req, res) => {
  const { tarefa } = req.body;

  if (!tarefa) {
    return res.status(400).json({ mensagem: "O campo nome é obrigatorio" });
  }

  try {
    const query = `insert into todos (usuario_id, tarefa, data) values ($1, $2, $3) returning *`;

    const params = [req.usuario.id, tarefa, new Date()];

    const { rows } = await pool.query(query, params);

    return res.status(201).json(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const atualizarTarefa = async (req, res) => {
  const { tarefa } = req.body;
  const { id } = req.params;

  try {
    const { rowCount } = await pool.query(
      "select * from todos where id = $1 and usuario_id = $2",
      [id, req.usuario.id]
    );

    if (rowCount === 0) {
      return res.status(404).json({ mensagem: "Tarefa não existe" });
    }

    const queryAtualizaTarefa = "update todos set tarefa = $1 where id = $2";

    await pool.query(queryAtualizaTarefa, [tarefa, id]);

    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const listarTarefas = async (req, res) => {
	try {
		const { rows: todos } = await pool.query(
			'select id, tarefa, data from todos where usuario_id = $1',
			[req.usuario.id]
		)
		return res.json(todos)
	} catch (error) {
        console.log(error)
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

const detalharTarefas = async (req, res) => {
	const { id } = req.params

	try {
		const { rows, rowCount } = await pool.query(
			'select  tarefa, data from todos where id = $1 and usuario_id = $2',
			[id, req.usuario.id]
		)

		if (rowCount === 0) {
			return res.status(404).json({ mensagem: 'Tarefa não existe' })
		}

		const todos = rows[0]

		return res.json(todos)
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

const deletarTarefa = async (req, res) => {
	const { id } = req.params

	try {
		const { rows, rowCount } = await pool.query(
			'select  id, tarefa, data from todos where id = $1 and usuario_id = $2',
			[id, req.usuario.id]
		)

		if (rowCount === 0) {
			return res.status(404).json({ mensagem: 'tarefa não existe' })
		}

		await pool.query('delete from todos where id = $1', [id])

		return res.status(204).send()
	} catch (error) {
        console.log(error)
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

module.exports = {
  cadastrarTarefa,
  atualizarTarefa,
  listarTarefas,
  detalharTarefas,
  deletarTarefa
};
