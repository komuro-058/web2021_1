const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let schema = `
create table jidol(
  id integer primary key,
  name text,
  birthday date,
  birthplace text,
  team_id integer
);
`

db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
