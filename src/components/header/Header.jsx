import React from 'react';

const Header = () => {
	return (
		<header className="header">
			<nav className="nav">
				<ul className="nav_list">
					<li className="nav_list__item">
						<a href="#" className='nav_list__link'>Todo list</a>
					</li>
					<li className="nav_list__item">
						<a href="#" className='nav_list__link'>Notes</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;