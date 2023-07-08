const quotes = document.querySelector('.card-text');
const newQuotes = document.querySelector('.new');

//updating Ui
const updateUi = data => {
    const quoteInfo = data.quoteInfo;//getting the base information about the quote

    console.log(data);
    quotes.innerHTML = `
    <p class="card-text">${quoteInfo.content}</p>
    <footer class="blockquote-footer">${quoteInfo.author}</footer>
    `
};

//updating quote
const updateQuote = async data => {
    const quoteInfo = await getQuotes();

    return {quoteInfo: quoteInfo};
    
}

//click event to get new quote
newQuotes.addEventListener('click', e => {
    e.preventDefault();

    updateQuote().then(data => {
        updateUi(data);
    }).catch(err => {
        console.log(err);
    });
})


