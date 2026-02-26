import { useRouter } from 'next/navigation';
import Image from 'next/image';
import type { Model } from '@/types';

interface ModelCardProps {
  model: Model;
  isSelected?: boolean;
  isDimmed?: boolean;
  onSelect?: (id: string | null) => void;
}

export default function ModelCard({ model, isSelected, isDimmed, onSelect }: ModelCardProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSelected) {
      onSelect?.(null);
    } else {
      onSelect?.(model.id);
    }
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/models/${model.id}`);
  };

  return (
    <div 
      className={`group bg-white dark:bg-zinc-950 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 cursor-pointer ${
        isSelected 
          ? 'shadow-2xl scale-105 z-10 relative ring-2 ring-zinc-900 dark:ring-zinc-100' 
          : isDimmed 
          ? 'opacity-40 blur-sm scale-95' 
          : 'hover:shadow-xl'
      }`}
      onClick={handleClick}
    >
        <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
          <Image
            src={model.images[0]}
            alt={model.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {model.category && (
            <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
              {model.category.name}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
            {model.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
            {model.description}
          </p>
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
            <span>{new Date(model.createdAt).toLocaleDateString('zh-CN')}</span>
            {model.specifications && (
              <span>{Object.keys(model.specifications).length} 项规格</span>
            )}
          </div>
          {isSelected && (
            <button
              onClick={handleViewDetails}
              className="mt-3 w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-2 px-4 rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors text-sm font-medium"
            >
              查看详情
            </button>
          )}
        </div>
      </div>
  );
}
