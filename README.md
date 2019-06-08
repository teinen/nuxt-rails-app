# Nuxt.js + Rails application sample

## Versions

- Nuxt.js 2.8.1
- Rails 5.2.3
- Ruby 2.6.3
- Mysql 5.7.25

## Setup

```bash
# API
$ cd nuxt-rails-app
$ bundle install
$ bin/rails db:create
$ bin/rails s -p8080

# frontend
$ cd frontent/
$ npm run dev # you can access localhost:3000
```

# env

```bash
$ cd frontend/
$ touch .env
```

You have to add `GOOGLE_MAP_API_KEY` to `.env` file.

```
GOOGLE_MAP_API_KEY=*****************
```
