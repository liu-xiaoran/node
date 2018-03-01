const Sequelize = require('sequelize'); // 创建操作数据库的对象
const config = require('./config'); // 引入配置文件

var sequelize = new Sequelize(config.database,config.username,config.password,{
    host: config.host,
    dislect: 'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
})
// 定义模型Pet,告诉Sequelize如何映射数据库表 （看起来像定义类）
// 用sequelize.define()定义Model时，传入名称pet，默认的表名就是pets。第二个参数指定列名和数据类型，如果是主键，需要更详细地指定。
// 第三个参数是额外的配置，我们传入{ timestamps: false }是为了关闭Sequelize的自动添加timestamp的功能。
var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
        timestamps: false
    });
// 往数据库里填写数据
var now = Date.now();
Pet.create({
    id: 'g-' + now,
    name: 'Gaffey',
    gender: false,
    birth: '2007-07-07',
    createdAt: now,
    updatedAt: now,
    version: 0
}).then(function (p) {
    console.log('created.' + JSON.stringify(p));
}).catch(function (err) {
    console.log('failed: ' + err);
});
// 更新数据的方法
(async () => {
    var p = await queryFromSomewhere();
    p.gender = true;
    p.updatedAt = Date.now();
    p.version ++;
    await p.save();
})();
// 删除数据
(async () => {
    var p = await queryFromSomewhere();
    await p.destroy();
})();
// 多人调试时应该写为统一的 model