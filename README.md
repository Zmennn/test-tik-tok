В работе реализованна следующая логика:

1) Запуск видео при вхождении во вьюпорт на 90%
2) Останов видео при выходе с вьпорта на 10%
3) Останов и возобновление видео,которое находится во вьюпорте, кликом по нему
4) Во время ожидания ответа появляется спиннер
5) Клик в зону аватарки и имени автора включает страницу автора 
6) Галерею с работами автора на данный момент я не понимаю как создать, возможно что-то не так с API, вот ответ сервера,
    скопированный прямо у них на сайте
    {4 items
     "killed":false
     "code":1
      "signal":NULL
      "cmd":"python ./scripts/getUserFeed.py dave.xp 10.10.40.6:38001"
}
  я не вижу тут массива с данными, моя работа получает такой же самый ответ, поэтому этота часть не сделанна. Вообще проблем 
  сделать галерею имея данные не вижу никаких.
  7) При потери сети появляется страница с ошибкой
  8) Во время тестирования обнаруженна неожиданная способность данного API - на запрос Get User Info он умеет отдавать
    совсем пустой объект со статусом 200, посему был создан перехват этого фокуса, и вывод все той же страницы с ошибкой.

