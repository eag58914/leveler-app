import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="NavBar">
			<Link to="/login" className="NavBar-link">
				LOG IN
			</Link>
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/signup" className="NavBar-link">
				SIGN UP{' '}
			</Link>
		</div>
	);
};

export default NavBar;
