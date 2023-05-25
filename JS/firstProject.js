// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: 'Be yourself; everyone else is already taken',
    person: ' Oscar Wilde'
}, {
    quote: `'I'm selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle.`,
    person: 'Marilyn Monroe'
}, {
    quote: `So many books, so little time`,
    person: 'Frank Zappa'
}, {
    quote: `You only live once, but if you do it right, once is enough.`,
    person: 'Mae west'
}, {
    quote: `It is better to be hated for what you are than to be loved for what you are not.`,
    person: 'Andre Gide'
}, {
    quote: `A friend is someone who knows all about you and still loves you.`,
    person: 'Elbert Hubbard'
}]

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})