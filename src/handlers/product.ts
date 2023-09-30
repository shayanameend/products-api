import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function getAllProducts(request: Request, response: Response) {
  const products = await prisma.product.findMany({
    where: {
      userId: request.user?.id!,
    },
  });

  response.status(200).json({ data: products });
}

export async function getOneProduct(request: Request, response: Response) {
  const product = await prisma.product.findUnique({
    where: {
      id: request.params.id,
      userId: request.user?.id!,
    },
  });

  response.status(200).json({ data: product });
}

export async function createProduct(request: Request, response: Response) {
  const product = await prisma.product.create({
    data: {
      name: request.body.name,
      description: request.body.description,
      userId: request.user?.id!,
    },
  });

  response.status(200).json({ data: product });
}

export async function updateProduct(request: Request, response: Response) {
  const product = await prisma.product.update({
    where: {
      id: request.params.id,
      userId: request.user?.id!,
    },
    data: {
      name: request.body.name,
      description: request.body.description,
    },
  });

  response.status(200).json({ data: product });
}

export async function deleteProduct(request: Request, response: Response) {
  const product = await prisma.product.delete({
    where: {
      id: request.params.id,
      userId: request.user?.id!,
    },
  });

  response.status(200).json({ data: product });
}
