const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include:[Product]
    });
    // everything is good---
    res.status(200).json(categoryData);

  } catch (err) {
    // internal server error 
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {

  // find one category by its `id` value
//  ???  is this right??
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
// is this right??
try {
  const userData = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(200).json(userData);
} catch (err) {
  res.status(400).json(err);
}


  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }

  // update a category by its `id` value
});

// delete a category by its `id` value
// is this correct??
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
