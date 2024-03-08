const api = "https://api.quotable.io/quotes/random?maxLength=50";
const quotebox = document.querySelector("blockquote");
const auth = document.getElementById("auth");

const getQuote = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    quotebox.innerHTML = data[0].content;
    auth.innerHTML = data[0].author;
}
getQuote(api);
