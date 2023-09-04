const textAreaEl = document.querySelector(".textarea");
const statNumberCharactersEl = document.querySelector(
  ".stat__number--characters"
);
const statNumberTwitterEl = document.querySelector(".stat__number--twitter");
const statNumberFacebookEl = document.querySelector(".stat__number--facebook");
const statNumberWordsEl = document.querySelector(".stat__number--words");

const checkLimit = (limit, el) => {
  if (limit < 0) {
    el.classList.add("stat__number--limit");
  } else {
    el.classList.remove("stat__number--limit");
  }
}

const inputHandler = (e) => {
  // determine new numbers
  const numberOfCharacters = e.target.value.length;
  const twitterCharsLeft = 280 - numberOfCharacters;
  const facebookCharsLeft = 2200 - numberOfCharacters;
  const numberOfWords =
    numberOfCharacters > 0 ? e.target.value.split(" ").length : 0;

  // add visual indicators if over the limit

  checkLimit(twitterCharsLeft, statNumberTwitterEl);
  checkLimit(facebookCharsLeft, statNumberFacebookEl);

  // set new numbers
  statNumberCharactersEl.textContent = numberOfCharacters;
  statNumberTwitterEl.textContent = twitterCharsLeft;
  statNumberFacebookEl.textContent = facebookCharsLeft;
  statNumberWordsEl.textContent = numberOfWords;
}

textAreaEl.addEventListener("input", inputHandler);

// Technologies being used: HTML, CSS, JavaScript