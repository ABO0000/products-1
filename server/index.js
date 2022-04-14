const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const upload = require("./middlwares/UploadFile");

require("dotenv").config();

const genTok = require('./genTok')

const Database = require("./connect/Database");
const PORT = process.env.PORT || 3001;

const database = new Database();
database.connectToDatabase();


const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(session({
    key: "user_id",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}))

app.post('/register', async (req, res) => {
    const data = await database.register(req);
    res.status(data.statusCode).json(data);
});

app.post('/login', async (req, res) => {
    const data = await database.login(req);
    res.status(data.statusCode).json(data);
});

app.post('/add-product', upload.single("img"), async (req, res) => {
    const data = await database.createProduct(req);
    res.status(data.statusCode).json(data);
});

app.post('/set-review', async (req, res) => {
    const data = await database.reviews(req);
    res.status(data.statusCode).json(data);

});
app.post('/change-password', async (req, res) => {
    const data = await database.changePassword(req);
    res.status(data.statusCode).json(data);

});
app.post('/update-password', async (req, res) => {
    const data = await database.passwordUpdate(req);
    res.status(data.statusCode).json(data);

});
app.get('/products', async (req, res) => {
    const data = await database.getProducts(req.body);
    res.status(data.statusCode).json(data);
});

app.get('/products/:id', async (req, res) => {
    const data = await database.productDetails(req);
    res.status(data.statusCode).json(data);
});

app.get('/products/input/:search', async (req, res) => {
    const data = await database.getFilteredProducts(req);
    res.status(data.statusCode).json(data);
});

app.get('/users', async (req, res) => {
    const data = await database.getUsers(req.body);
    res.status(data.statusCode).json(data);
});

app.get('/users/input/:search', async (req, res) => {
    const data = await database.getFilteredUsers(req);
    res.status(data.statusCode).json(data);
});

app.get('/reviews', async (req, res) => {
    const data = await database.getReview(req.body);
    res.status(data.statusCode).json(data);
});

app.listen(PORT, () => { console.log(`Server started on ${PORT}`) });