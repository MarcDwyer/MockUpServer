const qs = require('qs');

module.exports = function(app, db) {

    app.post('/client', (req, res) => {
        console.log(req.body)
    //    const obj = {firstName: req.body.firstName, lastName: req.body.lastName, phone: req.body.phone, email: req.body.email, date: req.body.date};
         db.collection('client').insert(req.body, (err, result) => {
            if (err) {
                res.send({'error': 'error has occured'})
            } else {
                res.send(result.ops)
        }
})
})
}