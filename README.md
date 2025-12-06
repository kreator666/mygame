# MyGame - Cocos Creator 网页游戏项目

这是一个基于 Cocos Creator 3.8.0 的网页游戏项目。

## 项目结构

```
mygame/
├── assets/              # 游戏资源目录
│   ├── scenes/         # 场景文件
│   │   └── Game.fire   # 主游戏场景
│   └── scripts/        # 脚本文件
│       ├── GameController.ts  # 游戏主控制器
│       └── Player.ts          # 玩家控制器
├── settings/            # 项目设置
│   ├── builder.json    # 构建配置
│   └── packages.json   # 包管理配置
├── project.json        # 项目配置文件
├── tsconfig.json       # TypeScript 配置
├── package.json        # Node.js 包配置
└── README.md          # 项目说明文档
```

## 环境要求

### 编辑器版本（完整功能）
- **Cocos Creator**: 3.8.0 或更高版本
- **Node.js**: 14.0 或更高版本（可选，用于包管理）

### Web 版本（无需编辑器）✨
- **浏览器**: 现代浏览器（Chrome、Firefox、Safari、Edge）
- **可选**: Python 或 Node.js（用于本地服务器）

## 快速开始

### 方式一：Web 版本（无需安装 Cocos Creator）⭐ 推荐

如果你想快速运行游戏而不安装 Cocos Creator，可以使用 `web-version` 目录中的版本：

1. **直接打开**（最简单）：
   ```bash
   npm run web:open
   ```
   或直接双击 `web-version/index.html`

2. **使用本地服务器**（推荐）：
   ```bash
   npm run web:dev
   ```
   然后在浏览器中访问 `http://localhost:8000`

详细说明请查看 [web-version/README.md](web-version/README.md)

### 方式二：编辑器版本（完整功能）

### 1. 安装 Cocos Creator

1. 访问 [Cocos Creator 官网](https://www.cocos.com/creator) 下载并安装 Cocos Creator
2. 确保安装版本为 3.8.0 或更高

### 2. 打开项目（编辑器版本）

1. 启动 Cocos Creator
2. 点击"打开项目"
3. 选择本项目目录（`mygame`）
4. 等待项目加载完成

### 3. 运行项目（编辑器版本）

1. 在 Cocos Creator 编辑器中，点击顶部工具栏的"预览"按钮（或按 `Ctrl+P` / `Cmd+P`）
2. 游戏将在浏览器中打开并运行

### 4. 构建项目（编辑器版本）

1. 点击菜单栏：**项目** → **构建发布**
2. 选择 **Web Mobile** 平台
3. 配置构建选项
4. 点击"构建"按钮
5. 构建完成后，在 `build/web-mobile` 目录中找到构建产物

## 项目功能

### 已实现功能

- ✅ 基础场景设置（Canvas、Camera）
- ✅ 游戏控制器（分数管理、游戏状态）
- ✅ 玩家控制器（键盘输入、移动控制）

### 脚本说明

#### GameController.ts
游戏主控制器，负责：
- 分数管理
- 游戏状态控制
- UI 更新

#### Player.ts
玩家控制器，负责：
- 键盘输入处理（方向键或 WASD）
- 玩家移动逻辑

## 开发指南

### 添加新脚本

1. 在 `assets/scripts/` 目录下创建新的 TypeScript 文件
2. 使用 Cocos Creator 的组件装饰器：

```typescript
import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('YourComponent')
export class YourComponent extends Component {
    start() {
        // 初始化代码
    }
    
    update(deltaTime: number) {
        // 每帧更新代码
    }
}
```

### 添加新场景

1. 在 Cocos Creator 编辑器中创建新场景
2. 保存到 `assets/scenes/` 目录
3. 在 `project.json` 中更新 `start-scene` 字段（如需要）

### 资源管理

- 图片资源：放在 `assets/textures/` 目录
- 音频资源：放在 `assets/audio/` 目录
- 预制体：放在 `assets/prefabs/` 目录

## 构建部署

### Web 平台构建

1. 打开构建发布面板
2. 选择 **Web Mobile** 或 **Web Desktop**
3. 配置相关选项
4. 点击构建
5. 将 `build/web-mobile` 或 `build/web-desktop` 目录部署到 Web 服务器

### 注意事项

- 确保 Web 服务器支持正确的 MIME 类型
- 对于 HTTPS 部署，确保所有资源都通过 HTTPS 加载
- 建议使用现代浏览器（Chrome、Firefox、Safari、Edge）

## 常见问题

### Q: 一定要安装 Cocos Creator 才能运行吗？
A: **不一定！** 项目提供了两个版本：
- **Web 版本**（`web-version/`）：可以直接在浏览器中运行，无需安装任何软件
- **编辑器版本**（根目录）：需要 Cocos Creator 编辑器，但功能更完整

### Q: 项目无法打开？
A: 
- 如果使用编辑器版本，确保使用 Cocos Creator 3.8.0 或更高版本打开项目
- 如果使用 Web 版本，确保使用现代浏览器打开

### Q: 脚本编译错误？
A: 检查 TypeScript 配置，确保 `tsconfig.json` 配置正确。

### Q: 预览时无法运行？
A: 检查浏览器控制台错误信息，确保所有资源路径正确。

## 技术栈

### 编辑器版本
- **游戏引擎**: Cocos Creator 3.8.0
- **编程语言**: TypeScript
- **渲染管线**: Forward（前向渲染）

### Web 版本
- **技术**: 纯 JavaScript + Canvas API
- **特点**: 无需安装，直接运行

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 相关链接

- [Cocos Creator 官方文档](https://docs.cocos.com/creator/manual/zh/)
- [Cocos Creator API 参考](https://docs.cocos.com/creator/api/zh/)
- [Cocos 社区](https://forum.cocos.org/)

