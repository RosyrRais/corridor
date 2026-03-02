import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const categoryId = searchParams.get('categoryId');

    const models = await prisma.model.findMany({
      where: categoryId ? { categoryId } : undefined,
      include: {
        category: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    const formattedModels = models.map((model) => ({
      id: model.id,
      name: model.name,
      description: model.description,
      categoryId: model.categoryId,
      category: {
        id: model.category.id,
        name: model.category.name,
        description: model.category.description,
        slug: model.category.slug,
        createdAt: model.category.createdAt.toISOString(),
      },
      images: model.images,
      specifications: model.specifications,
      createdBy: model.createdBy,
      createdAt: model.createdAt.toISOString(),
      updatedAt: model.updatedAt.toISOString(),
    }));

    return NextResponse.json(formattedModels);
  } catch (error) {
    console.error('Error fetching models:', error);
    return NextResponse.json(
      { error: 'Failed to fetch models' },
      { status: 500 }
    );
  }
}
