"use strict"

const arr = [
    {quote: '“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”',author: 'Albert Einstein'},
    {quote: '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”', author: 'Albert Einstein'},
    {quote: '“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”', author: 'Jane Austen'},
    {quote: '“Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring.”', author: 'Marilyn Monroe'},
    {quote: '“Try not to become a man of success. Rather become a man of value.”', author: 'Albert Einstein'},
    {quote: '“A day without sunshine is like, you know, night.”', author: 'Steve Martin'},
    {quote: '“It is better to be hated for what you are than to be loved for what you are not.”', author: 'André Gide'},
    {quote: '“I have not failed. Ive just found 10,000 ways that wont work.”', author: 'Thomas A. Edison'},
]
const left_btn = document.querySelector('.left-btn');
const right_btn = document.querySelector('.right-btn');
const container = document.querySelector('.container');
let currentIndex = 0;


container.addEventListener('animationend', () => {
    container.classList.remove('anim-to_left', 'anim-to_right');
});

function updateQuote() {
    container.innerHTML = `
        <h1 class="quote">${arr[currentIndex].quote}</h1>
        <div class = 'author-name'>
            <h2 class="author"> ${arr[currentIndex].author}</h2>
        </div>
    `;
}

left_btn.addEventListener('click' , function(){
    currentIndex = (currentIndex - 1 + arr.length) % arr.length;
    setTimeout(() => {
        container.classList.add('anim-to_left');
        console.log("Класс добавлен:", container.classList);
        updateQuote();
    }, 10);
})

right_btn.addEventListener('click' , function(){
    currentIndex = (currentIndex + 1) % arr.length;
    setTimeout(() => {
        container.classList.add('anim-to_right');
        console.log("Класс добавлен:", container.classList);
        updateQuote();
    }, 10);
})

