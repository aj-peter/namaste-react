import { SWIGGY_GET_URL, SWIGGY_POST_URL } from '../utils/constants';

export const getRestoData = async (offset, params = {}) => {
	let url;

	if (offset === 0) {
		url = SWIGGY_GET_URL;
	} else {
		url = SWIGGY_POST_URL;
		params = {
			...params,
			method: 'POST',
			body: JSON.stringify({
				lat: 9.9312328,
				lng: 76.26730409999999,
				nextOffset: 'CJhlELQ4KICY/tWbudLZeDCnEzgC',
				widgetOffset: {
					NewListingView_category_bar_chicletranking_TwoRows: '',
					NewListingView_category_bar_chicletranking_TwoRows_Rendition:
						'',
					Restaurant_Group_WebView_SEO_PB_Theme: '',
					collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
						offset,
					inlineFacetFilter: '',
					restaurantCountWidget: '',
				},
				filters: {},
				seoParams: {
					seoUrl: 'https://www.swiggy.com/home',
					pageType: 'FOOD_HOMEPAGE',
					apiName: 'FoodHomePage',
				},
				page_type: 'DESKTOP_WEB_LISTING',
				_csrf: 'KpmQOE8nyqQ0-_LuOtcCFeZP5a2fAbpBiuV6zj6Y',
			}),
		};
	}

	let response;
	try {
		response = await fetch(url, params);
	} catch (e) {
		console.log(e);
	}

	const data = await response.json();
	return data;
};
