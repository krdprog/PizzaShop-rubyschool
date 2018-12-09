# PizzaShop-rubyschool
Pizza Shop (rubyschool project). Ruby, Sinatra, ActiveRecord, JS, localStorage.

Учебный проект на Ruby/Sinatra для разбора как работает Sinatra и что можно улучшить с помощью Rails.

## Start project

1. Install gems:

```bash
bundle install
```

2. Migrate:

```bash
rake db:migrate
```

3. Run Sinatra application:

```bash
ruby app.rb
```

4. Open in your browser: http://localhost:4567/

## Минусы созданного PizzaShop (разбор после создания):

- модели из app.rb надо вынести в отдельный каталог
- много несвязанных между собой get, post в одном файле
- вспомогательный метод (хелпер) в этом же app.rb
- представления не в подкаталогах (как в рейлс)
- бардак с url
- в js дублирование кода
- нет тестов (в рейлс для всего существуют тесты)