const db = require("../db/dbConfig");

// INDEX
const getAllItems = async () => {
  try {
    const allItems = await db.any("SELECT *  FROM items");
    return allItems;
  } catch (error) {
    return error;
  }
};

// SHOW
const getOneItem = async (id) => {
  try {
    const oneItem = await db.one("SELECT * FROM items WHERE id=$1", id);
    return oneItem;
  } catch (error) {
    return error;
  }
};

// CREATE
const createItem = async (item) => {
  try {
    const newItem = await db.one(
      "INSERT INTO items (item_name,pick_up_instructions,picture) VALUES ($1,$2,$3) RETURNING *",
      [item.item_name, item.pick_up_instructions,item.picture]
    );
    return newItem;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateItem = async (id, item) => {
  try {
    const updatedItem = await db.one(
      "UPDATE items SET item_name=$1, pick_up_instructions=$2,picture=$3 WHERE id=$4 RETURNING *",
      [item.item_name, item.pick_up_instructions,item.picture, id]
    );
    return updatedItem;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteItem = async (id) => {
  try {
    const deletedItem = await db.one(
      "DELETE FROM items WHERE id=$1 RETURNING *",
      id
    );
    return deletedItem;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllItems,
  getOneItem,
  createItem,
  deleteItem,
  updateItem,
};
