const {Router} = require('express');
const { getTodo, saveTodo, updateToDo, deleteToDo } = require('../controllers/TodoController');
const router = Router();

router.get('/', getTodo);
router.post('/save', saveTodo);
router.get('/update', updateToDo);
router.get('/delete', deleteToDo);

module.exports = router;
