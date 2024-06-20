const cards = [
    {
        image: './assets/images/car1.webp',
        title: '2016 Mustang GT United States',
        description: 'Published on May 17, 2017'
    },
    {
        image: './assets/images/car2.jpg',
        title: '2016 Mustang GT, San Francisco, United States',
        description: 'Published on May 17, 2017'
    },
    {
        image: './assets/images/car3.jpg',
        title: 'San Francisco, United States',
        description: 'Published on June 17, 2024'
    },
    {
        image: './assets/images/car4.jpg',
        title: '2016 Mustang GT',
        description: 'Published on May 25, 2018'
    }
];

let currentIndex = 0;
let interval;

const cardImage = document.getElementById('card-image');
const cardTitle = document.getElementById('card-title');
const cardDescription = document.getElementById('card-description');

const showCard = (index) => {
    if (index >= cards.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = cards.length - 1;
    } else {
        currentIndex = index;
    }
    cardImage.src = cards[currentIndex].image;
    cardTitle.textContent = cards[currentIndex].title;
    cardDescription.textContent = cards[currentIndex].description;
};

const nextCard = () => {
    showCard(currentIndex + 1);
};

const prevCard = () => {
    showCard(currentIndex - 1);
};

const startInterval = () => {
    interval = setInterval(nextCard, 1000); // Change the interval time as needed
};

startInterval();

cardImage.addEventListener("mouseenter", () => {
    clearInterval(interval);
});
cardImage.addEventListener("mouseout", () => {
    startInterval();
});

document.getElementById('next-button').addEventListener('click', nextCard);
document.getElementById('prev-button').addEventListener('click', prevCard);

showCard(currentIndex);
