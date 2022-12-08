export const convertIdToUrl = (
	name: string | undefined,
	idParent: number | undefined,
	idChild?: number | undefined
) => {
	if (!name) return "";
	return `/${name.replaceAll(" &", "").replaceAll(" ", "-")}-cat.${
		idChild ? idParent + "." + idChild : idParent
	}`;
};
