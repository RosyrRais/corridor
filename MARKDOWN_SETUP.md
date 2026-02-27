# Markdown 解析库设置指南

## 安装依赖

博客内容使用 `react-markdown` 库来解析和渲染 Markdown 格式。

### 手动安装

如果自动安装失败，请在终端运行：

```bash
npm install react-markdown remark-gfm
```

或者如果你使用 pnpm：

```bash
pnpm add react-markdown remark-gfm
```

## 已添加的库

### 1. react-markdown (^9.0.1)
- 最流行的 React Markdown 解析库
- 安全（默认不渲染原始 HTML）
- 支持自定义组件渲染
- TypeScript 支持

### 2. remark-gfm (^4.0.0)
- GitHub Flavored Markdown 插件
- 支持表格、删除线、任务列表等
- 增强 Markdown 功能

## 使用方式

在博客详情页 (`app/blog/[id]/page.tsx`) 中：

```tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

<ReactMarkdown
  remarkPlugins={[remarkGfm]}
  className="prose prose-zinc dark:prose-invert max-w-none"
>
  {post.content}
</ReactMarkdown>
```

## 功能特性

### 支持的 Markdown 语法

- ✅ 标题 (# ## ###)
- ✅ 段落和换行
- ✅ 粗体 (**text**) 和斜体 (*text*)
- ✅ 列表（有序和无序）
- ✅ 链接 [text](url)
- ✅ 图片 ![alt](url)
- ✅ 代码块和行内代码
- ✅ 引用 (>)
- ✅ 表格（通过 remark-gfm）
- ✅ 删除线 (~~text~~)（通过 remark-gfm）

### 样式定制

使用 Tailwind Typography (`prose`) 类自动美化：
- 响应式字体大小
- 适当的行高和间距
- 深色模式支持
- 自定义标题、段落、列表样式

## 为什么选择 react-markdown？

1. **安全性**：默认不渲染原始 HTML，防止 XSS 攻击
2. **可定制**：可以完全控制每个元素的渲染方式
3. **插件生态**：丰富的插件系统（GFM、数学公式、语法高亮等）
4. **性能**：优化的解析和渲染性能
5. **维护性**：活跃的社区和持续更新

## 故障排除

如果安装失败，可以尝试：

```bash
# 清理缓存
npm cache clean --force

# 删除 node_modules 和 lockfile
rm -rf node_modules package-lock.json

# 重新安装所有依赖
npm install
```

## 更多资源

- [react-markdown 文档](https://github.com/remarkjs/react-markdown)
- [remark-gfm 文档](https://github.com/remarkjs/remark-gfm)
- [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
