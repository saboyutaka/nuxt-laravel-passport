# Nuxt.js with Laravel Passport, API

Nuxt.js と Laravel(Passport, API)を使って構築するアプリケーションのサンプル

## 構築方法
LaravelとNuxtそれぞれ別のターミナルで実行する

### Laravel
```
cd laravel
make build # 初回のみ実行
make serve
```

### Nuxt
```
cd nuxt
yarn install
yarn dev
```

## 実行手順
1. http://localhost:8000/register にてユーザーを登録する
2. http://localhost:3000/login にて 1 で作成したユーザーでログインする
