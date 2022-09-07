const warehouseData = require("../seed_data/warehouse");
const inventoryData = require("../seed_data/inventory");

exports.seed = async function(knex) {
  // warehouse table
  // Delete what exists -> insert seed_data/warehouse.js 
  await knex('warehouse').del();
  await knex('warehouse').insert(warehouseData); 

  // inventory table
  // Delete what exists -> insert seed_data/inventory.js  
  await knex('inventory').del();
  await knex('inventory').insert(inventoryData);
};
