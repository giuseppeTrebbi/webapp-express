import connection from "../database/dbConnection.js"



function index(req, res) {
    const query = `select movies.*, cast(avg(reviews.vote) as float) as avg_vote
                    from movies
                    left join reviews
                    on movies.id = reviews.movie_id
                    group by movies.id`

    
    connection.query(query, (err, result) => {
        if (err) {
            throw err
        }
        const movies = result.map(movie => {
            return {
                ...movie,
                image: `${process.env.SERVER_URL}/covers/${movie.image}`
            }
        })
        res.json(movies)
    })
}


function show(req, res) {
    const {id} = req.params
    const movieQuery = `select movies.*, cast(avg(reviews.vote) as float) as avg_vote
                        from movies
                        left join reviews
                        on movies.id = reviews.movie_id
                        where movies.id = ?`


    connection.query(movieQuery, [id], (err, result) => {
        if(err) {
            throw err
        }
        if(result.length === 0) {
            res.status(404)
            return res.json({
                message: "film non trovato"
            })
        }
        const movie = result[0]
        const reviewsQuery = "SELECT * FROM reviews WHERE movie_id = ?"


        connection.query(reviewsQuery, [id], (err, reviewsResult) => {
            if(err) {
                throw err
            }
            const movieWithReviews = {
                ...movie,
                image: `${process.env.SERVER_URL}/covers/${movie.image}`,
                reviews: reviewsResult
            }
            res.json(movieWithReviews)
        })
    })
}


export default { index, show }