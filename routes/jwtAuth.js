const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middleware/authorize");

//authorizeentication

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await pool.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *",
      [username, bcryptPassword, email]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].id);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Login Route
router.post("/login", validInfo, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Edit User Route
router.put("/account/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;

    let newUser = await pool.query(
      "UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING id, username, email",
      [username, email, id]
    );
    return res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete User Route
router.delete("/account/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);

    return res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get Pages Route
router.get("/pages", async (req, res) => {
  const { id } = req.params;
  const { template_id, page_number, page_name, tags } = req.body;
  try {
    const page = await pool.query("SELECT * FROM pages WHERE id = $1", [
      template_id,
      page_number,
      page_name,
      tags,
      id,
    ]);

    return res.json(page.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Post Favorite Route
router.post("/favorite", async (req, res) => {
  const { id } = req.params;
  const { template_id, page_number, page_name, tags } = req.body;
  try {
    const page = await pool.query(
      "SELECT * FROM pages WHERE id = $1 RETURNING *",
      [template_id, page_number, page_name, tags, id]
    );

    if (page == page) {
      return res.status(200).json(page.rows[0]);
    }

    const { user_id, template_id, page_id } = req.body;

    let newFavorite = await pool.query(
      "INSERT INTO favorites (user_id, template_id, page_id) VALUES ($1, $2, $3) RETURNING *",
      [user_id, template_id, page_id]
    );

    return res.status(200).json(newFavorite.rows[0].id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Verify
router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
