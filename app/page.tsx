'use client';

import { useState } from 'react';
import ModelCard from '@/components/ModelCard';
import StickyHeader from '@/components/StickyHeader';
import { mockModels, mockCategories } from '@/data/mockData';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);

  const filteredModels = mockModels.filter((model) => {
    const matchesCategory = selectedCategory === 'all' || model.categoryId === selectedCategory;
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBackgroundClick = () => {
    if (selectedModelId) {
      setSelectedModelId(null);
    }
  };

  return (
    <div 
      className="min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-zinc-900"
      onClick={handleBackgroundClick}
    >
      <StickyHeader 
        title="专业模型展示平台"
        description="探索高质量的 3D 模型资源，涵盖建筑、工业设计、角色和场景等多个领域"
      />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex flex-col sm:flex-row gap-4" onClick={(e) => e.stopPropagation()}>
          <input
            type="text"
            placeholder="搜索模型..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
          >
            <option value="all">全部分类</option>
            {mockCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6 flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700'
            }`}
          >
            全部
          </button>
          {mockCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                  : 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {filteredModels.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-zinc-600 dark:text-zinc-400">未找到匹配的模型</p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              找到 {filteredModels.length} 个模型
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModels.map((model) => (
                <ModelCard 
                  key={model.id} 
                  model={model}
                  isSelected={selectedModelId === model.id}
                  isDimmed={selectedModelId !== null && selectedModelId !== model.id}
                  onSelect={setSelectedModelId}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

