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

        const filtered = data.result.map(movie => ({
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count
        }));

        res.json(filtered)
    })

    .catch(err => console.error(err))
})




module.exports = router;
