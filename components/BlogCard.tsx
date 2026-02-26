import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="group bg-white dark:bg-zinc-950 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-80 aspect-video sm:aspect-square bg-zinc-100 dark:bg-zinc-900 overflow-hidden shrink-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="flex-1 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="font-medium text-zinc-900 dark:text-zinc-100">
                  {post.author.name}
                </div>
                <div className="text-xs">
                  {new Date(post.createdAt).toLocaleDateString('zh-CN')} · {post.readTime}
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4 flex-1">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
