window.addEventListener('load', async () => {

  let constraints = { audio: true, video: true };
  let videoPreview = document.querySelector('.webcam-preview');

  navigator.mediaDevices.getUserMedia(constraints)
    .then(async (stream) => {

      videoPreview.srcObject = stream;

      let recorder = RecordRTC(stream, {
        type: 'video'
      });

      recorder.startRecording();

      const sleep = m => new Promise(r => setTimeout(r, m));
      await sleep(3000);

      recorder.stopRecording(function() {
          let blob = recorder.getBlob();
          invokeSaveAsDialog(blob);
      });

    })
    .catch((err) => {
      console.log('Could not activate the video camera.');
    });

});
