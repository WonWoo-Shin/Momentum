const bgImage = document.createElement("img");
const images = ["0.jpg", "1.jpg", "2.jpg"];

function getTime() {
  const hour = new Date().getHours();
  if (hour > 20 || hour < 5) {
    return "NIGHT";
  } else if (hour > 16) {
    return "EVENIG";
  } else if (hour > 4) {
    return "DAY";
  }
}

chosenImage = images[Math.floor(Math.random() * images.length)];
bgImage.src = `IMG/${getTime()}/${chosenImage}`;
document.body.appendChild(bgImage);
