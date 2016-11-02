var apikey = "myapikey";
var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
 
// construct the uri with our apikey
var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
var query = "Gone with the Wind";

$(document).ready(function() {
 
  // send off the query

  $.ajax({
    url: moviesSearchUrl + '&q=' + encodeURI(query),
    dataType: "jsonp",
    success: searchCallback
  });
});

// callback for when we get back the results
function searchCallback(data) {

 $(document.body).append('Found ' + data.total + ' results for ' + query);

 var movies = data.movies;

 $.each(movies, function(index, movie) {

   $(document.body).append('<h1>' + movie.title + '</h1>');

   $(document.body).append('<img src="' + movie.posters.thumbnail + '" />');

 });
}
