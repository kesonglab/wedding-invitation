# wedding-invitation

中式婚礼请柬网页，单文件 HTML，开箱即用。

在线预览：`https://<你的用户名>.github.io/wedding-invitation/`（开启 GitHub Pages 后）

## 使用

1. Fork 或克隆本仓库
2. 图片说明：
   - `couple.png` 婚纱照抠图（透明底 + 白边贴纸效果，压在大囍字前面）
   - `boy.jpg` / `girl.jpg` 宝宝头像贴纸，用在邀请信息区的头像（`bride.jpg`/`groom.jpg` 存在时优先用它们）
3. 改文字：打开 `index.html`，搜索替换姓名、时间、地址
4. 改倒计时：搜索 `weddingTime`，改成你的婚期
5. 换婚纱照：用自己的照片重抠一张透明底 PNG 替换 `couple.png` 即可（任意抠图工具都行）

## 部署到 GitHub Pages

仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支选 `main` / 根目录，保存即可。

## 说明

- 纯静态，无依赖、无构建
- 字体走 Google Fonts（Caveat + 站酷快乐体），需联网
- 手机、平板、桌面自适应，尊重 `prefers-reduced-motion`

## License

[MIT](LICENSE)
