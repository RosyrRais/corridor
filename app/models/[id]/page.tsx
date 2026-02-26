'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { mockModels } from '@/data/mockData';

export default function ModelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const model = mockModels.find((m) => m.id === resolvedParams.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!model) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            模型未找到
          </h1>
          <button
            onClick={() => router.push('/')}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-zinc-900 py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => router.push('/')}
          className="mb-6 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-2"
        >
          <span>←</span> 返回
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={model.images[currentImageIndex]}
                  alt={model.name}
                  fill
                  className="object-cover"
                />
              </div>
              {model.images.length > 1 && (
                <div className="p-4 flex gap-2 overflow-x-auto">
                  {model.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                        currentImageIndex === index
                          ? 'border-zinc-900 dark:border-zinc-100'
                          : 'border-zinc-200 dark:border-zinc-800'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${model.name} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-lg p-8 border border-zinc-200 dark:border-zinc-800">
              <div className="mb-6">
                {model.category && (
                  <span className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm px-3 py-1 rounded-full mb-3">
                    {model.category.name}
                  </span>
                )}
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  {model.name}
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {model.description}
                </p>
              </div>

              {model.specifications && Object.keys(model.specifications).length > 0 && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    技术规格
                  </h2>
                  <div className="space-y-3">
                    {Object.entries(model.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800"
                      >
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          {key}
                        </span>
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-500">
                  <span>创建于 {new Date(model.createdAt).toLocaleDateString('zh-CN')}</span>
                  <span>更新于 {new Date(model.updatedAt).toLocaleDateString('zh-CN')}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  className="flex-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-3 px-6 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors font-medium"
                >
                  下载模型
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-medium"
                >
                  收藏
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
