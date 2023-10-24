const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

function list() {
  return knex("movies").select("*");
}

function listIsShowing() {
  return knex("movies as m")
    .distinct()
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .select(
      "m.movie_id",
      "m.title",
      "m.runtime_in_minutes",
      "m.rating",
      "m.description",
      "m.image_url"
    )
    .where({ is_showing: true });
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

function movieTheaters(movieId) {
  return knex("movies as m")
      .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
      .join("theaters as t", "mt.theater_id", "t.theater_id")
      .select("t.*", "mt.is_showing", "m.movie_id")
      .where({ "m.movie_id": movieId })
      .andWhere({ "mt.is_showing": true });
}

function movieReviews(movieId) {
  return knex("reviews as r")
        .join("critics as c", "r.critic_id", "c.critic_id")
        .select("*")
        .where({ movie_id: movieId })
        .then((result) => {
            const formattedReviews = [];
            result.forEach((item) => {
                const criticItem = addCritic(item);
                formattedReviews.push(criticItem);
            });
            return formattedReviews;
        });
}


module.exports = {
  list,
  read,
  listIsShowing,
  movieTheaters,
  movieReviews,
}
