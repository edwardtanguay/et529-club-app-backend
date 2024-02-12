import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3311;

interface IMember {
	id: string;
	name: string;
}

const members: IMember[] = [
	{
		id: "iwj33j",
		name: "James Hatfield",
	},
	{
		id: "2jjilw",
		name: "Maryilyn Oscarton",
	},
];

app.get("/members", (req, res) => {
	res.json(members);
});

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});
