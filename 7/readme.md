# Безопасная интернет-покупка

Нужно продать товар, не указывая своего имени

Для этого:
1. У каждого товара берем хэш

2. Информацию про покупателя используем как соль

3. Магазин имеет БД с таблицей всех хешей

Используем `javaScript`

Запускать с помощью команды `node 7.js`

```
Пример работы программы:
Enter a product's name: milk
Enter a salt: chris
Encrypted with md5 algorithm: 2b634b79b53f02de020ad7ac7ae2f5f9dd052a5a6d0cd70d84b10332718699a8
```