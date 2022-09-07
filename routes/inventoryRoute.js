const router = require('express').Router();
const knex = require('knex')(require("../knexfile"));

router
    .route("/")
    .get(async (req, res) => {

        try {
            const inventoryData = await knex.select("*").from("inventory");

            res.json(inventoryData);
        } catch (error){
            res.status(500).json({ message: "Unable to retrieve inventory data" });
        }
    })

module.exports = router;