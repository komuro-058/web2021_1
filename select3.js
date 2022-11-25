const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let sql = `
select id, name, birthday, birthplace, team_id from jidol;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' ' + data.birthday + ' ' + data.birthplace + ' ' + data.team_id);
		}
	});
});
