import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const model = await prisma.model.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });

    if (!model) {
      return NextResponse.json({ error: 'Model not found' }, { status: 404 });
    }

    const formattedModel = {
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
    };

    return NextResponse.json(formattedModel);
  } catch (error) {
    console.error('Error fetching model:', error);
    return NextResponse.json(
      { error: 'Failed to fetch model' },
      { status: 500 }
    );
  }
}
