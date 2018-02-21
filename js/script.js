// jshint esversion: 6

const colors = [
    '#DDA0DD',
    '#663399',
    '#6A5ACD',
    '#800080',
    '#DB7093',
    '#DA70D6',
    '#C71585',
    '#FF00FF',
    '#FF69B4',
    '#FF00FF',
    '#9400D3',
    '#9932CC',
    '#8B008B'
];

const quotes = [
    {
        name: 'Bender Bending Rodriguez',
        quote: 'Have you ever tried simply turning off your TV, sitting down with your child, and hitting them?',
        citation: 'Bender Should Not Be Allowed on TV',
        year: '3003',
    },
    {
        name: 'Philip J Fry',
        quote: 'You know the worst thing about being a slave? They make you work, but don\'t pay you or let you go!',
        citation: 'A Pharaoh To Remember',
        year: '3003',
    },
    {
        name: 'Leela',
        quote: 'Just make a simple cake. And this time, if someone\'s going to jump out of it, make sure to put them in after you cook it.',
        citation: 'I Second That Emotion',
        year: '3002',
    },
    {
        name: 'Zapp Brannigan',
        quote: 'If we can hit that bull\'s-eye, the rest of the dominoes will fall like a house of cards...Checkmate.',
        citation: 'When Aliens Attack',
        year: '3002'
    },
    {
        name: 'Professor Farnsworth',
        quote: 'No fair! You changed the outcome by measuring it!',
        citation: 'The Luck of the Fryrish',
        year: '3002'
    },
    {
        name: 'Hermes',
        quote: 'Mon, I\'m more hungry than a green snake in a sugar cane field!',
        citation: 'Hell Is Other Robots',
        year: '3004',
    },
    {
        name: 'Zapp Brannigan',
        quote: 'I\'m anticipating an all - out tactical dogfight, followed by a light dinner.',
        citation: 'Love\'s Labors Lost In Space',
        year: '3003',
    },
    {
        name: 'Dr. Zoidberg',
        quote: 'Finally, I look as pretty as I feel!',
        citation: 'Xmas Story',
        year: '3002',
    },
    {
        name: 'Amy Wong',
        quote: 'If I ever feel lonely, I\'ll just look over at this disfiguring scar and think of you.',
        citation: 'Put Your Head On My Shoulder',
        year: '3002'
    },
    {
        name: 'Kif Kroker',
        quote: 'It\'s not uncharted, you lost the chart!',
        citation: 'Amazon Women in the Mood',
        year: '3002'
    },
    {
        name: 'Bender Bending Rodriguez',
        quote: 'Now, my usual fee is 500 bucks. But seeing as how it\'s you, I\'m gonna need it in advance.',
        citation: 'Put Your Head On My Shoulder',
        year: '3002'
    },
    {
        name: 'Philip J Fry',
        quote: 'They\'re like sex, except I\'m having them!',
        citation: 'The Problem With Popplers',
        year: '3002'
    },
    {
        name: 'Professor Farnsworth',
        quote: 'Everyone, I have a very dramatic announcement. So anyone with a weak heart should leave now. Goodbye.',
        citation: 'A Clone Of My Own',
        year: '3002'
    },
    {
        name: 'Dr. Zoidberg',
        quote: 'Hooray! A happy ending for the rich people.',
        citation: 'The Mutants Are Revolting',
        year: '3002'
    },
    {
        name: 'Bender Bending Rodriguez',
        quote: 'I\'m so embarrassed, I wish everybody else was dead!',
        citation: 'Bend Her',
        year: '3004'
    },
    {
        name: 'Bender Bending Rodriguez',
        quote: 'Oh wait, you\'re serious. Let me laugh even harder.',
        citation: 'Love And Rocket',
        year: '3003'
    }
];

$(document).ready(function () {

    function createQuote() {
        let color = Math.floor(Math.random() * colors.length);
        let quote = Math.floor(Math.random() * quotes.length);
        $('body').css('background-color', colors[color]);
        $('#loadQuote').css('background-color', colors[color]);
        $('.quote').text(quotes[quote].quote);
        $('.source').html(quotes[quote].name + '<span class="citation"></span><span class="year"></span>');
        $('.citation').text(quotes[quote].citation);
        $('.year').text(quotes[quote].year);
    }

    $('#loadQuote').on('click', createQuote);
});