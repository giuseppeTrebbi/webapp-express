import connection from "../database/dbConnection.js"



function index(req, res) {
    const query = `select movies.*, cast(avg(reviews.vote) as float) as avg_vote
                    from movies
                    left join reviews
                    on movies.id = reviews.movie_id
                    group by movies.id`
    connection.query(query, (err, results) => {
        if (err) {
            throw err
        }
        res.json(results)
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
            const respObj = {
                ...movie,
                reviews: reviewsResult
            }
            res.json(respObj)
        })
    })
}


export default { index, show }