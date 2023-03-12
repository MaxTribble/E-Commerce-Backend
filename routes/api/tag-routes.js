const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      // include: [
      //   {
      //       model: Product,
      //       attributes: [
      //           'product_name',
                
      //       ],
      //   },]
    }
    )
    const tags = tagData.map((user) => user.get({ plain : true}))
    res.status(200).json(tags)
} catch (err) {
    res.status(500).json({message:'an error occurred, please try again.'})
}
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
