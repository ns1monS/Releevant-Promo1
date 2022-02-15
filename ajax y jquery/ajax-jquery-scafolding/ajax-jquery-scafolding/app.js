// Your Jquery code Over Here !

$(".container form input").eq(1).on("click", function(e){
  const value = $(".container form input").eq(0).val();
  console.log("que evento llevo", e );
  e.preventDefault();
  
$.get("http://api.giphy.com/v1/gifs/search", {  

      api_key:"dc6zaTOxFJmzC",
      q: value,

  }).then(function(r) {
    console.log(r.data);
    const random = Math.floor(Math.random() * 50);
    $("#gif-area").append(`<img src='${r.data[random].images.original.url}'>`);  
  });
});

$("#remove").on("click" , function(){
 $("#gif-area").empty();
});







/*
// Ajax example
$.ajax({
  // what HTTP verb?
  method: "GET",
  // where are we making a request to?
  url: "https://omdbapi.com",
  // what should we add to the query string?
  data: {
    // a key of t and a value of titanic which will look like ?t=titanic
    t: "titanic",
  },
  // this will add an HTTP request header of  'Accept': 'application/json'
  dataType: "json",
  // you can think of this ".then" like this: after we get the response, then what do we do?
})
  .then(function (response) {
    // let's see what the response is from the OMDB API!
    console.log(response);
  })
  .catch(function (error) {
    // something went wrong :(
    console.log(error);
  });
*/