const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let sqls = [
  "update team set debut='1994/9/21' where team='TOKIO';",
  "update team set debut='1997/7/21' where team='Kinki Kids';",
  "update team set debut='2006/3/22' where team='KAT-TUN';",
  "update team set debut='2007/11/14' where team='Hay!Say!JUMP';",
  "update team set debut='2011/11/16' where team='Sexy Zone';",
  "update team set debut='2022/10/28' where team='Travis Japan';",
  "update team set debut='2003/11/7' where team='NEWS';",
  "update team set debut='2014/4/23' where team='ジャニーズWEST';",
  "update team set debut='2011/8/10' where team='Kis-My-Ft2';",
  "update team set debut='2020/1/22' where team='Snow Man';",
  "update team set debut='2020/1/22' where team='SixTONES';",
  "update team set debut='2012/2/1' where team='A.B.C-Z';"
  ]
for(let sql of sqls){
  db.serialize( () => {
	  db.run( sql, (error, row) => {
		  if(error) {
			  console.log('Error: ', error );
			  return;
		  }
		  console.log( "データを編集しました" );
  	});
  });
}