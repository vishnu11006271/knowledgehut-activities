let x = require('./mymodules');
let a1 = x.a;
let b1 = x.b;
let c1 = x.c;
let t = x.test;
t();
console.log(`a1 = ${a1} b1 = ${b1} c1 = ${c1}`);
//importing calculator
let c = require('./util1');
let r = c.add(5,8);
console.log(`Result = ${r}`);
r = c.sub(10,5);
console.log(`Result = ${r}`);
//importing dbOperation
let db = require('./util2').dbOperation;
db.store();
db.fetch();
