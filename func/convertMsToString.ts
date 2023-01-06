export const convertMsToString = (ms: number) => {
	const now = new Date().getTime();
	const s = now / 1000 - ms;
	if (s < 60) {
		return `${s} giây trước`;
	}
	if (s < 3600) {
		return `${Math.floor(s / 60)} phút trước`;
	}
	if (s < 86400) {
		return `${Math.floor(s / 3600)} giờ trước`;
	}
	if (s < 2505600) {
		return `${Math.floor(s / 86400)} ngày trước`;
	}
	return `${Math.floor(s / 2505600)} tháng trước`;
};
