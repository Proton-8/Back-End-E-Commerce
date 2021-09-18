const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


  // find all tags
  router.get('/', async(req, res) => {
    try {
        const tagsData = await Tag.findAll({
            include: [{ model: Product, through: ProductTag }],
        });

  // everything is good---
        res.status(200).json(tagsData);

            // internal server error
    } catch (err) {
        res.status(500).json(err);
    }
});



// find a single tag by its `id`
router.get('/:id', async(req, res) => {
  try {
      const tagData = await Tag.findByPk(req.params.id, {
          include: [{ model: Product, through: ProductTag }],
      });

      if (!tagData) {
        // ID not found-----
          res.status(404).json({
              message: `No Tag found with id: ${req.params.id}`
          })
          return;
      }
  // everything is good---
      res.status(200).json(tagData);
            // internal server error
  } catch (err) {
      res.status(500).json(err);
  }
});


  // create a new tag
router.post('/', async(req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
} catch (err) {
    res.status(400).json(err);
}
});


  // update a tag's name by its `id` value
router.put('/:id', async(req, res) => {
  
  try {
    const updatedTag = await Tag.update({
        tag_name: req.body.tag_name,
    }, {
        where: {
            id: req.params.id,
        },
    })

    if (!updatedTag[0]) {
        res.status(404).json({
            message: `Sorry, the Tag was not updated due to one of the following reasons:
            1. Tag doesn't exist
            2. Tag not provided
            3. Tag has same value as current Tag`,
        })
        return;
    }
    res.status(200).json({
        message: `Tag with id: ${req.params.id} successfully updated with: ${req.body.tag_name}`
    });
} catch (err) {
    res.status(400).json(err);
}

});


  // delete on tag by its `id` value

  router.delete("/:id", async (req, res) => {
    try {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!tagData) {
        res.status(404).json({ message: "Tag with this ID doesn't exist!" });
        return;
      }
      res.status(200).json( {message: 'Tag with ID supplied is now deleted!'});
    } catch (err) {

      res.status(500).json(err);
    }
  });


module.exports = router;
