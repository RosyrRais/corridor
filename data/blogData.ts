import type { BlogPost } from '@/types';

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: '3D建模的基础知识：从零开始',
    excerpt: '学习3D建模的基础概念，了解多边形、材质和纹理的基本原理，为你的建模之路打下坚实基础。',
    content: `
# 3D建模的基础知识：从零开始

## 什么是3D建模？

3D建模是使用专业软件创建三维物体数字表示的过程。这些模型可以用于游戏、动画、建筑可视化等多个领域。

## 核心概念

### 多边形（Polygons）
多边形是构成3D模型的基本单位。大多数模型由三角形或四边形组成。

### 材质（Materials）
材质定义了物体表面的属性，如颜色、光泽度、透明度等。

### 纹理（Textures）
纹理是应用到模型表面的图像，可以增加细节和真实感。

## 常用软件

- **Blender**: 免费开源的全能3D创作套件
- **Maya**: 业界标准的专业建模软件
- **3ds Max**: 广泛用于游戏和建筑可视化
- **Cinema 4D**: 易于学习，适合运动图形

## 学习建议

1. 从简单的几何体开始练习
2. 掌握基本的建模工具和快捷键
3. 学习拓扑结构的重要性
4. 多观察现实世界的物体
5. 持续练习和创作

记住，3D建模是一个需要耐心和练习的技能。每个专业建模师都是从基础开始的！
    `,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    author: {
      name: 'Admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    },
    tags: ['3D建模', '教程', '入门'],
    createdAt: new Date('2024-02-01').toISOString(),
    readTime: '5 分钟',
  },
  {
    id: '2',
    title: 'PBR材质工作流程详解',
    excerpt: '深入了解基于物理的渲染（PBR）工作流程，创建更真实的材质效果。',
    content: `
# PBR材质工作流程详解

## 什么是PBR？

PBR（Physically Based Rendering）是一种基于物理规律的渲染方法，能够在不同光照条件下呈现一致的材质效果。

## PBR的核心贴图

### Albedo（反照率）
定义物体的基础颜色，不包含任何光照信息。

### Metallic（金属度）
定义表面是金属还是非金属。通常是黑白贴图，黑色表示非金属，白色表示金属。

### Roughness（粗糙度）
定义表面的光滑或粗糙程度。影响反射的锐利程度。

### Normal Map（法线贴图）
用于添加表面细节，而不增加模型的多边形数量。

### AO（环境光遮蔽）
模拟光线在缝隙和凹陷处的衰减效果。

## 最佳实践

1. 使用真实世界的参考值
2. 保持 Albedo 贴图的纯净
3. 合理使用 Roughness 变化
4. 避免纯黑和纯白的极端值
5. 测试不同光照环境下的效果

PBR工作流程是现代游戏和实时渲染的标准，掌握它将大大提升你的作品质量！
    `,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    author: {
      name: 'Admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    },
    tags: ['材质', 'PBR', '渲染'],
    createdAt: new Date('2024-02-10').toISOString(),
    readTime: '8 分钟',
  },
  {
    id: '3',
    title: '优化3D模型性能的10个技巧',
    excerpt: '学习如何优化你的3D模型，在保持视觉质量的同时提升渲染性能。',
    content: `
# 优化3D模型性能的10个技巧

在游戏开发和实时应用中，性能优化至关重要。以下是10个实用技巧：

## 1. 控制多边形数量
使用合适的细分级别，避免过度细分。

## 2. 使用LOD系统
为不同距离创建不同精度的模型版本。

## 3. 优化拓扑结构
保持四边形为主的拓扑，避免多余的边。

## 4. 合并材质
减少材质数量可以降低绘制调用。

## 5. 压缩纹理
使用合适的纹理格式和分辨率。

## 6. 烘焙光照
对静态物体预计算光照信息。

## 7. 使用实例化
对重复的物体使用实例化渲染。

## 8. 剔除不可见面
移除永远不会被看到的面。

## 9. 合理使用法线贴图
用法线贴图代替高模细节。

## 10. 优化骨骼数量
对角色模型控制骨骼数量和权重。

记住，优化是一个平衡的艺术，要在性能和质量之间找到最佳平衡点。
    `,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
    author: {
      name: 'Admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    },
    tags: ['性能优化', '最佳实践', '游戏开发'],
    createdAt: new Date('2024-02-15').toISOString(),
    readTime: '6 分钟',
  },
  {
    id: '4',
    title: 'Blender 2024新功能亮点',
    excerpt: '探索Blender最新版本中令人兴奋的新功能和改进。',
    content: `
# Blender 2024新功能亮点

Blender继续保持快速迭代，2024版本带来了众多实用功能。

## 主要更新

### 1. 几何节点增强
新增了更多程序化建模节点，提升创作灵活性。

### 2. 实时渲染改进
Eevee Next渲染器性能大幅提升。

### 3. UV编辑优化
全新的UV编辑工具，提高贴图制作效率。

### 4. 雕刻工具升级
更精确的雕刻笔刷和更好的性能。

### 5. 动画系统改进
改进的动画编辑器和姿态库功能。

## 为什么选择Blender？

- 完全免费开源
- 功能强大完整
- 活跃的社区支持
- 持续快速的更新

如果你还没有尝试Blender，现在是最好的时机！
    `,
    coverImage: 'https://images.unsplash.com/photo-1618609377864-68609b857e90?w=800',
    author: {
      name: 'Admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    },
    tags: ['Blender', '软件', '新功能'],
    createdAt: new Date('2024-02-20').toISOString(),
    readTime: '4 分钟',
  },
  {
    id: '5',
    title: '游戏资产创建完整流程',
    excerpt: '从概念设计到最终导入游戏引擎，了解游戏资产创建的完整工作流程。',
    content: `
# 游戏资产创建完整流程

创建高质量的游戏资产需要遵循系统化的工作流程。

## 工作流程阶段

### 1. 概念设计
- 收集参考资料
- 绘制概念草图
- 确定风格和比例

### 2. 高模制作
- 使用雕刻工具创建高精度模型
- 添加所有细节
- 不必考虑多边形数量

### 3. 低模制作
- 创建游戏中实际使用的低模
- 保持良好的拓扑结构
- 控制多边形数量

### 4. UV展开
- 展开模型的UV坐标
- 优化纹理空间利用率
- 确保接缝位置合理

### 5. 烘焙贴图
- 从高模烘焙法线贴图
- 烘焙AO和曲率贴图
- 生成ID贴图用于材质分层

### 6. 纹理绘制
- 使用Substance Painter等工具
- 创建PBR材质
- 添加磨损和细节

### 7. 导入引擎
- 导出为合适的格式
- 设置材质和着色器
- 测试和优化性能

## 工具推荐

- 高模雕刻：ZBrush, Blender
- 低模制作：Maya, Blender, 3ds Max
- 纹理绘制：Substance Painter, Photoshop
- 烘焙：Marmoset Toolbag, xNormal

掌握这个流程，你就能创建专业级的游戏资产了！
    `,
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
    author: {
      name: 'Admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    },
    tags: ['游戏开发', '工作流程', '资产制作'],
    createdAt: new Date('2024-02-25').toISOString(),
    readTime: '10 分钟',
  },
];
