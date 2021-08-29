const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}
const  displayData = (data) => {
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = data.quote;
    
}
