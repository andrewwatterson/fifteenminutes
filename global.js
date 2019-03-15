window.addEventListener('load', async () => {

  let constraints = { audio: true, video: true };

  let videoPreview = document.querySelector('.webcam-preview');

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      console.log('got it!');
      console.log(videoPreview);
      videoPreview.srcObject = stream;
    })
    .catch((err) => {
      console.log('Could not activate the video camera.');
    });

});
