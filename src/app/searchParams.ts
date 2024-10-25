import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const searchParam = {
	name: parseAsString.withDefault("腹筋"),
};

export const serachParamsCache = createSearchParamsCache(searchParam);
