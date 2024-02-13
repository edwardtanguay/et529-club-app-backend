import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3311;

interface IMember {
	id: string;
	name: string;
	age: number;
}

const members: IMember[] = [
	{
		id: "2382js",
		name: "James Hatfield",
		age: 55
	},
	{
		id: "2jjilw",
		name: "Maryilyn Oscarton",
		age: 44
	},
	{
		id: "28wjks",
		name: "Viktor Ramstein",
		age: 34
	}
];

app.get("/members", (req, res) => {
	res.json(members);
	// res.json('28jsf8943h s8f823@#$@$34 NETWORK ERROR: CORRUPTED DATA s832983j');
});

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});
