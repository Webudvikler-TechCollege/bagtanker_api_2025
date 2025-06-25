import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const getRecords = async (req: Request, res: Response) => {
  try {
    const data = await prisma.comment.findMany({
      select: {
        id: true,
        title: true,
        user: {
          select: {
            name: true,
            email: true
          }
        }
      }
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

export const getRecord = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await prisma.comment.findFirst({
      where: { id: Number(id) },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        product: {
          select: {
            title: true
          }
        }
      }
    });


    if (!data) res.status(404).json({ error: 'Comment not found' });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

export const createRecord = async (req: Request, res: Response) => {  
  const { title, comment, productId } = req.body;  
  const userId = req?.user?.id || undefined;
  const is_active = String(req.body.is_active).toLowerCase() === 'true';

  if (!userId || !title || !comment) {
    res.status(400).json({ error: 'Title, comment and user id are required' });
    return
  }  

  try {
    const data = await prisma.comment.create({
      data: {
        title,
        comment,
        userId, // userId is now a number
        productId,
        is_active
      },
    });
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
};

export const updateRecord = async (req: Request, res: Response) => {  
  const { id } = req.params;
  const { title, comment, productId } = req.body;  
  const userId = req?.user?.id;
  const is_active = String(req.body.is_active).toLowerCase() === 'true';

  if (!userId || !title || !comment) {
    res.status(400).json({ error: 'Title, comment and user id are required' });
  }  

  try {

    const dataToUpdate: any = {
      title,
      comment,
      userId,
      productId,
      is_active,
    };

    const data = await prisma.comment.update({
      where: { id: Number(id) },
      data: dataToUpdate,
    });

    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
};

export const deleteRecord = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.comment.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({ message: 'Comment deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete comments' });
  }
};