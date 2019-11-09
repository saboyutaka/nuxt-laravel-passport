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

## 画面遷移

### TOP(Nuxt)
<img width="419" alt="nuxt" src="https://user-images.githubusercontent.com/1701108/68524384-a2d9e780-0309-11ea-9d25-35807fa4eb02.png">

### Login(Nuxt)
<img width="415" alt="nuxt" src="https://user-images.githubusercontent.com/1701108/68524388-acfbe600-0309-11ea-8c44-5f163effa97f.png">

### Login(Laravel)
<img width="1097" alt="Laravel" src="https://user-images.githubusercontent.com/1701108/68524397-c9981e00-0309-11ea-9126-5efc8ff35167.png">

### Authorize(Laravel) /oauth/authorize 
<img width="594" alt="Laravel_-_Authorization" src="https://user-images.githubusercontent.com/1701108/68524424-11b74080-030a-11ea-89e7-c3093f0d334e.png">

### Callback(Nuxt)
<img width="595" alt="Fullscreen_2019_11_09_16_01" src="https://user-images.githubusercontent.com/1701108/68524442-4e833780-030a-11ea-99a7-13a7dcc953f9.png">

### Home(Nuxt)
<img width="592" alt="nuxt" src="https://user-images.githubusercontent.com/1701108/68524448-5e028080-030a-11ea-88c1-8377ba527f46.png">
