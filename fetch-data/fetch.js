// declare variables

const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

const updateDisplay = async (someVerse) => {
  someVerse = someVerse.replace(" ", "").toLowerCase();
  console.log(someVerse);
  const url = `${someVerse}.txt`;

  const result = await fetch(url);
  updateVerse = await result.text();

  poemDisplay.textContent = updateVerse;
};

// add listenter when selectchange
(async () => {
  await updateDisplay("Verse 1");
})();

verseChoose.addEventListener("change", async () => {
  const verse = verseChoose.value;
  await updateDisplay(verse);
});
