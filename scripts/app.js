const inputField = document.querySelector('.input-field');
const btn = document.querySelector('.btn');
const imageContainer = document.querySelector('.output');
const outputImg = document.querySelector('.output-image');


function importFileandPreview() {
  let preview = document.querySelector('img');
  let file    = document.querySelector('input[type=file]').files[0];
  let reader  = new FileReader();

  reader.addEventListener("load", function () {
    const base64Code = reader.result;
    outputImg.src = base64Code;
    // console.log(reader.result);

    apiCallByBase64(base64Code);

    // document.getElementById("srcAttribute").innerHTML = "<b>src attribute:</b> " + preview.src.substring(0,40) + '... +' + preview.src.length + ' more characters';     
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}


const apiCallByBase64 = (base64Code) => {
  imageContainer.innerHTML = `<img class="output-image" width="500px" height="450px"  src="${base64Code}" alt="img">`;

  app.inputs.create({
    base64: base64Code.substr(23)
  }).then(
    function(response) {
      // do something with response
      // console.log(response);
      
      const url = response['0'].imageUrl;
      console.log(url);
    
      callApi(url);  
    },
    function(err) {
      // there was an error
      console.log(err);
    }
  ); 
}


// outputImg.crossOrigin = 'Anonymous';
// outputImg.onload = function() {
//   console.log('line1');
//   let canvas = document.createElement('canvas');
//   let ctx = canvas.getContext('2d');
//   canvas.height = this.naturalHeight;
//   canvas.width = this.naturalWidth;
//   ctx.drawImage(this, 0, 0);
//   const base64Code = canvas.toDataURL('image/jpeg');
//   // console.log(base64Code);
//   console.log('line2');
//   // apiCallByBase64(base64Code.substr(23));

//   app.inputs.create({
//     base64: base64Code.substr(23)
//   }).then(
//     function(response) {
//       // do something with response
//       console.log(response);
  
//       const url = response['0'].imageUrl;
//       console.log(url);

//       callApi(url);  
//     },
//     function(err) {
//       // there was an error
//       console.log(err);
//     }
//   );
// }




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