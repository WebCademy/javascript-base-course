# Домашнее задание №5

Для решения задач используйте локальный редактор, браузер. Для сдачи своего решения используйте онлайн песочницы (например codepen.io, repl.it). Для каждого решения нужна отдельная ссылка если не указанно другого. По всем вопросам писать в группу или преподавателям. Поощряется совместное решение сложных задач. Удачи!

# Классы

__№1 - №3__ сделать одним скриптом.

```javascript
class Point {
    constructor (x, y) {
        this.x = x
        this.y = y
    }
    
    // Перемещает точку на dx dy по координатной плоскости.
    moveTo (dx, dy) { /* ... */ }
    
    // Возвращается расстояние до точки.
    distTo (point) { /* ... */ }
    
    // Возвращает расстояние между точками pointA и pointB
    static getDistBetween (pointA, pointB) { /* ... */ }
}
```

## №1 (*)

  - Написать для класса `Point` метод `moveTo`.
  - `dx` и `dy` - это не новые координаты, это смещение текущих координат.

## №2 (*)

  - Написать для класса `Point` статический метод `getDistBetween`, возвращающую расстояние между 2-мя точками.
  - [Справочный материал](https://0oq.ru/reshebnik-onlajn/ru.onlinemschool.com/math/library/analytic_geometry/point_point_length/default.htm) (По ссылке нажать колесиком мыши)

## №3 (*)

  - Написать для класса `Point` метод `distTo`, возвращающую расстояние до точки.
  - Метод `distTo` должен вызывать статический метод `getDistBetween`.

## №4 (***)

  - Создайте класс `Massiv`.
  - Реализуйте свойства и методы характерные массиву (`length`, `push`, `pop`, `slice`, `join`, etc)
  - Задание творческое. Суть заключается в том чтобы пояснить как функционирует базовый `Array`. По этому не нужно реализовывать все методы что есть в `Array`. 3-5 методов достаточно. Лучше выберите самые сложные для себя.
  - Напишите небольшой скрипт с использование своего класса. Покажите что методы экземпляра класса `Massiv` работают так же как и методы экземпляров класса `Array`.

# DOM манипуляции

Заготовка для номеров __№5__, __№6__.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="application"></div>
  <script>
/* ... */
  </script>
</body>
</html>
```

Заготовка для номера __№7__.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="application">
    <color green>Я зеленый</color>
    <color red>Я красный</color>
    <color blue>Я голубой</color>
  </div>
  <script>
/* ... */
  </script>
</body>
</html>
```

Заготовка для номера __№8__.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="application">
    <ul class='first'>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, corporis.</li>
      <li class='first'>Deleniti molestiae magni provident ex. Aliquid voluptate tempora quas, nam!</li>
      <li>Provident, omnis quibusdam vero. Non omnis quia totam qui minus.</li>
      <li class='first'>Iste quia praesentium unde repellendus, libero in veniam voluptas velit?</li>
      <li>Odit eaque, eius omnis, perspiciatis velit est iure vero. Beatae!</li>
    </ul>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, mollitia!</li>
      <li class='first'>Mollitia esse ex dolore ipsam, nulla earum alias pariatur animi.</li>
      <li>Earum ipsum accusamus, velit ducimus reprehenderit odio in fuga perferendis.</li>
      <li class='first'>Reprehenderit quos officiis sequi totam, eligendi suscipit qui, dicta unde!</li>
      <li class='first'>Ducimus ab reiciendis voluptatem quia facere impedit, hic labore similique.</li>
    </ul>
  </div>
  <script>
/* ... */
  </script>
</body>
</html>
```

Заготовка для номера __№9__.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="application">
    <input type="text">
    <button>Add to list</button>
    <ul></ul>
  </div>
  <script>
/* ... */
  </script>
</body>
</html>
```

Заготовка для номера __№10__.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document about 12/4 math.</title>
</head>
<body>
  <div id="application">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 100+23 Expedita ipsam doloribus dignissimos deserunt sint perferendis sit ducimus, reiciendis sequi pariatur quia a ipsum. Quas corporis nisi earum dolore perspiciatis iure, qui ducimus placeat minima? Sit ad in mollitia assumenda, fugiat 233-33 quasi deserunt sint cumque labore enim illo et veritatis qui?</p>
  </div>

  <p style='font-size: 5*2*5px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis 7*8 earum sapiente excepturi, inventore quae ab dicta. Obcaecati, placeat quam nesciunt.</p>
  <script>
/* ... */
  </script>
</body>
</html>
```

## №5 (*)

  - Императивно создать таблицу умножения и вставить ее в `div#application`.
  - Подсказка: использовать `Object.createElement` и `textContent`.
  - В таблице использовать стандартную верстку элементами `table`, `tr`, `td` и `th`.

## №6 (*)

  - Декларативно создать таблицу умножения и вставить ее в `div#application`.
  - Подсказка: использовать `Object.createElement` и `innerHTML`.
  - В таблице использовать стандартную верстку элементами `table`, `tr`, `td` и `th`.
  - Пример декларативного создания виртуального DOM есть в примерах.

## №7 (*)

  - Заменить все теги `<color>` на `<span>`.
  - Использовать атрибут цвета тега `color` в качестве `style color`.
  - Гарантируется, что тег `color` содержит единственный атрибут и этот атрибут является именем цвета.
  - Подсказка: использовать `querySelectorAll`, свойства элемента `elements` и `outerHTML`.
  - Например `<color red>Я красный</color>` будет заменено на `<span style='color: red'>Я красный</span>`
  
## №8 (**)

  - Отсортировать `li` элементы по факту наличия класса `first`:
    - все `li` элементы с классом `first` перенести в `ul.first`
    - остальные `li` перенести в `ul` без классов.
  - Подсказа: использовать `querySelectorAll`, `classList.contains` и `insertBefore`.

## №9 (**)

  - По нажатию кнопки `Add to list` из `input` забирает строка и на ее основе создается `li` элемент.
  - Этот `li` элемент вставляется в `ul`.
  - Вставка происходит в сортировочном формате по возрастанию длины строки.
  - Например после нескольких вставок должно получится:

```html
<ul>
  <li>Lorem.</li>
  <li>Lorem ipsum dolor.</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, beatae!</li>
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptas architecto nesciunt, ad fugit unde itaque cum ratione quasi vero!</li>
</ul>
```

## №10 (***)

  - Проанализировать DOM и заменить всю элементарную арифметику на результат вычисления.
  - Обратите внимание, что арифметика встречается как в текстовых узлах, так и в стилях.
  - Обязательно использовать перебор узлов.
