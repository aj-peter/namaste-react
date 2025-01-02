import { useEffect, useState } from 'react';

import RestoCard from '../RestoCard/RestoCard';
import Shimmer from '../Shimmer/Shimmer';

import { useRestoData } from '../../hooks/useRestoData';

const RestoContainer = () => {
	const [restoList, setRestoList] = useState([]);
	const [offset, setOffset] = useState(0);
	let fullList;
	let results, isLoading, isError, error, hasMore;

	const fetchData = async () => {
		const { results, isLoading, isError, error, hasMore } =
			useRestoData(offset);
		console.log(results);

		fullList =
			results?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;

		setRestoList(fullList);
	};

	useEffect(() => {
		fetchData();
	}, [offset]);

	return isLoading
		? Array.from({ length: 12 }, (_, i) => <Shimmer key={i} />)
		: restoList?.map((r) => (
				<RestoCard
					key={r?.info?.id}
					name={r?.info?.name}
					rating={r?.info?.avgRatingString}
					dTime={r?.info?.sla?.slaString}
					cuisines={r?.info?.cuisines?.join(', ')}
					imageId={r?.info?.cloudinaryImageId}
				/>
		  ));
};

export default RestoContainer;
