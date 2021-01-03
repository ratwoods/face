import React from 'react';
import './FaceRecognition';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<dev className='center ma' >
			<div classnName='absolute mt2'>
			  <img id='inputimage' alt= ''  src={imageUrl} width='500px' heigh='auto' />
			  <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }} ></div>
			</div>
		</dev>
	);
}

export default FaceRecognition;