import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const getRecords = async (req: Request, res: Response) => {
  try {
    const data = await prisma.category.findMany({
      select: {
        id: true,
        title: true,
        slug: true
      },
      where: {
        is_active: true
      }
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getRecord = async (req: Request, res: Response) => {
  const { slug } = req.params;

  try {
    const data = await prisma.category.findFirst({
      where: { slug },
      include: {
        categoryProducts: {
          select: {
            product: {
              select: {
                id: true,
                title: true,
                slug: true
              }
            }
          }
        }
      }
    });


    if (!data) res.status(404).json({ error: 'Product not found' });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};