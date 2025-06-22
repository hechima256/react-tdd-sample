# React TDDサンプル

テスト駆動開発（TDD）の原則に基づいて構築されたReactアプリケーションのサンプルプロジェクトです。TypeScript、Vite、Fastify、およびAPI用モックとしてMSWを使用したモノレポ構成です。

## 使用技術

### フロントエンド

- React 19
- TypeScript
- Vite 6
- テスト用のVitest
- APIモック用のMSW（Mock Service Worker）
- Testing Library（React、Jest DOM、User Event）

### バックエンド

- Fastify 5
- TypeScript
- Swagger/OpenAPI
- CORS対応

### モノレポ管理

- Turborepo
- npm Workspaces
- 共有型定義パッケージ

### 開発ツール

- ESLintとPrettier（コード品質向上）
- TypeScript

## 前提条件

- Node.js（v18.20.5）
- npm（v10.8.2）

## プロジェクト構成

```
react-tdd-sample/
├── packages/
│   ├── frontend/          # Reactフロントエンドアプリケーション
│   │   ├── src/
│   │   │   ├── assets/    # 静的アセット
│   │   │   ├── mocks/     # MSWモックAPIセットアップとハンドラー
│   │   │   │   └── api/   # リソースごとに整理されたAPIモックハンドラー
│   │   │   └── test/      # テスト設定とユーティリティ
│   │   └── public/        # 静的ファイル
│   └── backend/           # FastifyバックエンドAPI
│       └── src/
│           └── index.ts   # サーバーエントリーポイント
├── shared/                # 共有型定義とユーティリティ
│   └── src/
│       └── types/         # 共有TypeScript型定義
├── turbo.json             # Turborepo設定
└── package.json           # ルートワークスペース設定
```

## 始め方

### インストール

リポジトリをクローンして依存関係をインストールします：

```bash
git clone <リポジトリのURL>
cd react-tdd-sample
npm install
```

### 開発

#### 全パッケージの開発サーバーを起動

```bash
npm run dev
```

これにより、フロントエンドとバックエンドの両方の開発サーバーが起動します：

- フロントエンド: [http://localhost:5173](http://localhost:5173)
- バックエンド: [http://localhost:3000](http://localhost:3000)

#### 個別パッケージの開発

```bash
# フロントエンドのみ
npm run dev --workspace=@react-tdd-sample/frontend

# バックエンドのみ
npm run dev --workspace=@react-tdd-sample/backend
```

### テスト

このプロジェクトではReact Testing Libraryと共にVitestを使用しています。利用可能なテストコマンド：

```bash
# 全パッケージのテストを実行
npm test

# ウォッチモードでテストを実行
npm run test:watch

# カバレッジレポート付きでテストを実行
npm run test:coverage

# 個別パッケージのテスト
npm test --workspace=@react-tdd-sample/frontend
npm test --workspace=@react-tdd-sample/backend
```

## 利用可能なスクリプト

### ルートレベル（全パッケージ）

- `npm run dev` - 全パッケージの開発サーバーを起動
- `npm run build` - 全パッケージの本番用ビルドを作成
- `npm run lint` - 全パッケージでESLintを実行
- `npm run preview` - フロントエンドの本番ビルドをローカルでプレビュー
- `npm test` - 全パッケージのテストを実行
- `npm run test:watch` - ウォッチモードでテストを実行
- `npm run test:coverage` - カバレッジレポート付きでテストを実行
- `npm run format` - 全パッケージでPrettierを実行
- `npm run format:check` - 全パッケージでコードフォーマットをチェック

### フロントエンド（packages/frontend）

- `npm run dev` - Vite開発サーバーを起動
- `npm run build` - TypeScriptビルド + Viteビルド
- `npm run preview` - 本番ビルドをプレビュー
- `npm test` - Vitestでテストを実行
- `npm run test:watch` - ウォッチモードでテストを実行
- `npm run test:coverage` - カバレッジレポート付きでテストを実行

### バックエンド（packages/backend）

- `npm run dev` - tsx watchで開発サーバーを起動
- `npm run build` - TypeScriptビルド
- `npm start` - 本番サーバーを起動
- `npm test` - Vitestでテストを実行
- `npm run test:watch` - ウォッチモードでテストを実行
- `npm run test:coverage` - カバレッジレポート付きでテストを実行

## TDDワークフロー

このプロジェクトはテスト駆動開発の原則に従っています：

1. 機能に対する失敗するテストを書く
2. テストに合格する最小限のコードを実装する
3. テストが通ることを確認しながらリファクタリングする

## モノレポの利点

- **共有型定義**: `shared`パッケージでフロントエンドとバックエンド間で型を共有
- **効率的なビルド**: Turborepoによるキャッシュと並列実行
- **統一された開発体験**: 一つのコマンドで全パッケージを管理
- **依存関係の最適化**: ワークスペース間での依存関係の効率的な管理

## ライセンス

詳細は[LICENSE](./LICENSE)ファイルを参照してください。
