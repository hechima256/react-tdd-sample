# React TDDサンプル

テスト駆動開発（TDD）の原則に基づいて構築されたReactアプリケーションのサンプルプロジェクトです。TypeScript、Vite、およびAPI用モックとしてMSWを使用しています。

## 使用技術

- React 19
- TypeScript
- Vite 6
- テスト用のVitest
- APIモック用のMSW（Mock Service Worker）
- コード品質向上のためのESLintとPrettier
- Testing Library（React、Jest DOM、User Event）

## 前提条件

- Node.js（v18.20.5）
- npmまたはyarn

## 始め方

### インストール

リポジトリをクローンして依存関係をインストールします：

```bash
git clone <リポジトリのURL>
cd react-tdd-sample
npm install
```

### 開発

開発サーバーを起動：

```bash
npm run dev
```

これにより、Vite開発サーバーが [http://localhost:5173](http://localhost:5173) で起動します。

### テスト

このプロジェクトではReact Testing Libraryと共にVitestを使用しています。利用可能なテストコマンド：

```bash
# テストを実行
npm test

# ウォッチモードでテストを実行
npm run test:watch

# カバレッジレポート付きでテストを実行
npm run test:coverage
```

## プロジェクト構成

```
/src
  /assets - 静的アセット
  /mocks - MSWモックAPIセットアップとハンドラー
    /api - リソースごとに整理されたAPIモックハンドラー
  /test - テスト設定とユーティリティ
  /types - TypeScript型定義
```

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - 本番用ビルドを作成
- `npm run lint` - ESLintを実行
- `npm run preview` - 本番ビルドをローカルでプレビュー
- `npm test` - テストを実行
- `npm run test:watch` - ウォッチモードでテストを実行
- `npm run test:coverage` - カバレッジレポート付きでテストを実行
- `npm run format` - Prettierでコードをフォーマット
- `npm run format:check` - コードフォーマットをチェック

## TDDワークフロー

このプロジェクトはテスト駆動開発の原則に従っています：

1. 機能に対する失敗するテストを書く
2. テストに合格する最小限のコードを実装する
3. テストが通ることを確認しながらリファクタリングする

## ライセンス

詳細は[LICENSE](./LICENSE)ファイルを参照してください。
