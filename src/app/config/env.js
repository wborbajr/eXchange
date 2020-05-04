const env = {
  database: 'exchange',
  username: 'exchange',
  password: 'exchange',
  host: '192.168.64.2',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;