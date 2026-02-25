# SpecKit ドキュメント（日本語）

このディレクトリには、ProjectELU で使用されている **SpecKit** に関する説明資料と日本語翻訳が含まれています。

**作成日**: 2026-02-14

---

## 📚 ファイル一覧

### メインドキュメント

- **[speckit-overview.md](./speckit-overview.md)** - SpecKit の概要と全体構造の解説
  - SpecKit とは何か
  - ディレクトリ構造
  - 主要コンポーネント
  - ワークフロー
  - スキルコマンド
  - Constitution（憲章）

### テンプレート翻訳

- **[spec-template-ja.md](./spec-template-ja.md)** - 機能仕様テンプレートの日本語版
  - ユーザーストーリーと優先度
  - 受け入れ基準（Given-When-Then）
  - 機能要件
  - 成功基準

- **[plan-template-ja.md](./plan-template-ja.md)** - 実装計画テンプレートの日本語版
  - 技術スタック選定
  - プロジェクト構造
  - Constitution チェック
  - 複雑性の追跡

- **[tasks-template-ja.md](./tasks-template-ja.md)** - タスクリストテンプレートの日本語版
  - フェーズ分割（Setup → Foundational → User Stories → Polish）
  - タスク ID と依存関係
  - 並列実行可能なタスク
  - 実装戦略

- **[checklist-template-ja.md](./checklist-template-ja.md)** - チェックリストテンプレートの日本語版
  - カスタムチェックリスト生成
  - カテゴリ別項目
  - チェックボックス形式

- **[agent-file-template-ja.md](./agent-file-template-ja.md)** - AI エージェント設定テンプレートの日本語版
  - アクティブな技術スタック
  - プロジェクト構造
  - コマンド（テスト、ビルド、lint）
  - 最近の変更履歴

### Constitution（憲章）

- **[constitution-ja.md](./constitution-ja.md)** - プロジェクト憲章の日本語版
  - コア原則（ドキュメントファースト、モジュラーアーキテクチャ、テストによる品質保証）
  - 開発基準
  - 品質ゲート
  - ガバナンスとバージョン管理

### スクリプトガイド

- **[scripts-guide-ja.md](./scripts-guide-ja.md)** - Bash スクリプトの詳細ガイド
  - common.sh - 共通関数ライブラリ
  - create-new-feature.sh - 新規機能作成
  - setup-plan.sh - 計画セットアップ
  - check-prerequisites.sh - 前提条件チェック
  - update-agent-context.sh - AI エージェントコンテキスト更新

---

## 🎯 このドキュメントの目的

`.specify` ディレクトリには、GitHub の SpecKit プロジェクトからインストールされた**汎用的な仕様駆動開発ツール**が含まれています。このレポートは、SpecKit 固有の機能と使い方を理解するために作成されました。

### 対象外（このレポートに含まれていない内容）

- **ProjectELU 独自の仕様や計画**
  - `specs/001-self-evolving-agent/` などのプロジェクト固有のドキュメント
  - 実装されたコード（`src/`、`backend/`、`frontend/` など）
- **Claude Code の基本機能**
  - スキルシステム全般
  - MCP サーバー
  - その他の Claude Code 固有の機能

### 対象（このレポートに含まれている内容）

- **SpecKit のテンプレートシステム**
- **SpecKit のワークフロー**
- **SpecKit のスクリプト**
- **Constitution（憲章）による開発原則**

---

## 🚀 推奨される読み方

### 初めて SpecKit に触れる方

1. **[speckit-overview.md](./speckit-overview.md)** を読んで全体像を把握
2. **[constitution-ja.md](./constitution-ja.md)** で開発原則を理解
3. **[scripts-guide-ja.md](./scripts-guide-ja.md)** でスクリプトの使い方を学ぶ

### テンプレートを使いたい方

1. **[spec-template-ja.md](./spec-template-ja.md)** で仕様書の書き方を確認
2. **[plan-template-ja.md](./plan-template-ja.md)** で計画書の構造を理解
3. **[tasks-template-ja.md](./tasks-template-ja.md)** でタスク分解の方法を学ぶ

### スクリプトを活用したい方

1. **[scripts-guide-ja.md](./scripts-guide-ja.md)** を読む
2. 各スクリプトの「使用例」セクションを参照
3. ワークフロー全体の例を確認

---

## 📖 SpecKit ワークフロー（クイックリファレンス）

```
1. 機能作成
   create-new-feature.sh "機能説明"
   ↓
2. 仕様作成
   /speckit.specify
   ↓
3. 要件明確化（必要に応じて）
   /speckit.clarify
   ↓
4. 実装計画
   setup-plan.sh
   /speckit.plan
   ↓
5. コンテキスト更新
   update-agent-context.sh
   ↓
6. タスク生成
   /speckit.tasks
   ↓
7. 実装実行
   /speckit.implement
   ↓
8. 分析とレビュー
   /speckit.analyze
```

---

## 🔗 関連リソース

- **元の SpecKit リポジトリ**: [GitHub - anthropics/speckit](https://github.com/anthropics/speckit)
- **Claude Code ドキュメント**: Claude Code の公式ドキュメントを参照
- **プロジェクトの CLAUDE.md**: ProjectELU の開発ガイドライン

---

## ⚠️ 注意事項

- このレポートは、`.specify` ディレクトリの内容を**2026-02-14 時点**でキャプチャしたものです
- SpecKit が更新された場合、このレポートの内容と実際のファイルが異なる可能性があります
- 実際の使用時は、`.specify/` ディレクトリ内の最新ファイルを参照してください

---

## 📝 更新履歴

- **2026-02-14**: 初版作成
  - SpecKit 概要ガイド
  - 全テンプレートの日本語翻訳
  - Constitution の翻訳
  - スクリプトガイド

---

**作成者**: Claude Sonnet 4.5
**目的**: ProjectELU における SpecKit の理解促進
