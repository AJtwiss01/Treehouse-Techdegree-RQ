
var quotes = [
  {
    "#": 1,
    "QUOTE": "Frankly, my dear, I don't give a damn.",
    "MOVIE": "GONE WITH THE WIND",
    "YEAR": 1939,
    "ACTOR": "Clark Gable's",
    "CHARACTER": "Rhett Butler"
  },
  {
    "#": 2,
    "QUOTE": "I'm gonna make him an offer he can't refuse.",
    "MOVIE": "THE GODFATHER",
    "YEAR": 1972,
    "ACTOR": "Marlon Brando",
    "CHARACTER": "Don Corleone"
  },
  {
    "#": 3,
    "QUOTE": "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    "MOVIE": "ON THE WATERFRONT",
    "YEAR": 1954,
    "ACTOR": "Marlon Brando",
    "CHARACTER": "Don Corleone"
  },
  {
    "#": 4,
    "QUOTE": "Toto, I've a feeling we're not in Kansas anymore.",
    "MOVIE": "THE WIZARD OF OZ",
    "YEAR": 1939,
    "ACTOR": "Marlon Brando",
    "CHARACTER": "Don Corleone"
  },
  {
    "#": 5,
    "QUOTE": "Here's looking at you, kid.",
    "MOVIE": "CASABLANCA",
    "YEAR": 1942,
    "ACTOR": "Marlon Brando",
    "CHARACTER": "Don Corleone"
  },
  {
    "#": 6,
    "QUOTE": "Go ahead, make my day.",
    "MOVIE": "SUDDEN IMPACT",
    "YEAR": 1983,
    "ACTOR": "Marlon Brando",
    "CHARACTER": "Don Corleone"
  },
  {
    "#": 7,
    "QUOTE": "All right, Mr. DeMille, I'm ready for my close-up.",
    "MOVIE": "SUNSET BLVD.",
    "YEAR": 1950,
    "ACTOR": "Marlon Brando",
    "CHARACTER": "Don Corleone"
  },
  {
    "#": 8,
    "QUOTE": "May the Force be with you.",
    "MOVIE": "STAR WARS",
    "YEAR": 1977,
    "ACTOR": "Marlon Brando",
    "CHARACTER": "Don Corleone"
  },
  {
    "#": 9,
    "QUOTE": "Fasten your seatbelts. It's going to be a bumpy night.",
    "MOVIE": "ALL ABOUT EVE",
    "YEAR": 1950,
   "ACTOR": "Marlon Brando",
    "CHARACTER": "Don Corleone"
  },
  {
    "#": 10,
    "QUOTE": "You talking to me?",
    "MOVIE": "TAXI DRIVER",
    "YEAR": 1976,
    "ACTOR": "Marlon Brando",
    "CHARACTER": "Don Corleone"
  }
];

function getRandomQuote(random){
var random = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(random);
    console.log(random.QUOTE);
    console.log(random.MOVIE);
    console.log(random.YEAR);
 

    return random;


};
function printQuote(addQoute){
	console.log(getRandomQuote());
	var logic=getRandomQuote();
	var quoteOutput = "<p class='quote'>"+ logic.QUOTE+ "</p> <p class='source'>"+ logic.ACTOR+"<span class='citation'>"+ logic.MOVIE+"</span> <span class='year'>"+ logic.YEAR +"</span> </p>";
	console.log(quoteOutput);
	var addQoute = document.getElementById('quote-box').innerHTML = quoteOutput;
	return addQoute;
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

