const db = require("../db/dbConfig");

//INDEX
const getAllClaims = async (itemId) => {
  try {
    const allUsers = await db.any("SELECT * FROM claims WHERE item_id=$1", itemId);
    return allUsers;
  } catch (error) {
    return error;
  }
};

// SHOW
const getOneClaim = async (id) => {
  try {
    const oneClaim= await db.one("SELECT * FROM claims WHERE id=$1", id);
    return oneClaim;
  } catch (error) {
    return error;
  }
};

// CREATE
const createClaim = async (claim) => {
  try {
    const newClaim = await db.one(
      "INSERT INTO claims (user_name,email,phone_number,claim_note,item_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        claim.user_name,
        claim.email,
        claim.phone_number,
        claim.claim_note,
        claim.item_id,
      ]
    );
    return newClaim;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteClaim = async (id) => {
    try {
      const deletedClaim = await db.one(
        "DELETE FROM claims WHERE id=$1 RETURNING *",
        id
      );
      return deletedClaim;
    } catch (error) {
      return error;
    }
  };

  // UPDATE
const updateClaim = async (id, claim) => {
    try {
      const updatedClaim = await db.one(
        "UPDATE claims SET user_name=$1, email=$2, phone_number=$3, claim_note=$4, item_id=$5 WHERE id=$6 RETURNING *",
        [claim.user_name, claim.email, claim.phone_number, claim.claim_note, claim.item_id, id]
      )
      return updatedClaim;
    } catch (error) {
      return error;
    }
  };

module.exports = {
  getAllClaims,
  getOneClaim,
  createClaim,
  deleteClaim,
  updateClaim
}