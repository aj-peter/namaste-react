import { useEffect, useState } from 'react';
import { getRestoData } from '../api/getRestoData';

export const useRestoData = (offset = 0) => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState({});
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setIsError(false);
		setError({});

		const controller = new AbortController();
		const { signal } = controller;

		getRestoData(offset, { signal })
			.then((data) => {
				setResults((prev) => [...prev, ...data]);
				setHasMore(Boolean(data.length));
				setIsLoading(false);
			})
			.catch((e) => {
				setIsLoading(false);
				if (signal.aborted) return;
				setIsError(true);
				setError({ message: e.message });
			});

		return () => controller.abort();
	}, [offset]);

	return { results, isLoading, isError, error, hasMore };
};
