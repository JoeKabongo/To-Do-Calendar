import express from 'express';
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from '../controllers/task.js';
import requireAuth from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', requireAuth, getTasks);
router.post('/create', requireAuth, createTask);
router.delete('/delete/:id', requireAuth, deleteTask);
router.put('/update/:id', requireAuth, updateTask);

export default router;
