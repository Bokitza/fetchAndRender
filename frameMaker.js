const contentOfPage = document.querySelector("#contentOfPage");
function frameMaker(product, productImage) {
  const frame = document.createElement("div");
  frame.classList.add("frame");
  contentOfPage.append(frame);
  const title = document.createElement("h3");
  title.classList.add("title");
  title.innerText = product;
  frame.append(title);
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("imageWrapper");
  frame.append(imageWrapper);
  const image = document.createElement("img");
  image.setAttribute("width", "150");
  image.setAttribute("src", productImage);
  imageWrapper.append(image);
}
