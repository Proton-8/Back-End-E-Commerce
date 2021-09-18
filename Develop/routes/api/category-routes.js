const router = require("express").Router();
const { Category, Product } = require("../../models");


// find all categories
router.get("/", async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include: [Product],
    });
    // everything is good---
    res.status(200).json(categoriesData);
  } catch (err) {
    // internal server error
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get("/:id", async (req, res) => {
  try {    
    const categoryData = await Category.findByPk(req.params.id, {include: [Product ],
    }); 

    if (!categoryData) {
      res.status(404).json({ message: "No Category with this id!" });
      return;
    }
      // everything is good---
    res.status(200).json(categoryData);
  } catch (err) {

    // internal server error
    res.status(500).json(err);
  }

});

// create a new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
      
      // everything is good---
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({
        message: `Sorry, the Category was not updated due to one of the following reasons:
        1. Category doesn't exist
        2. Category not provided
        3. Category is the same as the current Category`,
    })
      return;
    }
      // everything is good---
    res.status(200).json(userData);
  } catch (err) {
    // internal server error
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No Category with this id!" });
      return;
    }
      // everything is good---
    res.status(200).json({ message: `Category with id was deleted successfully.` });
  } catch (err) {
    // internal server error
    res.status(500).json(err);
  }
});

module.exports = router;
