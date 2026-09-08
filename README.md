# wedding-invitation

中式婚礼请柬网页，单文件 HTML，开箱即用。

在线预览：`https://<你的用户名>.github.io/wedding-invitation/`（开启 GitHub Pages 后）

## 使用

1. Fork 或克隆本仓库
2. 把 4 张照片放进根目录（和 `index.html` 同级）：
   - `girl.jpg` 新娘童年照
   - `boy.jpg` 新郎童年照
   - `bride.jpg` 新娘头像（没有就自动用 girl.jpg）
   - `groom.jpg` 新郎头像（没有就自动用 boy.jpg）
3. 改文字：打开 `index.html`，搜索替换姓名、时间、地址
4. 改倒计时：搜索 `weddingTime`，改成你的婚期

## 部署到 GitHub Pages

仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支选 `main` / 根目录，保存即可。

## 说明

- 纯静态，无依赖、无构建
- 字体走 Google Fonts（Caveat + 站酷快乐体），需联网
- 手机、平板、桌面自适应，尊重 `prefers-reduced-motion`

## License

[MIT](LICENSE)
