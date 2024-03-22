var box = document.querySelectorAll(".box");
var image = document.querySelector(".imag");
var cursor = document.querySelector(".cursor");

box[0].addEventListener("mousemove", (dets) => {
  image.src = "a.jpg";
  image.style.display = "block";
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
box[0].addEventListener("mouseleave", () => {
  image.style.display = "none";
});

box[1].addEventListener("mousemove", (dets) => {
  image.src = "imran2.jpg";
  image.style.display = "block";
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
box[1].addEventListener("mouseleave", () => {
  image.style.display = "none";
});

box[2].addEventListener("mousemove", (dets) => {
  image.src = "imran3.jpg";
  image.style.display = "block";
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
box[2].addEventListener("mouseleave", () => {
  image.style.display = "none";
});

box[3].addEventListener("mousemove", (dets) => {
  image.src = "imran4.jpg";
  image.style.display = "block";
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
box[3].addEventListener("mouseleave", () => {
  image.style.display = "none";
});
