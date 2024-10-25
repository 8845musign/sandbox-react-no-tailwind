"use client";

import { useQueryStates } from "nuqs";
import { searchParam } from "./searchParams";

export function Child() {
	const [{ name }, setParams] = useQueryStates(searchParam);
	return (
		<>
			<p>{name}</p>
			<button
				type="button"
				onClick={() => {
					setParams({ name: "John" });
				}}
			>
				変更
			</button>
		</>
	);
}
