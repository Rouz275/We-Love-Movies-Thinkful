const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const { is_showing } = req.query;
    const data = await moviesService.list();

    if (is_showing) {
        res.json({ data: await moviesService.listIsShowing() });
    } else {   
        res.json({ data });
    }
}

async function movieExists(req, res, next) {
    const movie = await moviesService.read(req.params.movieId);
    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    next({
        status: 404,
        message: `Movie cannot be found.`,
    });
}

async function read(req, res, next) {
    const { movie: data } = res.locals;
    res.json({ data });
}

async function movieTheaters(req, res, next) {
    const data = await moviesService.movieTheaters(req.params.movieId);
    res.json({ data });
}

async function movieReviews(req, res, next) {
    const data = await moviesService.movieReviews(req.params.movieId);
    res.json({ data });
}


module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
    movieExists: [asyncErrorBoundary(movieExists)],
    movieTheaters: [asyncErrorBoundary(movieExists), asyncErrorBoundary(movieTheaters)],
    movieReviews: [asyncErrorBoundary(movieExists), asyncErrorBoundary(movieReviews)],
}