const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({'test': 'testValue'})
 });

module.exports = router;