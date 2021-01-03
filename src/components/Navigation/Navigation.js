import React from 'react';

const Navigation = ({onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
			return(
			  <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signout')} className='rat f3 link dim black underline pa3 mointer'>Sign out</p>
				</nav>
			);
		} else {
			return(
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signin')} className='rat f3 link dim black underline pa3 mointer'>Sign in</p>
					<p onClick={() => onRouteChange('Register')} className='rat f3 link dim black underline pa3 mointer'>Register</p>
				</nav>
			);
		}
}

export default Navigation;