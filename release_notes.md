# v1.3.0 — 2025-11-19

## 简介

本次发布将项目开源并新增一个本地可用的可视化编辑器 `editor.html`，便于交互式创建/编辑 `locations` 数据、导入示例/JSON、生成并下载 JSON 文件，以及即时预览地图效果。完整源码与示例数据已发布于仓库：`https://github.com/Jiosanity/XiaoTen-FootprintMap`。

## 亮点

- **开源发布**：完整工程已托管到 GitHub，包含所有 JS/CSS、示例数据与文档，欢迎社区复用与贡献。
- **新增编辑器**：加入本地可用的可视化编辑器 `editor.html`，降低数据编写与调试门槛。
- **移动端友好**：若干移动端修复与优化（按钮换行对齐、日期行一行展示、图片查看器与轮播优化等）。

## 新增（Added）

- **editor.html**：本地可视化编辑器，功能包括：
  - 地图拾取或手动输入经纬度；
  - 添加/编辑地点（名称、描述、日期、分类、图片、链接、标记颜色）；
  - 导入 JSON 文件或一键导入仓库内示例数据：`static/data/footprints.example.json`；
  - 生成并下载符合格式的 JSON，支持复制到剪贴板；
  - 预览区即时渲染 FootprintMap（包含聚类、筛选、主题同步）。
- **示例数据扩充**：`static/data/footprints.example.json` 示例数据已扩展，便于快速导入查看效果。
- **文档与示例**：在 `index.md`、`README.md` 和 `CHANGELOG.md` 中加入编辑器与开源说明。

## 变更（Changed）

- **预览空状态文案统一**：初始渲染和“刷新预览”后的提示统一为“暂无足迹数据，请添加地点、导入 JSON 文件或导入示例数据，然后点击\"刷新预览\"。”
- **界面（Editor）小改进**：
  - 将“导出 JSON”改为“JSON代码”，保持生成并下载的行为不变；
  - 将“导入示例数据”按钮置于“按日期排序”按钮之后，样式调整为绿色（`#10b981`），并优化按钮换行时的左对齐行为；
  - 把“刷新预览”按钮放入预览标题行，保证在一行内显示；
  - 调整日期行与清除按钮在移动端的对齐与高度。
- **UI/UX 修复**：照片查看器关闭按钮居中、轮播滚动逻辑改为基于 slide.offsetLeft 避免移动端留白。

## 修复（Fixed）

- 修复照片轮播在部分移动设备上出现的空白/错位问题。
- 防止重复添加相同图片 URL 的重复项（编辑器内逻辑）。
- 修正 `#jsonOutput` 在空/满内容时高度不一致的问题，移除内联 min-height，使用样式控制。

## 升级与本地预览

- 本次发布新增 `editor.html`，在仓库根目录下，使用本地静态服务器即可打开并编辑：

  ```powershell
  python -m http.server 8000
  ```

  打开浏览器访问：`http://127.0.0.1:8000/editor.html`

- 编辑器内支持：
  - 一键导入仓库示例：`static/data/footprints.example.json`
  - 导出/下载 JSON 文件用于站点 `static/data/footprints.json` 的替换或提交。

## 兼容与注意事项

- 本项目基于高德 Web JS SDK（需提供 `amapKey`），短代码与编辑器均需要有效 Key 才能在预览里加载地图图块与拾点功能。
- 编辑器更改的数据格式与现有 `footprints.json` 格式兼容（`locations` 数组），请在替换生产数据前备份旧文件。

## 快速引用

- 仓库：`https://github.com/Jiosanity/XiaoTen-FootprintMap`
- 编辑器路径：`editor.html`
- 示例数据：`static/data/footprints.example.json`
- 主要脚本：`static/js/footprintmap.js`
- 主要样式：`static/css/footprintmap.css`
