# wedding-invitation

中式婚礼请柬网页，单文件 HTML，开箱即用。

在线预览：`https://<你的用户名>.github.io/wedding-invitation/`（开启 GitHub Pages 后）

## 使用

1. Fork 或克隆本仓库
2. 所有图片都在 `images/` 目录，想换成自己的：
   - `couple.webp` / `couple.png` 婚纱照抠图（透明底，压在囍字前面；webp 优先，png 兜底）
   - `baby-boy.png` / `baby-girl.jpg` 宝宝时期贴纸头像
   - `welcome.png` / `to-our-wedding.png` / `invitation.png` / `xi.png` 手绘字与囍
   - 其余 `firework-*` / `tulips` / `flower` / `butterfly` / `heart-*` / `dots` / `gold-stroke` 是装饰小元素
3. 改文字：打开 `index.html`，搜索替换姓名、时间、地址
4. 改倒计时：打开 `main.js`，搜索 `weddingTime`，改成你的婚期
5. 换婚纱照：把自己的照片重抠一张透明底 PNG，压成 `couple.webp`，放进 `images/` 替换即可

## 部署到 GitHub Pages

仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支选 `main` / 根目录，保存即可。

## 说明

- 纯静态，无依赖、无构建
- 字体走 Google Fonts（Caveat + 站酷快乐体），需联网
- 手机、平板、桌面自适应，尊重 `prefers-reduced-motion`

## License

[MIT](LICENSE)
