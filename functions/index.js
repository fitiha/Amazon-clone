const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    'sk_test_51OH4g6Lv5RztHMxOe6qEAkteTgoRn1alJEbzjL61VaXsr4dwSSTtWoAAlxscGY0QgWQbq12hPfT83jZSI6B64vwz008lSzHbJd'
);

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());






exports.api = functions.https.onRequest(app);