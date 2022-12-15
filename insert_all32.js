const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let sqls = [
  'insert into team ("team", "funs", "debut") values ("Snow Man", 891000, 2020-1-22);',
  'insert into team ("team", "funs", "debut") values ("Hay!Say!JUMP", 737000, 2007-11-14);',
  'insert into team ("team", "funs", "debut") values ("Kinki Kids", 620000, 1997-7-21);',
  'insert into team ("team", "funs", "debut") values ("SixTONES", 620000, 2020-1-22);',
  'insert into team ("team", "funs", "debut") values ("Kis-My-Ft2", 570000, 2011-8-10);',
  'insert into team ("team", "funs", "debut") values ("Sexy Zone", 471000, 2011-11-16);',
  'insert into team ("team", "funs", "debut") values ("ジャニーズWEST", 460000, 2014-4-23);',
  'insert into team ("team", "funs", "debut") values ("NEWS", 410000, 2003-11-7);',
  'insert into team ("team", "funs", "debut") values ("KAT-TUN", 264000, 2006-3-22);',
  'insert into team ("team", "funs", "debut") values ("Travis Japan", 140000, 2022-10-28);',
  'insert into team ("team", "funs", "debut") values ("TOKIO", 120000, 1994-9-21);',
  'insert into team ("team", "funs", "debut") values ("A.B.C-Z", 85000, 2012-2-1);'
]

for(let sql of sqls){
  db.serialize( () => {
	  db.run( sql, (error, row) => {
		  if(error) {
			  console.log('Error: ', error );
			  return;
		  }
		  console.log( "データを追加しました" );
  	});
  });
}