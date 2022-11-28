const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let sqls = [
  'insert into jidol ("id", "name", "birthday", "birthplace", "team_id") values (21, "永瀬廉", "1999/1/23", "東京都", 4);',
  'insert into jidol ("id", "name", "birthday", "birthplace", "team_id") values (22, "平野紫耀", "1997/1/29", "愛知県", 4);',
  'insert into jidol ("id", "name", "birthday", "birthplace", "team_id") values  (18, "岸優太", "1995/9/29", "埼玉県", 4);',
  'insert into jidol ("id", "name", "birthday", "birthplace", "team_id") values (19, "神宮寺勇太", "1997/10/30", "千葉県", 4);',
  'insert into jidol ("id", "name", "birthday", "birthplace", "team_id") values (20, "高橋海斗", "1999/4/3", "神奈川県", 4);'
  
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