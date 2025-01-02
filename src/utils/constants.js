import {
	BadgeHelp,
	BadgePercent,
	BriefcaseBusiness,
	Search,
	ShoppingCart,
	User,
} from 'lucide-react';

export const TAGS = [
	{ icon: BriefcaseBusiness, text: 'Swiggy Corporate', id: 'SC' },
	{ icon: Search, text: 'Search', id: 'S' },
	{ icon: BadgePercent, text: 'Offers', id: 'O' },
	{ icon: BadgeHelp, text: 'Help', id: 'H' },
	{ icon: User, text: 'Sign In', id: 'SI' },
	{ icon: ShoppingCart, text: 'Cart', id: 'C' },
];

export const LOGO_URL =
	'https://cdn-images-1.medium.com/v2/resize:fit:1200/1*sQa3vSQd9V4k-PeVNgGg0Q.png';

export const SWIGGY_GET_URL =
	'https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

export const SWIGGY_POST_URL =
	'https://www.swiggy.com/dapi/restaurants/list/update';

export const CLOUDINARY_URL =
	'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
