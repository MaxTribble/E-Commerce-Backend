const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        {
            model: Product,
            attributes: [
                'product_name',
                
            ],
        },]
    }
    )
    const tags = tagData.map((user) => user.get({ plain : true}))
    res.status(200).json(tags)
} catch (err) {
    res.status(500).json({message:'an error occurred, please try again.'})
}
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product datatry {
    try{
    const tagData = await Tag.findByPk(req.params.id,{
      include: [
        {
            model: Product,
            attributes: [
                'product_name',
                
            ],
        },]
    }
    )
    const Tags = tagData.get({ plain : true})
    res.status(200).json(Tags)
} catch (err) {
    res.status(500).json({message:'an error occurred, please try again.'})
    console.log(err)
}

});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(
        req.body,
    )
    console.log(newTag);
    res.status(200).json(newTag);
} catch (err) {
    console.log(err);
    res.status(500).json({message:err});
}
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(
        req.body, {
          where: { id: req.params.id }
        }
    )
    res.status(200).json(updateTag);
} catch (err) {
    console.log(err);
    res.status(500).json({message:err});
}
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({where: {id: req.params.id}})
    res.status(200).json(tagData)
} catch (err) {
    res.status(500).json({message:'an error occurred, please try again.'})
    console.log(err)
}
});

module.exports = router;
