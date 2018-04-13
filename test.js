var Image = new ImageRecognition("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/220px-President_Barack_Obama.jpg");


window.addEventListener("recognized", function (e) {
    console.log(e.detail.result); // barack obama
});