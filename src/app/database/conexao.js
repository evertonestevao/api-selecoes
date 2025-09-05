import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

conexao.connect();

/**
 * Executa um código SQL com ou sem valores
 * @param {*} sql instrução SQL a ser executada
 * @param {string=id | [selecao,id]} valores a serem passados para o sql
 * @param {*} mensagemReject mensagem de erro personalizada a ser exibida
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (erro, resultado) => {
      if (erro) return reject(mensagemReject + " " + erro);
      const row = JSON.parse(JSON.stringify(resultado));
      return resolve(row);
    });
  });
};

export default conexao;
