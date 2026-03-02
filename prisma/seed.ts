import { prisma } from '../lib/prisma';
import { mockCategories, mockModels } from '../data/mockData';
import { mockBlogPosts } from '../data/blogData';

async function main() {
  console.log('开始清理数据库...');
  await prisma.blogPost.deleteMany();
  await prisma.model.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  console.log('创建管理员用户...');
  const adminUser = await prisma.user.create({
    data: {
      id: '1',
      username: 'admin',
      email: 'admin@corridor.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
      role: 'admin',
    },
  });

  console.log('导入分类数据...');
  for (const category of mockCategories) {
    await prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
        description: category.description,
        slug: category.slug,
        createdAt: new Date(category.createdAt),
      },
    });
  }

  console.log('导入模型数据...');
  for (const model of mockModels) {
    await prisma.model.create({
      data: {
        id: model.id,
        name: model.name,
        description: model.description,
        categoryId: model.categoryId,
        images: model.images,
        specifications: model.specifications || {},
        createdBy: model.createdBy,
        createdAt: new Date(model.createdAt),
        updatedAt: new Date(model.updatedAt),
      },
    });
  }

  console.log('导入博客文章数据...');
  for (const post of mockBlogPosts) {
    await prisma.blogPost.create({
      data: {
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage,
        authorId: adminUser.id,
        authorName: post.author.name,
        authorAvatar: post.author.avatar,
        tags: post.tags,
        createdAt: new Date(post.createdAt),
        readTime: post.readTime,
      },
    });
  }

  console.log('数据导入完成！');
}

main()
  .catch((e) => {
    console.error('数据导入失败:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
