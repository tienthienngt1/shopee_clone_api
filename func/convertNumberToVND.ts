export const convertNumberToVND = (num: number) => {
	return (num / 100000)
		.toLocaleString("en-US", {
			style: "currency",
			currency: "VND",
		})
		.replace(/[,]/g, ".");
};
