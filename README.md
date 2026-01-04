# TubeNote

YouTube動画にメモを残せるWebアプリです。

🌐 https://tubenote.jp

---

## デモ
![トップ画面](docs/images/top.png)

---

## 概要
学習用YouTube動画に対して、
「どこで・何を学んだか」をメモとして残せます。

---

## 主な機能
- ユーザー登録 / ログイン（Google OAuth）
- 動画登録
- 動画ごとのメモ投稿
- いいね機能

---

## 使用技術
- Frontend: Next.js / TypeScript / Tailwind CSS
- Backend: NestJS / Prisma
- DB: PostgreSQL
- Auth: JWT / Google OAuth

---

## 工夫した点
- 認証処理をJWTで実装
- フロントとバックを分離した構成
- 実務を意識したAPI設計

---

## 今後の改善予定
- コメント検索機能
- 通知機能
