export const hostname = () => {
	return typeof window !== undefined && window.location.origin
		? window.location.origin
		: null;
};
