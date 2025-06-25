import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRoutes } from './routes/userRoutes';
import { productRoutes } from './routes/productRoutes';
import { authRoutes } from './routes/authRoutes';
import { categoryRoutes } from './routes/categoryRoutes';
import { commentRoutes } from './routes/commentRoutes';
import { newsRoutes } from './routes/newsRoutes';
import { favoriteRoutes } from './routes/favoriteRoutes';
import { messageRoutes } from './routes/messageRoutes';
import { newsletterRoutes } from './routes/newsletterRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/newsletters', newsletterRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
