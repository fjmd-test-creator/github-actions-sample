# GitHub Actions Sample

このリポジトリは、GitHub Actionsの検証用サンプルです。

## 検証内容

コードをPushまたはPull Request作成した際に、自動でテストを実行します。

## 使用技術

- GitHub
- GitHub Actions
- Node.js
- Jest

## GitHub Actionsで実行する処理

1. ソースコードを取得
2. Node.jsをセットアップ
3. 依存関係をインストール
4. テストを実行

## 確認ポイント

- Push時に自動実行されること
- Pull Request時に自動実行されること
- テスト成功時に緑のチェックが表示されること
- テスト失敗時に赤のエラーが表示されること
