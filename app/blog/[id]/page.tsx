'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { mockBlogPosts } from '@/data/blogData';

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const post = mockBlogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            文章未找到
          </h1>
          <button
            onClick={() => router.push('/blog')}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            返回博客列表
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-zinc-900 py-12 px-4">
      <article className="mx-auto max-w-4xl">
        <button
          onClick={() => router.push('/blog')}
          className="mb-6 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-2"
        >
          <span>←</span> 返回博客列表
        </button>

        <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <div className="relative aspect-[21/9] bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-medium text-zinc-900 dark:text-zinc-100">
                  {post.author.name}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {new Date(post.createdAt).toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })} · {post.readTime}
                </div>
              </div>
            </div>

            <div 
              className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-p:leading-relaxed prose-ul:my-4 prose-li:my-2"
              dangerouslySetInnerHTML={{ 
                __html: post.content.split('\n').map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1>${line.slice(2)}</h1>`;
                  } else if (line.startsWith('## ')) {
                    return `<h2>${line.slice(3)}</h2>`;
                  } else if (line.startsWith('### ')) {
                    return `<h3>${line.slice(4)}</h3>`;
                  } else if (line.trim() === '') {
                    return '<br />';
                  } else {
                    return `<p>${line}</p>`;
                  }
                }).join('')
              }}
            />
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-zinc-950 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            关于作者
          </h2>
          <div className="flex items-center gap-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <div className="font-medium text-zinc-900 dark:text-zinc-100 text-lg">
                {post.author.name}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                3D建模专家，专注于游戏和动画领域
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
