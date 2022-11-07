const express = require("express");
const router = express.Router();
const toDoCtrl = require("../controllers/todoController");
router.get('/index', toDoCtrl.index)
router.post("/add",toDoCtrl.add);
router.delete('/delete/:id',toDoCtrl.remove)
router.put("/update", toDoCtrl.update);
module.exports = router;