module.exports = function(app, db) {
	
/*
APP POST
*/

	app.post('/rsvp', (req, res) => {
	const newGuest = {
        guest: req.body.guest,
        additionalGuests: req.body.additionalGuests,
        timestamp: req.body.timestamp
    }

    db.collection('guests').insert(newGuest, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
      	res.send(result.ops[0]);
      }
    });
  });

/*
END OF APP POST
*/

/*
BEGINNING OF APP GET
*/

	app.get('/guests', (req, res) => {
	  	const result = db.collection('guests').find({}).toArray((err, item) => {
	  		if (err) console.log(err);
		    res.send(item);
	  	})
	});

/*END OF APP GET
*/

}