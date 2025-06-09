import dotenv from"dotenv";

dotenv.config();
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY = "sk_test_51ROhjnP1hyDbZWaoeSZH61sAv2LXMjoMiXLSnBOmCMrXzi8topmEz6DmvxFpMn10drPxzUbepAG8o86epneAHuYl00EjMTpBt7"

export default {
    JWT_USER_PASSWORD, 
    JWT_ADMIN_PASSWORD,
    STRIPE_SECRET_KEY
};