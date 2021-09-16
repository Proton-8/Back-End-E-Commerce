const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


  // find all tags

router.get("/", async (req, res) => {
  try {
    const productsData = await Tag.findAll({
     //  include its associated Category and Tag data   
     include: [Category, 
      {
        model:Tag,
        through: ProductTag,
      }
      ],
    });
    // everything is good---
    res.status(200).json(productsData);
  } catch (err) {
    // internal server error
    res.status(500).json(err);
  }

  // find all products

});


  // find a single tag by its `id`
router.get("/:id", async (req, res) => {
  
   // be sure to include its associated Product data 
  try {
    const productData = await Tag.findByPk(req.params.id);
    if (!productData) {
      res.status(404).json({ message: "No Tag with this id!" });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});


  // create a new tag
router.post('/', (req, res) => {


});

  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  
});

  // delete on tag by its `id` value


  router.delete("/:id", async (req, res) => {
    try {
      const ProductData = await ProductTag.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!ProductData) {
        res.status(404).json({ message: "No Product with this id!" });
        return;
      }
      res.status(200).json(ProductData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
