var Sequelize = require('sequelize-mysql').sequelize
var Config = require('config');

var dbType = Config.DB.Type;
var database = Config.DB.Database;
var dbuser = Config.DB.User;
var dbpassword = Config.DB.Password;
var dbport = Config.DB.Port;
var dbhost = Config.DB.Host;

var sequelize = new Sequelize(database, dbuser, dbpassword, {
    dialect:dbType, // or 'sqlite', 'postgres', 'mariadb'
    port:dbport, // or 5432 (for postgres)
    host:dbhost //host address
});

var models = [
    'radcheck',
    'radgroupcheck',
    'radgroupreply',
    'radreply',
    'radusergroup'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname +'/'+ model);
});


(function(m) {
})(module.exports);


module.exports.SequelizeConn = sequelize;