import { useEffect, useState } from 'react';
import './body.css';

import { getRestoData } from '../../api/getRestoData';
import RestoContainer from '../RestoContainer/RestoContainer';

const Body = () => {
	return (
		<div className="body">
			<RestoContainer />
		</div>
	);
};

export default Body;
