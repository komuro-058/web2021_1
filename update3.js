const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let sql = `
UPDATE team SET team_img = "/public/img/js/sexyzonn.jpg" WHERE team="Sexy Zone";
`

db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを更新しました" );
	});
});
