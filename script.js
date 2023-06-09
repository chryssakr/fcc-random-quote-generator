// DATA

const quotesArr = [
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "ANorman Vaughan"
  },
  {
    quote: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    author: "Maimonides"
  },
  {
    quote: "You may be disappointed if you fail, but you are doomed if you don’t try.",
    author: "Beverly Sills"
  },
  {
    quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
    author: "Ayn Rand"
  },
  {
    quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    author: "Rosa Parks"
  },
  {
    quote: "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford"
  },
  {
    quote: "You can’t use up creativity. The more you use, the more you have.",
    author: "Maya Angelou"
  },
  {
    quote: "A truly rich man is one whose children run into his arms when his hands are empty.",
    author: "Unknown"
  },
  {
    quote: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan"
  }
];

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

// INITIALIZE VARS

let newQuoteText = '', newQuoteAuthor = '', newQuoteColor = '';

// FUNCTIONS FOR RANDOM QUOTE DATA

function getRandomQuote() {
  return quotesArr[parseInt(Math.random() * quotesArr.length)];
}

function getRandomColor() {
  return colors[parseInt(Math.random() * colors.length)];
}

// FUNCTION CHANGING HTML

function updateQuote() {
  let randomQuote = getRandomQuote();
  newQuoteText = randomQuote.quote;
  newQuoteAuthor = randomQuote.author;
  newQuoteColor = getRandomColor();
  
  document.getElementById('text').innerHTML = newQuoteText;
  document.getElementById('author').innerHTML = newQuoteAuthor;
  document.documentElement.style.setProperty('--dynamic-color', newQuoteColor);
}