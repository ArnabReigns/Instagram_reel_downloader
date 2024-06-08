const express = require("express");
const instagramDl = require("@sasmeee/igdl");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/download", async (req, res) => {
	try {
		const reel = req.body.reel;
		const data = await instagramDl(reel);
		return res.json(data);
	} catch {
		res.json({ error: "Some Internal Error Occured!" });
	}
});

app.get("/", async (req, res) => {
	res.send("Instagram Downloader Api");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
