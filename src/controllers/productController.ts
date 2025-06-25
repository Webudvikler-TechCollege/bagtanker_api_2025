import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const getRecords = async (req: Request, res: Response) => {
  try {
    const data = await prisma.product.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        price: true
      }
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const getRecordsByCategory = async (req: Request, res: Response) => {
  try {
    const data = await prisma.product.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        price: true
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
    const data = await prisma.product.findFirst({
      where: { slug: slug },
      include: {
        image: {
          select: {
            filename: true
          }
        },
        productIngredient: {
          select: {
            amount: true,
            unit: {
              select: {
                name: true,
                abbreviation: true
              }
            },
            ingredient: {
              select: {
                title: true
              }
            }
          }
        },
        comments: {
          select: {
            title: true,
            comment: true,
            user: {
              select: {
                name: true,
                email: true
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