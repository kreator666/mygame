# Web 版本 - 无需 Cocos Creator 编辑器

这是一个可以直接在浏览器中运行的版本，**不需要安装 Cocos Creator 编辑器**。

## 使用方法

### 方法 1: 直接打开（最简单）⭐

1. 双击 `index.html` 文件
2. 游戏将在默认浏览器中打开并运行
3. **无需任何服务器或安装！**

### 方法 2: 使用本地服务器（推荐）

#### 使用 Python（如果已安装）

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中访问：`http://localhost:8000`

#### 使用 Node.js（如果已安装）

```bash
# 安装 http-server（如果未安装）
npm install -g http-server

# 运行服务器
http-server -p 8000
```

然后在浏览器中访问：`http://localhost:8000`

#### 使用 VS Code Live Server

1. 在 VS Code 中安装 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

## 游戏操作

- **移动**: 使用 `WASD` 或 `方向键` 控制绿色圆形移动
- **重新开始**: 游戏结束后按 `R` 键

## 说明

这个版本是一个简化实现，使用纯 JavaScript 和 Canvas API，**完全独立运行，不依赖任何外部库或服务器**。

- ✅ 可以直接双击打开运行
- ✅ 不需要安装任何软件
- ✅ 不需要启动服务器
- ✅ 所有代码内联在 HTML 中，避免模块加载问题

如果需要完整的 Cocos Creator 功能（如场景编辑器、资源管理、物理引擎等），请使用主项目目录中的编辑器版本。

## 与编辑器版本的区别

| 特性 | Web 版本 | 编辑器版本 |
|------|---------|-----------|
| 需要安装 Cocos Creator | ❌ | ✅ |
| 场景编辑器 | ❌ | ✅ |
| 资源管理 | ❌ | ✅ |
| 物理引擎 | ❌ | ✅ |
| 直接运行 | ✅ | ❌ |
| 快速测试 | ✅ | ❌ |

