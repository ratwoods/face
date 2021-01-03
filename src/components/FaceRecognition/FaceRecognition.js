import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<dev className='center ma' >
			<div classnName='absolute mt2'>
			  <img id='inputimage' alt= ''  src={imageUrl} width='500px' heigh='auto' />
			</div>
		</dev>
	);
}

export default FaceRecognition;