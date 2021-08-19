# 连接数据库
在实践Nest的过程中遇到的问题

## 配置typeorm报错

在配置数据库的时候，报错

```js
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

^^^^^^

SyntaxError: Cannot use import statement outside a module
```

按照官方文档是在ormconfig.json里配置数据库

```json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "root",
  "database": "test",
  "entities": ["src/**/*.entity{.ts,.js}"],
  "synchronize": true
}
```

配置的没有问题，但为什么报错呢?

在网上找了一下，发现是entities路径设置的问题。

参考[stackoverflow TypeORM Entity in NESTJS - Cannot use import statement outside a module](https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module)

修改entities实例的路径，之前配置默认是取的src目录下的ts文件。不能识别的原因是在js执行上下文引入的ts文件，如果没有用webpack可以使用下面的解决办法

```js
entities: [join(__dirname, '**', '*.entity.{ts,js}')]
```

`join` 是从 `path` 模块引入的。现在 `__dirname` 可以获取到不管是从src或者dist里面的ts或js文件了。



## 数据库存在已创建的表格

创建了一个简单的user表，但第二次运行的时候就报错了，user表已存在

```shell
 [TypeOrmModule] Unable to connect to the database. Retrying (3)... +3100ms
QueryFailedError: Table 'user' already exists
```

下面是我的typeorm的配置信息

```js
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: 'nestProject',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true,
}),
```

找到一个解决办法，就是去掉 `synchronize: true` 这一项，默认是false，再次运行就可以了。



但这个是要去掉synchronize这个属性，如果不去掉这个属性怎么解决呢？



寻求大牛的帮助，又有一个解决办法。

我设置的数据库的名称是大小写驼峰命名法，才导致的无法识别，数据库名称改为下划线命名，character 设置为 utf8，collation设置为utf8_general_ci，再次运行就没有问题了。

```js
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: 'nest_project_data',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true,
}),
```

**注：数据库命名要下划线命名，数据表也需要用下划线命名。**



[TypeORM中文文档](https://typeorm.biunav.com/zh/#快速开始)