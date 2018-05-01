document.addEventListener('securitypolicyviolation', function(e) {
  console.dir(e)
})

// violate policy...
// if(window.fetch) {
//   var myImage = document.querySelector('img');
//
//   var myRequest = new Request('https://en.wikipedia.org/wiki/File:The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg');
//
//   fetch(myRequest).then(function(response) {
//     return response.blob();
//   }).then(function(response) {
//     var objectURL = URL.createObjectURL(response);
//     myImage.src = objectURL;
//   });
//
// }
