'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-zinc-600 dark:text-zinc-400">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-zinc-900 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-800 dark:to-zinc-950 h-32"></div>
          
          <div className="px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16 mb-6">
              <div className="relative">
                <Image
                  src={user.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
                  alt={user.username}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-white dark:border-zinc-950 bg-white dark:bg-zinc-900"
                />
                {user.role === 'admin' && (
                  <span className="absolute bottom-0 right-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    管理员
                  </span>
                )}
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                  {user.username}
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  账户信息
                </h2>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-zinc-600 dark:text-zinc-400">用户名</label>
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium">{user.username}</p>
                  </div>
                  <div>
                    <label className="text-sm text-zinc-600 dark:text-zinc-400">邮箱</label>
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-zinc-600 dark:text-zinc-400">角色</label>
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium">
                      {user.role === 'admin' ? '管理员' : '普通用户'}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-zinc-600 dark:text-zinc-400">注册时间</label>
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium">
                      {new Date(user.createdAt).toLocaleDateString('zh-CN')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  快速操作
                </h2>
                <div className="space-y-3">
                  {user.role === 'admin' && (
                    <>
                      <button className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-2 px-4 rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors text-sm font-medium">
                        创建新模型
                      </button>
                      <button className="w-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 py-2 px-4 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm font-medium">
                        管理分类
                      </button>
                    </>
                  )}
                  <button className="w-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 py-2 px-4 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm font-medium">
                    查看我的收藏
                  </button>
                </div>
              </div>
            </div>

            {user.role === 'admin' && (
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  管理员权限
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  您拥有管理员权限，可以创建和管理模型分类、添加新模型以及编辑现有内容。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
