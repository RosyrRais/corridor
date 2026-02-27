'use client';

import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import StickyHeader from '@/components/StickyHeader';
import { mockBlogPosts } from '@/data/blogData';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = mockBlogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-zinc-900">
      <StickyHeader 
        title="博客文章"
        description="分享3D建模技术、最佳实践和行业见解"
      />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="搜索文章..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
          />
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-zinc-600 dark:text-zinc-400">未找到匹配的文章</p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              找到 {filteredPosts.length} 篇文章
            </div>
            <div className="flex flex-col gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
