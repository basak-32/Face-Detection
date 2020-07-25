const app = new Clarifai.App({apiKey: 'dc4bedd4f0c14840baf78093cb4f587c'});


const callApi = (url) => {
  app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", url).then(
    function(response) {
      // do something with response
      // console.log(response);
      output(response);

      // defineGender(response);

      // findFaces(response);
    },
    function(err) {
      // there was an error
      console.log(err);
    }
  );
}

// const apiCallByBase64 = (base64Code) => {
//   app.inputs.create({
//     base64: base64Code
//   }).then(
//     function(response) {
//       // do something with response
//       console.log(response);
  
//       const url = response['0'].imageUrl;
//       console.log(url);
  
//       app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", url).then(
//         function(response) {
//           // do something with response
//           console.log(response);
//           // output(response);
      
//           // defineGender(response);
      
//           // findFaces(response);
//         },
//         function(err) {
//           // there was an error
//           console.log(err);
//         }
//       );  
//     },
//     function(err) {
//       // there was an error
//       console.log(err);
//     }
//   );
// } 

console.log('hello2');