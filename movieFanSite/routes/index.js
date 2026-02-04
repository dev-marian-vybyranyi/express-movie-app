var express = require("express");
var router = express.Router();
const request = require("request");

const apiKey = process.env.API_KEY;
const apiBaseUrl = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
});

/* GET home page. */
router.get("/", function (req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    console.log(movieData);
    const parsedData = JSON.parse(movieData);
    res.render("index", {
      parsedData: parsedData.results,
    });
  });
});

module.exports = router;
