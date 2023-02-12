import Webcam from 'react-webcam';

import React from 'react';
const videoConstraints = {
  width: 200,
  height: 200,
  facingMode: 'user',
};

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.setImage(imageSrc);
    props.setPreviewSource(imageSrc);
    props.setCameraPopup(false);
  }, [webcamRef]);
  return (
    <>
      <Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={200}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default WebcamCapture;
