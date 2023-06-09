require("dotenv").config();
import express, { Express } from "express";
import http from "http";
import morgan from "morgan";
import routes from "./routes/products";

const router: Express = express();

router.use(morgan("dev"));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next): any => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return res.status(200).json({});
  }
  next();
});

router.use("/", routes);

router.use((req, res) => {
  console.log(req);
  return res.status(404).json({
    message: "Router error",
  });
});

const httpServer = http.createServer(router);

const port = process.env.SERVER_PORT;
httpServer.listen(port, () => console.log(`Server running in port ${port}`));
