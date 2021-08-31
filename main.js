const quotes = [
    {
        quote:
            "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "-Nelson Mandela"
    },
    {
        quote:
            "The way to get started is to quit talking and begin doing.",
        author: "-Walt Disney"
    },
    {
        quote:
            "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "-Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "-Eleanor Roosevelt"
    },
    {
        quote:
            "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "-Franklin D. Roosevelt"
    },
    {
        quote:
            "It is during our darkest moments that we must focus to see the light.",
        author: "-Aristotle"
    },
    {
        quote:
            "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "-Ralph Waldo Emerson"
    },
    {
        quote:
            "The purpose of our lives is to be happy.",
        author: "-Dalai Lama"
    },
    {
        quote:
            "Love the life you live. Live the life you love.",
        author: "-Bob Marley"
    },
    {
        quote:
            "Life is made of ever so many partings welded together.",
        author: "-Charles Dickens"
    },
    {
        quote:
            "I never dreamed about success, I worked for it.",
        author: "-Estee Lauder"
    },
    {
        quote:
            "You miss 100% of the shots you don't take.",
        author: "-Wayne Gretzky"
    }
];


const btn = document.querySelector('.generate');


btn.addEventListener('click', () => {

    
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);


    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

});