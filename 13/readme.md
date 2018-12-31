# Меняем логику программы в зависимости от нагруженности системы

Мы считаем факториал 5, и если загрузка больше 2 -
мы перестаем это делать и останавливаем работу программы

Используем `python27`

Запускать с помощью команды `python 13.py`

```
Пример работы программы:
('Computer load is ', 0.4)
('factorial value: ', 1)
('Computer load is ', 0.8)
('factorial value: ', 2)
('Computer load is ', 0.8)
('factorial value: ', 6)
('Computer load is ', 2.7)
('factorial value: ', 24)
('Computer load too high: ', 2.3)
('Current factorial value is ', 24)
Sorry, but your program will be stopped

_________


('Computer load is ', 1.2)
('factorial value: ', 1)
('Computer load is ', 0.8)
('factorial value: ', 2)
('Computer load is ', 1.2)
('factorial value: ', 6)
('Computer load is ', 1.6)
('factorial value: ', 24)
('Computer load is ', 0.8)
('factorial value: ', 120)
```
