const router = require("express").Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'my firt post',
            desc: 'random data you...'
        }
    });
});

module.exports = router;