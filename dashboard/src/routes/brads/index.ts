import express, { Request, Response } from "express";
import { db } from "common";
import { Product } from "../../types/interfaces";

const router = express.Router();

router.get("/brands", async (req: Request, res: Response) => {
  const products: Array<Product> = await db.read("products");

  const GROUPEDbyBrand: Record<string, Array<Product>> = {};

  for (const product of products) {
    if (!GROUPEDbyBrand[product.brand]) {
      GROUPEDbyBrand[product.brand] = [];
    }

    GROUPEDbyBrand[product.brand].push(product);
  }

  const brundscount: Array<{ name: string; productsCount: number }> = [];

  for (const brand of Object.keys(GROUPEDbyBrand)) {
    const obj = { name: brand, productsCount: GROUPEDbyBrand[brand].length };
    brundscount.push(obj);
  }

  res.send(brundscount);
});

export { router as brandsRouter };
