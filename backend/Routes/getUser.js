const express = require("express")
const router = express.Router()
const User = require("../Models/User")
const fetchingUser = require("../Middlewhere/fetchingUser")

router.post("/", fetchingUser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password")
        res.status(200).json({ success: true, message: "User registered successfully", user });
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router
