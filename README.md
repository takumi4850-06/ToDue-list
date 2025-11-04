# ToDue-list

## 開発環境

### 開発サーバーの起動手順

（初回/表示された場合のみ）
VSCodeの右下に表示される「推奨拡張機能をインストールしますか？」で「はい」を選択

1. 依存関係をインストール
```bash
npm install
```

2. 開発サーバーを起動
```bash
npm start
```

### 便利なコマンド

- `npm run format` - コードの自動フォーマット
- `npm run format:check` - フォーマットチェック
- `npm run lint` - ESLintでコードチェック
- `npm run lint:fix` - ESLintで修正可能なエラーを自動修正

## プロジェクト構成

```
ToDue-list/
├── public/                 # 静的ファイル
├── src/                    # ソースコード
│   ├── components/         # コンポーネント
│   ├── pages/              # 各ページ
│   ├── styles/             # スタイルシート
│   ├── hooks/              # カスタムフック
│   ├── App.js              # ルーティング設定
│   └── index.js            # エントリーポイント
├── package.json            # プロジェクト設定と依存関係
└── README.md               # プロジェクト説明
```
