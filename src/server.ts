import "dotenv/config";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import ConnectionDataBase from "./database";
import { AppError } from "./errors/AppError";
import router from "./routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

ConnectionDataBase()
    .then(() => console.log("Success in connection database"))
    .catch((e) => console.log(`Error in connection database - ${e}`));

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

app.listen(3333, () => {
    console.log("port", process.env.PORT);
    console.log("Server is running...");
});
