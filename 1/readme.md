# Протокол Шамира

Безопасно обмениваемся сообщениями без обмена ключами шифрования

Язык программирования `javaScript`

Ииспользуем `xor`

Запускать командой `node 1.js`

```
Пример работы:
Enter Alice's password: qwe
Input a message which will be send: asd
E(a, M): 0

Enter Bob's password: zxc
E(b, E(a, M)): 0

D(a, E(b, E(a, M))): 0

D(b, D(a, E(b, E(a, M)))): 0

So, now we can compare decryptedMessage = 0 and initialMessage = asd
```
