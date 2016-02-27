'use strict';

/* 
	https://www.npmjs.com/package/request-promise
	https://www.npmjs.com/package/xml2json

*/


var requestPromisified = require('request-promise');
var parser = require('xml2json');
var cfg = require(process.cwd() + '/configuration/config');

function Controller() {}

// Get an ID of a movie and then request a trailer from different API

Controller.prototype.movies = function(req, res) {

	var movie, id, trailer;
	// imagine that user sends the ID or name of the movie and we handle it here
	var movies = ['upp-2009', 'the-sound-of-music-1965', 'mcfarland-usa-2015'];
	var randomMovie = movies[Math.floor(Math.random() * movies.length)];


	requestPromisified('https://content.viaplay.se/web-se/film/' + randomMovie)

	.then(function(movieBody) {

		movie = JSON.parse(movieBody);
		id = movie._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb.id.substring(2); //tt

		requestPromisified('http://api.traileraddict.com/?imdb=' + id + '&count=4&credit=no').then(function(trailerBody) {

			// XML 

			trailer = parser.toJson(trailerBody, {
				object: true,
				reversible: false,
				coerce: true,
				sanitize: false,
				trim: true,
				arrayNotation: false
			});

			var trailersFiltered = [];

			if (trailer.trailers.trailer) {

				for (var i = 0; i < trailer.trailers.trailer.length; i++) {
					trailersFiltered.push(trailer.trailers.trailer[i])
				}
			}
			

			res.status(200).json({
				details: movie._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content,
				trailers: trailersFiltered
			});

			
		}).catch(function(trailerError) {
			console.log(trailerError);
		})


	}).catch(function(movieError) {
		console.log(movieError);
	});
}


module.exports = Controller.prototype;