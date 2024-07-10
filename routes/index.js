var express = require('express');
var router = express.Router();

router.get('/movies', (req,res) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `${process.env.BEARER_TOKEN}`
        }
    };

    fetch('https://api.themoviedb.org/3/discover/movie', options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => console.error(err))
})

module.exports = router;
