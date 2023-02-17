const express = require("express");
const claims = express.Router({mergeParams: true});

const {
  getAllClaims,
  getOneClaim,
  createClaim,
  deleteClaim,
  updateClaim
} = require("../queries/claims");


// INDEX
claims.get("/", async (req, res) => {
  const {itemId} = req.params
  try {
    const allClaims = await getAllClaims(itemId)
    res.status(200).json(allClaims)
  } catch(error) {
    res.status(500).json({ error: "internal server error"})
  }
});

// SHOW
claims.get("/:id", async (req, res) => {
  const { id } = req.params;
  const claim = await getOneClaim(id);

  if (!claim.message) {
    res.status(200).json(claim);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
claims.post("/", async (req, res) => {
  try {
    const claim = await createClaim(req.body);
    res.status(200).json(claim);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
claims.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClaim = await deleteClaim(id);
    res.status(200).json(deletedClaim);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

// UPDATE
claims.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClaim = await updateClaim(id, req.body);
    res.status(200).json(updatedClaim);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

module.exports = claims;