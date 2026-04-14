import connection from "../database/dbConnection.js"
import { DateTime } from "luxon"




function index(req, res) {
    const { search } = req.query
    let params = []
    let query = `select movies.*, cast(avg(reviews.vote) as float) as avg_vote
                    from movies
                    left join reviews
                    on movies.id = reviews.movie_id `
    if (search) {
        query += ` where movies.title like ? `
        params.push(`%${search}%`)
    }
    query += ` group by movies.id`


    connection.query(query, params, (err, result) => {
        if (err) {
            throw err
        }
        const movies = result.map(movie => {
            return {
                ...movie,
                image: movie.image ? `${process.env.SERVER_URL}/covers/${movie.image}` : null,
                created_at: DateTime.fromObject(movie.created_at).setLocale("it").toLocaleString(),
                updated_at: DateTime.fromObject(movie.updated_at).setLocale("it").toLocaleString()
            }
        })
        res.json(movies)
    })
}



function show(req, res) {
    const { slug } = req.params
    const movieQuery = `select movies.*, cast(avg(reviews.vote) as float) as avg_vote
                        from movies
                        left join reviews
                        on movies.id = reviews.movie_id
                        where movies.slug = ?`


    connection.query(movieQuery, [slug], (err, result) => {
        if (err) {
            throw err
        }
        if (result.length === 0 || !result[0].id) {
            res.status(404)
            return res.json({
                message: "film non trovato"
            })
        }
        const movie = result[0]
        const reviewsQuery = "SELECT * FROM reviews WHERE movie_id = ?"
        connection.query(reviewsQuery, [movie.id], (err, reviewsResult) => {
            if (err) {
                throw err
            }
            const movieWithReviews = {
                ...movie,
                image: movie.image ? `${process.env.SERVER_URL}/covers/${movie.image}` : null,
                created_at: DateTime.fromObject(movie.created_at).setLocale("it").toLocaleString(),
                updated_at: DateTime.fromObject(movie.updated_at).setLocale("it").toLocaleString(),
                reviews: reviewsResult.map(review => {
                    return {
                        ...review,
                        created_at: DateTime.fromObject(review.created_at).setLocale("it").toLocaleString(),
                        updated_at: DateTime.fromObject(review.updated_at).setLocale("it").toLocaleString(),
                    }
                })
            }
            res.json(movieWithReviews)
        })
    })
}


function storeReview(req, res) {
    const { id } = req.params
    const { name, vote, text } = req.body
    const sql = `INSERT INTO reviews (movie_id, name, vote, text)
                VALUES (?, ?, ?, ?)`

    
    connection.query(sql, [id, name, vote, text], (err, results) => {
        if(err) { throw err }
        console.log(results)
        res.status(201)
        res.json({
            message: "review added"
        })
    })
}


export default { index, show, storeReview }



