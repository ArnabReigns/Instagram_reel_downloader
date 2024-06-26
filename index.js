const express = require("express");
const cors = require("cors");
const instagramDl = require("@sasmeee/igdl");
const app = express();
const port = 3000;

app.use(
	cors({
		origin: "*",
		allowedHeaders: "*",
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/download", async (req, res) => {
	console.log(req.body);

	try {
		const reel = req.body.reel;
		const data = await instagramDl(reel);
		return res.json(data[0]);
	} catch (err) {
		console.log(err);
		res.json({ error: "Some Internal Error Occured!" });
	}
});

app.get("/", async (req, res) => {
	res.send("Instagram Downloader Api");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
