//getting the quotes from the api
const getQuotes = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    return data;
};

