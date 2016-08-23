var $quotes = [{
    "Rank": 1,
    "Quotation": "Frankly, my dear, I don't give a damn.",
    "Character": "Rhett Butler",
    "Actor": "Clark Gable",
    "Film": "Gone with the Wind",
    "Year": 1939
}, {
    "Rank": 2,
    "Quotation": "I'm gonna make him an offer he can't refuse.",
    "Character": "Vito Corleone",
    "Actor": "Marlon Brando",
    "Film": "The Godfather",
    "Year": 1972
}, {
    "Rank": 3,
    "Quotation": "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    "Character": "Terry Malloy",
    "Actor": "Marlon Brando",
    "Film": "On the Waterfront",
    "Year": 1954
}, {
    "Rank": 4,
    "Quotation": "Toto, I've got a feeling we're not in Kansas anymore.",
    "Character": "Dorothy Gale",
    "Actor": "Judy Garland",
    "Film": "The Wizard of Oz",
    "Year": 1939
}, {
    "Rank": 5,
    "Quotation": "Here's looking at you, kid.",
    "Character": "Rick Blaine",
    "Actor": "Humphrey Bogart",
    "Film": "Casablanca",
    "Year": 1942
}, {
    "Rank": 6,
    "Quotation": "Go ahead, make my day.",
    "Character": "Harry Callahan",
    "Actor": "Clint Eastwood",
    "Film": "Sudden Impact",
    "Year": 1983
}, {
    "Rank": 7,
    "Quotation": "All right, Mr. DeMille, I'm ready for my close-up.",
    "Character": "Norma Desmond",
    "Actor": "Gloria Swanson",
    "Film": "Sunset Boulevard",
    "Year": 1950
}, {
    "Rank": 8,
    "Quotation": "May the Force be with you.",
    "Character": "Han Solo",
    "Actor": "Harrison Ford",
    "Film": "Star Wars",
    "Year": 1977
}, {
    "Rank": 9,
    "Quotation": "Fasten your seatbelts. It's going to be a bumpy night.",
    "Character": "Margo Channing",
    "Actor": "Bette Davis",
    "Film": "All About Eve",
    "Year": 1950
}, {
    "Rank": 10,
    "Quotation": "You talkin' to me?",
    "Character": "Travis Bickle",
    "Actor": "Robert De Niro",
    "Film": "Taxi Driver",
    "Year": 1976
}]

function $getRandomQuote($random) {
    var $random = $quotes[Math.floor(Math.random() * $quotes.length)];
    console.log($random);
    console.log($random.QUOTE);
    console.log($random.MOVIE);
    console.log($random.YEAR);
    return $random;


};

function $bkgRandom($randomBkg) {

    var $randomBkg = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    if ($randomBkg  !== 'rgb(255,255,255)') {
        document.body.style.backgroundColor = $randomBkg ;
    }
};
function $BtnBackground($randomBtnBkg){
    var $randomBtnBkg = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
     document.getElementById('loadQuote').style.backgroundColor = $randomBtnBkg;

}

// ev
function printQuote(quoteOutput) {
    console.log($getRandomQuote());
    var logic = $getRandomQuote();
    var quoteOutput = "<p class='quote'>" + logic.Quotation + "</p> <p class='source'>" + logic.Actor + "<span class='citation'>" + logic.Film + "</span> <span class='year'>" + logic.Year + "</span> </p>";
    console.log(quoteOutput);
    var addQoute = document.getElementById('quote-box').innerHTML = quoteOutput;
    return addQoute;
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval(function () {
    printQuote();
    $bkgRandom();
    $BtnBackground();
}, 10000);