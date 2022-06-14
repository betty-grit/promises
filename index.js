const div = document.getElementById("canvas");
const imgage = document.createElement("img");
imgage.src = "/murphy.gif";
div.appendChild(imgage);

let sillySignin = new Promise(function (resolve, reject) {
  resolve();
  reject();
});

// let sillySignin = () => {
//   for (let index = 0; index < 10000000000; index++) {}
//   console.log("SIGNED IN");
// };

sillySignin.then(() => {
  setTimeout(() => {
    imgage.style.display = "none";
    console.log("signin");
  }, 3000);
});

sillySignin.then(() => {
  setTimeout(() => {
    imgage.style.display = "block";
    console.log("signout");
  }, 5000);
});
