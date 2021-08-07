const { connectionMysql } = require('./.env')

module.exports = {
  client: connectionMysql.client,
  connection: connectionMysql,
  pool: connectionMysql.pool,
  migrations: connectionMysql.migrations
}
