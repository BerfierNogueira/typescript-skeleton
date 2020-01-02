import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";

class App {
    private express: Application;

    constructor() {
        this.express = express();
        this.middlewares();
        this.database();     
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {
        //mongoose.connect();
    }

    private routes(): void {
        // this.express.get("/", (req, res) => {
        //     return res.send("Hello, WORLD");
        // })
        this.express.use(routes);
    }

    get expressApp(): Application{
        return this.express;
    }
}

export default new App().expressApp