# Cocos Creator 命令行构建指南

如果你已经安装了 Cocos Creator，可以使用命令行工具进行构建，**无需打开编辑器**。

## 前提条件

1. 已安装 Cocos Creator 3.8.0 或更高版本
2. Cocos Creator 的安装路径已添加到系统 PATH（通常安装时会自动添加）

## 查找 Cocos Creator 命令行工具

Cocos Creator 的命令行工具通常位于安装目录下：

- **Windows**: `CocosCreator安装目录/CocosCreator.exe`
- **macOS**: `/Applications/CocosCreator/CocosCreator.app/Contents/MacOS/CocosCreator`
- **Linux**: `CocosCreator安装目录/CocosCreator`

## 命令行构建

### 基本语法

```bash
CocosCreator --path <项目路径> --build <构建配置路径>
```

### 示例

#### Windows

```bash
# 使用完整路径
"C:\Program Files\CocosCreator\CocosCreator.exe" --path . --build "settings/builder.json"

# 如果已添加到 PATH
CocosCreator --path . --build "settings/builder.json"
```

#### macOS / Linux

```bash
# 使用完整路径
/Applications/CocosCreator/CocosCreator.app/Contents/MacOS/CocosCreator --path . --build "settings/builder.json"

# 如果已添加到 PATH
CocosCreator --path . --build "settings/builder.json"
```

## 构建配置

构建配置在 `settings/builder.json` 文件中。你可以修改以下关键设置：

- `path`: 构建输出路径（如 `web-mobile`）
- `title`: 游戏标题
- `startScene`: 起始场景
- `debug`: 是否开启调试模式

## 自动化脚本

### Windows (build.bat)

创建 `build.bat` 文件：

```batch
@echo off
echo 正在构建项目...
CocosCreator --path . --build "settings/builder.json"
echo 构建完成！
pause
```

### macOS / Linux (build.sh)

创建 `build.sh` 文件：

```bash
#!/bin/bash
echo "正在构建项目..."
CocosCreator --path . --build "settings/builder.json"
echo "构建完成！"
```

然后添加执行权限：

```bash
chmod +x build.sh
```

## 其他命令行选项

```bash
# 查看帮助
CocosCreator --help

# 指定项目路径
CocosCreator --path /path/to/project

# 执行构建
CocosCreator --path . --build "settings/builder.json"

# 打开项目（在编辑器中）
CocosCreator --path .
```

## 注意事项

1. **首次构建**：可能需要先打开编辑器一次，让 Cocos Creator 初始化项目
2. **场景文件**：`.fire` 场景文件需要编辑器来编辑，但可以通过命令行构建
3. **资源导入**：某些资源可能需要编辑器来导入和处理

## 与编辑器版本的区别

| 操作 | 编辑器 | 命令行 |
|------|--------|--------|
| 编辑场景 | ✅ | ❌ |
| 编辑资源 | ✅ | ❌ |
| 预览游戏 | ✅ | ❌ |
| 构建项目 | ✅ | ✅ |
| 自动化构建 | ❌ | ✅ |
| CI/CD 集成 | ❌ | ✅ |

## 推荐工作流程

1. **开发阶段**：使用编辑器进行场景编辑、资源管理和预览
2. **构建阶段**：使用命令行工具进行自动化构建和 CI/CD 集成
3. **快速测试**：使用 `web-version` 目录中的纯 Web 版本

