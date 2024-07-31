## docker

### 事前準備

```bash
# {プロジェクト}/docker に移動
cd ./docker

# env を作成
cp env-example .env

# createdb.sql を作成
cp mysql/docker-entrypoint-initdb.d/createdb.sql.example mysql/docker-entrypoint-initdb.d/createdb.sql
```

### 基本コマンド

ビルド、開始、停止

```bash
# ビルド
docker-compose build

# 開始
docker-compose up -d

# 停止
docker-compose down
```

停止→ビルド→開始 を一括操作

```bash
docker-compose down && docker-compose build && docker-compose up -d
```

### データベース初期化

migration 実行(`up -d` 必須)

```bash
# {プロジェクト}/app に移動
cd ./app 

# appのenv を作成とseeder実行
cp .env.local .env
composer install && php artisan migrate:fresh --seed
```

### URL 

docker 開始 すると todo の画面と phpMyAdmin が利用できます

- Top画面 … http://127.0.0.1/
- phpMyAdmin … http://127.0.0.1:8080/

### SchemaSpy ER生成
ER生成
```bash
docker-compose run --rm schemaspy
```

./schemaspy/output にERが作成される。
index.htmlを開くとERを確認可能

### Tips

稼働中のコンテナの確認
```bash
docker ps
```

稼働中のコンテナをすべて停止(down してもコンテナが稼働している場合)
```bash
docker ps -aq | xargs docker rm -f
```
