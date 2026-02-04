var express = require("express");
var router = express.Router();

const movieDetails = require("../data/movieDetails");

router.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  const results = movieDetails.find((movie) => {
    console.log(movie.id, "=====", movieId);
    return movie.id == movieId;
  });
  if (!results) {
    res.json({
      msg: "Movie ID is not found",
      production_companies: [],
    });
  } else {
    res.json(results);
  }
});

module.exports = router;
