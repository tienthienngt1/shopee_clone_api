export const convertNumberToK = (num: number, type = 0) => {
	return Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: type ? 0 : 1,
	})
		.format(num)
		.replace("K", "k");
};
