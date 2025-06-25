import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const createRecord = async (req: Request, res: Response) => {
  const { productId } = req.body;
  const userId = req?.user?.id || undefined;

  if (!userId || !productId) {
    res.status(400).json({ error: 'Product and user id are required' });
    return
  }

  try {
    // Provide required fields for comment creation
    const data = await prisma.favorite.create({
      data: {
        userId, // userId is now a number
        productId
      },
    });
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create favorite' });
  }
};

export const deleteRecord = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const userId = req?.user?.id || undefined;


  if (!userId || !productId) {
    res.status(400).json({ error: 'Product and user id are required' });
    return;
  }

  try {
    await prisma.favorite.delete({
      where: {
        userId_productId: {
          userId: userId,
          productId: productId
        }
      }
    });
    res.status(200).json({ message: 'Comment deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete comments' });
  }
};