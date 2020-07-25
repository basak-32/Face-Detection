const outputPara = document.querySelector('.output-para');
// const list = document.querySelector('.list');
const boundingBox = document.querySelector('.bounding-box');

const output = (response) => {
  // console.log(response);
  if (response.outputs[0].data.regions === undefined) {
    outputPara.innerHTML = `<p>Sorry! It can't detect any face</p>`;
    // list.innerHTML = "";
  }
  const noOfPersons = response.outputs[0].data.regions.length;
  // console.log(noOfPersons);
  outputPara.innerHTML = `<p>There are ${noOfPersons} person(s) in the image</p>`;

  defineGender(response);

  // findFaces(response);
}

const defineGender = (response) => {
  // list.innerHTML = "";
  let genderArr = [];
  // here person is an array of persons
  const persons = response.outputs[0].data.regions;
  for (let i = 0; i < persons.length; i++) {
    const gender = persons[i].data.concepts[20].name;
    genderArr.push(gender);
    // list.innerHTML += `<li>${i+1}. Person${i+1}: ${gender}</li>`
  }

  findFaces(response, genderArr);
}

const findFaces = (response, genderArr) => {
  // console.log('findfaces');
  const persons = response.outputs[0].data.regions;

  let width = outputImg.width;
  let height = outputImg.height;

  // console.log(imageContainer.innerHTML);

  // imageContainer.innerHTML = "";

  // imageContainer.innerHTML = prevImgContainer;

  for (let i = 0; i < persons.length; i++) {
    if (genderArr[i] === 'masculine') {
      gen = 'M';
    } else {
      gen = 'F';
    }
    const leftCol =persons[i].region_info.bounding_box.left_col * width;
    const rightCol = width - (persons[i].region_info.bounding_box.right_col  * width);
    const topRow = persons[i].region_info.bounding_box.top_row  * height;
    const bottomRow = height - (persons[i].region_info.bounding_box.bottom_row * height);
    // console.log(width, height, leftCol, rightCol, topRow, bottomRow);


    imageContainer.innerHTML += `
      <div 
        class="bounding-box" 
        style="
          top: ${topRow}px;
          right: ${rightCol}px;
          bottom: ${bottomRow}px;
          left: ${leftCol}px">
            ${gen}
      </div>
    `
  }

  // console.log('findfaces');
}