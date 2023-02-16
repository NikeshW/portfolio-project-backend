const express = require("express");
const items = express.Router();

const {
  getAllItems,
  getOneItem,
  createItem,
  deleteItem,
  updateItem,
} = require("../queries/items");

// Importing reviews controller
const claimsController = require("./claimsController.js");

items.use("/:itemId/claims", claimsController);


// GET ALL ITEMS/ INDEX

items.get("/", async (req, res) => {
  const allItems = await getAllItems();
  if (allItems[0]) {
    res.status(200).json(allItems);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// GET ONE ITEM / SHOW
items.get("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await getOneItem(id);
  if (!items.message) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// POST ITEM / CREATE
items.post("/", async (req, res) => {
  try {
    const item = await createItem(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// UPDATE
items.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await updateItem(id, req.body);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(404).json({ error: "Id not found" });
  }
});

// DELETE
items.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await deleteItem(id);
    res.status(200).json(deletedItem);
  } catch (error) {
    res.status(404).json({ error: "Id not found" });
  }
});

module.exports = items;
