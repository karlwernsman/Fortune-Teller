const askButton = document.getElementById('ask-button');
const playAgainButton = document.getElementById('play-again');
const inputsParent = document.getElementById('inputs-parent');
const fortuneParent = document.getElementById('fortune-parent');
const fortuneDisplay = document.getElementById('fortune-response');
const fortune = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

askButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * fortune.length);
    fortuneDisplay.textContent = fortune[randomNumber];
    inputsParent.classList.toggle('hide');
    fortuneParent.classList.toggle('hide');
});

playAgainButton.addEventListener('click', () => {
    inputsParent.classList.toggle('hide');
    fortuneParent.classList.toggle('hide');
});
