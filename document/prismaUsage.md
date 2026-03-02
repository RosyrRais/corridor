使用 prisma 来做数据库版本控制

## 安装方式

### prisma 安装

```
# 1. 安装 Prisma 依赖
pnpm install prisma @prisma/client --save-dev

# 2. 初始化 Prisma (这会创建一个 prisma 文件夹和 .env 文件)
npx prisma init
```

### postgres 安装

```
brew install postgresql@16

// 创建数据库
createdb corridor
```

## 启动方式

```
brew services start postgresql@16
```
