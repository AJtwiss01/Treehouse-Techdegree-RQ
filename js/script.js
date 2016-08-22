
var quotes = [
    {
        quote: "To create a memorable design you need to start with a thought that’s worth remembering.",
        source: "Thomas Manss",
        citation: "quotesondesign.com",
        gender: "male"
    },
    {
        quote: "Luck is the residue of design.",
        source: "Branch Rickey",
        citation: "quotesondesign.com",
        gender: "male"
    },
    {
        quote: "Write it down. You will lose thoughts, you thought, that you thought.",
        source: "Vanessa Workoff",
        citation: "quotesondesign.com",
        gender: "female"
    },
    {
        quote: "Truly elegant design incorporates top-notch functionality into a simple, uncluttered form.",
        source: "David Lewis",
        citation: "quotesondesign.com",
        gender: "male"
    },
    {
        quote: "If it sounds good, you’ll hear it. If it looks good, you’ll see it. If it’s marketed right, you’ll buy it. But if it’s real, you’ll feel it.",
        source: "Kid Rock",
        citation: "rock.rapgenius.com",
        gender: "male"
    },
    {
        quote: "If you can’t explain it simply, you don’t understand it well enough.",
        source: "Albert Einstein",
        citation: "thinkexist.com",
        gender: "male"
    },
    {
        quote: "To see takes time.",
        source: "Georgia O'Keeffe",
        citation: "quotesondesign.com",
        gender: "female"
    }
];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

