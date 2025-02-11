import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello!" });
});

app.listen(7000, () => {
    console.log("Server started at localhost:7000");
});


