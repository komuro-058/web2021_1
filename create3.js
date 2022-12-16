const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let schema = `
alter table team add team_img varchar(20);
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