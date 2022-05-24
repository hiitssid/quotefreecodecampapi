let ranNum = Math.floor(Math.random() * 1643);
const quote = document.getElementById("quote");
const author = document.getElementById("author");
fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    quote.innerText = data[ranNum].text;
    if (data[ranNum].author == null) {
      author.innerText = `~ 🙏 ~`;
    } else {
      author.innerText = `~ ${data[ranNum].author} ~`;
    }
  });
