const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;
let counter = 0;

hole.addEventListener("animationiteration", () => {
  const top = -(Math.random() * 300 + 150);
  hole.style.top = top + "px";
  counter++;
});

setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  if (jumping === 0) {
    character.style.top = characterTop + 3 + "px";
  }
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  const holeTop = parseInt(
    window.getComputedStyle(hole).getPropertyValue("top")
  );
  const cTop = -(500 - characterTop);
  if (
    characterTop > 470 ||
    (blockLeft < 20 &&
      blockLeft > -50 &&
      (cTop < holeTop || cTop > holeTop + 120))
  ) {
    alert("Game Over! Score: " + counter);
    counter = 0;
    character.style.top = 100 + "px";
    window.location.reload(true);
  }
}, 10);

const jump = () => {
  jumping = 1;
  let jumpCount = 0;
  const jumpInterval = setInterval(() => {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = characterTop - 5 + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumpCount = 0;
      jumping = 0;
    }
    jumpCount++;
  }, 10);
};
