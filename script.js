window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);

  if (!audio) return; // stop the function from running altogether
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
});

window.addEventListener("click", (e) => {
  const clickedElement = e.target.closest(".key"); // Find the closest parent element with the class 'key'

  if (!clickedElement) return; // If the clicked element is not a key, exit the function

  const audioKey = clickedElement.dataset.key; // Access the data-key attribute of the clicked key
  const audio = document.querySelector(`audio[data-key="${audioKey}"]`);
  const key = document.querySelector(`.key[data-key="${audioKey}"]`);
  console.log(audioKey);

  if (!audio) return; // stop the function from running altogether
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return; // skip it if it's not a transform
    key.classList.remove("playing");
  })
);
