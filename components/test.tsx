"use client"

export default function Test() {
	async function getData() {
		const request = await fetch("https://localhost:444")
		const data = await request.json()
		console.log(data)
		return data
	}
	const data = getData()
	return (
		<div>
			<p>This is a test component</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
