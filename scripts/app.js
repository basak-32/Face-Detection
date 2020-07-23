const inputField = document.querySelector('.input-field');
const btn = document.querySelector('.btn');
const imageContainer = document.querySelector('.output');
const outputImg = document.querySelector('.output-image');

console.log(outputImg.width);

inputField.addEventListener('keypress', event => {
  // console.log(event.keyCode);
  if (event.keyCode === 13) {
    const url = event.target.value.trim();
    event.target.value = "";
    imageContainer.innerHTML = `<img class="output-image" width="500px" height="450px"  src="${url}" alt="img">`;
    // console.log(outputImg.src);
    // outputImg.setAttribute('src', url);
    // const prevImgContainer = imageContainer.innerHTML;
    // console.log(outputImg.src);
    callApi(url);
    // console.log(event.target.value);
  }
})

btn.addEventListener('click', event => {
  // console.log(inputField.value);
  const url = inputField.value.trim();
  inputField.value = "";
  imageContainer.innerHTML = `<img class="output-image" width="500px" height="450px"  src="${url}" alt="img">`;
  // outputImg.setAttribute('src', url);
  // const prevImgContainer = imageContainer.innerHTML;
  callApi(url);
})