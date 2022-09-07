const express = require('express');
const app = express();

const warehouseRoute = require('./routes/warehouseRoute');
const inventoryRoute = require('./routes/inventoryRoute');

app.use("/warehouses", warehouseRoute);
app.use("/inventories", inventoryRoute);

app.listen(8080, () => {
    console.log("🚀 Server listening on http://localhost:8080");
})