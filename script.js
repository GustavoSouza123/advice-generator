const adviceIdSpan = document.querySelector('.advice .id span');
const adviceText = document.querySelector('.advice .text');
const button = document.querySelector('.advice .button');

const generateAdvice = (url, options = {}) => {
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            adviceIdSpan.textContent = data.slip.id;
            adviceText.textContent = data.slip.advice;
            console.log(data)
        })
        .catch(error => console.error(error))
}

const apiUrl = 'https://api.adviceslip.com/advice';

generateAdvice(apiUrl);
button.addEventListener('click', () => { generateAdvice(apiUrl) })