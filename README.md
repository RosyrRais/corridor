# Corridor - 模型展示平台

一个现代化的 3D 模型展示和管理平台，使用 Next.js 16、TypeScript 和 Tailwind CSS 构建。

## 功能特性

### 用户功能
- 🔐 **用户登录** - 支持邮箱密码登录
- 👤 **个人中心** - 查看和管理个人信息
- 🔍 **模型浏览** - 浏览所有模型，支持搜索和分类筛选
- 📱 **响应式设计** - 完美适配移动端和桌面端

### 管理员功能
- 📁 **分类管理** - 创建、编辑和删除模型分类
- ➕ **创建模型** - 添加新的模型信息和图片
- 📊 **模型详情** - 查看模型的完整技术规格

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **状态管理**: React Context API
- **图片**: Next.js Image 优化

## 快速开始

### 安装依赖

\`\`\`bash
npm install
# 或
pnpm install
\`\`\`

### 运行开发服务器

\`\`\`bash
npm run dev
# 或
pnpm dev
\`\`\`

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 测试账号

### 管理员账号
- **邮箱**: admin@example.com
- **密码**: password
- **权限**: 可以创建和管理模型分类、创建新模型

### 普通用户账号
- **邮箱**: user@example.com
- **密码**: password
- **权限**: 浏览模型、查看详情

## 项目结构

\`\`\`
corridor/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页（模型展示）
│   ├── login/             # 登录页面
│   ├── profile/           # 个人中心
│   ├── categories/        # 分类管理
│   └── models/            # 模型相关页面
│       ├── create/        # 创建模型
│       └── [id]/          # 模型详情
├── components/            # React 组件
│   ├── Navbar.tsx         # 导航栏
│   └── ModelCard.tsx      # 模型卡片
├── contexts/              # React Context
│   └── AuthContext.tsx    # 认证上下文
├── data/                  # 模拟数据
│   └── mockData.ts        # 模型和分类数据
└── types/                 # TypeScript 类型定义
    └── index.ts           # 全局类型
\`\`\`

## 页面说明

### 首页 (/)
- 展示所有模型的卡片网格
- 支持按分类筛选
- 支持关键词搜索
- 点击卡片可查看模型详情

### 登录页 (/login)
- 邮箱密码登录
- 显示测试账号信息
- 登录后重定向到首页

### 个人中心 (/profile)
- 显示用户信息和头像
- 显示账户角色和权限
- 管理员可以快速访问管理功能

### 分类管理 (/categories) - 仅管理员
- 查看所有分类
- 创建新分类
- 编辑现有分类
- 删除分类

### 创建模型 (/models/create) - 仅管理员
- 填写模型基本信息
- 上传多张图片
- 添加技术规格参数
- 选择所属分类

### 模型详情 (/models/[id])
- 图片画廊浏览
- 完整的技术规格展示
- 下载和收藏功能

## 下一步开发建议

1. **后端集成**
   - 连接真实数据库（推荐 PostgreSQL 或 MongoDB）
   - 实现 API 路由用于 CRUD 操作
   - 添加文件上传功能（使用 Cloudinary 或 AWS S3）

2. **认证增强**
   - 集成 NextAuth.js 进行真实认证
   - 添加注册功能
   - 实现密码重置

3. **功能扩展**
   - 添加评论和评分系统
   - 实现用户收藏功能
   - 添加模型下载计数
   - 实现高级搜索和筛选

4. **优化**
   - 添加服务端渲染（SSR）支持
   - 实现分页和无限滚动
   - 优化图片加载
   - 添加加载状态和骨架屏

## License

MIT
