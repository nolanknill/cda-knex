const router = require('express').Router();
const knex = require('knex')(require("../knexfile"));

router
    .route("/")
    .get(async (req, res) => {

        try {
            const warehouseData = await knex.select("*").from("warehouse");

            res.json(warehouseData);
        } catch (error){
            res.status(500).json({ message: "Unable to retrieve warehouse data" });
        }
    })

router
    .route("/:id")
    .get(async (req, res) => {
        try {
            const warehouseData = await knex
                .select("*")
                .from("warehouse")
                .where({ id: req.params.id });
            
            if (warehouseData.length === 0) {
                return res.status(404).json({message: "Warehouse not found"});
            }

            res.json(warehouseData);
        } catch (error){
            res.status(500).json({ message: "Unable to retrieve warehouse data" });
        }
    });
module.exports = router;