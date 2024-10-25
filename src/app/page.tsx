import type { SearchParams } from "nuqs/server";
import { serachParamsCache } from "./searchParams";

type PageProps = {
	searchParams: SearchParams;
};

export default function Home({ searchParams }: PageProps) {
	const { name } = serachParamsCache.parse(searchParams);
	return (
		<>
			<p>{name || "名無しさん"}こんにちは</p>
		</>
	);
}
