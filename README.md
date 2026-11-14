# Портфолио gogoweru

Сайт-портфолио разработчика игр. Статический сайт: чистый HTML/CSS/JS, без сборщиков
и зависимостей — работает любым статическим хостингом (GitHub Pages, Netlify, itch.io и т.д.).

## Структура

```
portfolio/
├── index.html              ← главная: обо мне, список игр, контакты
├── css/style.css           ← стили всего сайта
├── js/main.js              ← мобильное меню и лайтбокс скриншотов
├── images/                 ← скриншоты и обложки игр
│   ├── farm-*.png            ← Ферма (4 скриншота)
│   ├── turn-*.png            ← Крутой поворот (5 скриншотов)
│   ├── polyanka-cover.png    ← Лесная поляна (обложка)
│   ├── polyanka-0*.png       ← Лесная поляна (4 скриншота: титул, меню, лес, Леша)
│   ├── bobi-0*.png           ← Боби (3 скриншота: меню и сундук с грузом)
│   ├── grob-*.png            ← Гробовщик (3 скриншота)
│   └── zarplata-0*.png       ← Зарплата (4 скриншота: меню, имя, офис, стойка)
└── games/
    ├── farm/               ← «Ферма»
    │   ├── index.html
    │   └── Farm-Windows.zip        (62 МБ)
    ├── turn/               ← «Крутой поворот» (веб-версия naspeh.tech)
    │   └── index.html
    ├── polyanka/           ← «Лесная поляна»
    │   ├── index.html
    │   └── lesnaya-polyanka.zip    (45 МБ)
    ├── bobi/               ← «Боби»
    │   ├── index.html
    │   └── Bobi-Windows.zip        (58 МБ)
    ├── grobovshik/         ← «Гробовщик» (команда ЗамороJAMные)
    │   ├── index.html
    │   └── Grobovshik-Windows.zip  (68 МБ)
    └── zarplata/           ← «Зарплата» (студия SubbotaStudio)
        ├── index.html
        └── zarplata.zip            (110 МБ — на Google Drive, в GitHub не заливается)
```

Всего 6 игр: Ферма, Крутой поворот, Лесная поляна, Боби, Гробовщик, Зарплата.

## Как добавить новую игру

1. **Скриншоты** — положи картинки в `images/`, назови вида `mygame-01-....png`.
2. **Файл игры** — создай папку `games/<название-игры>/` и положи туда архив с игрой.
3. **Страницу игры** — скопируй `games/farm/index.html` как шаблон, поправь:
   - заголовок, описание, факт-блоки (жанр, размер, движок);
   - пути к скриншотам (`../../images/...`);
   - ссылку на скачивание (`href="Архив.zip"`) и при желании — ссылку на Google Drive.
4. **Карточку на главной** — в `index.html` в секции `#games` скопируй блок
   `<article class="game-card">…</article>` и замени картинку, текст и ссылки.

## Локальный запуск

```bash
cd portfolio
python3 -m http.server 8000
# затем открой http://localhost:8000
```

## Публикация на GitHub Pages

1. Создай пустой репозиторий на github.com.
   Имя `gogoweru.github.io` — сайт откроется в корне (`https://gogoweru.github.io/`),
   любое другое имя — в подпапке (`https://gogoweru.github.io/<имя-репо>/`);
   оба варианта работают, все пути в проекте относительные.
2. Загрузи в репозиторий **всё содержимое папки `portfolio/`** (кроме самой папки):
   `index.html`, `css/`, `js/`, `images/`, `games/` — вместе с архивами `.zip`.
   Удобнее всего: распаковать архив `portfolio-site.zip` и перетащить файлы
   через веб-интерфейс GitHub, либо через git со своей машины:

   ```bash
   cd portfolio
   git init -b main
   git add .
   git commit -m "Портфолио gogoweru"
   git remote add origin https://github.com/<ник>/<репо>.git
   git push -u origin main
   ```

3. В репозитории: **Settings → Pages → Source: Deploy from a branch**,
   ветка `main`, папка `/(root)` → **Save**.
4. Через минуту сайт появится по адресу из шага 1.

⚠️ Архивы игр в `games/*/*.zip` обязательны — без них не будут работать кнопки
«⬇ Скачать с сайта» (ссылки на Яндекс Диск и Google Drive останутся в любом случае).

## Пока в работе

- состав команды «Гробовщика» (ЗамороJAMные) — уточнить у gogoweru;
- роли в команде «Зарплаты» (@ttvSubbotttaa, @GGogweru, @Ja_s1k, @wllph0, @Hidhlander) — уточнить;
- контакт Telegram (@GGogoweru) — предположение, подтвердить.
