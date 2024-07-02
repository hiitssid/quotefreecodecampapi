let ranNum = Math.floor(Math.random() * 16);
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const URL = "https://type.fit/api/quotes";

const getQuote = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
  quote.innerText = data[ranNum].text;
  author.innerText = data[ranNum].author
};
getQuote();
