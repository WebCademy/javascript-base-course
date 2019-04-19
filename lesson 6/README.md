# Домашнее задание №6

Заготовка для заданий __№1__ и __№2__.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
td {
	width: 100px;
	height: 100px;
	border: 1px solid black;
}

td.greenSquare {
	background-color: green;
}

td.redSquare {
	background-color: red;
}

td.blueSquare {
	background-color: blue;
}
	</style>
</head>
<body>
	<div id="application">
		<table>
			<tr><td></td><td></td><td></td></tr>
			<tr><td></td><td></td><td></td></tr>
			<tr><td></td><td></td><td></td></tr>
		</table>
	</div>
	<script>
	/* ... */
	</script>
</body>
</html>
```

Заготовка для заданий __№4__ - __№6__.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Chat</title>
	<style></style>
</head>
<body>
	<div id="application">
		<textarea cols="50" rows="3"></textarea><br>
		<button>Отправить</button>
		<ul>
			<li><strong>13:46 System: </strong>Напишите текст и нажмите "Отправить"</li>
			<li><strong>13:45 System: </strong>Приветствую!</li>
		</ul>
	</div>
	<script>
	/* ... */
	</script>
</body>
</html>
```

Заготовка для заданий __№7__ и __№8__.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>OkiDoki</title>
	<style>
div {
	border: 1px solid black;
	padding: 100px;
}
	</style>
</head>
<body>
	<div>
		<div>
			<div>
				<div></div>
			</div>
		</div>
	</div>
	<script>
	/* ... */
	</script>
</body>
</html>
```

Заготовка для заданий __#9__ и __10__.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Clicker</title>
</head>
<body>
	<table>
		<tr>
			<td><button>Clicked 0 times.</button></td>
			<td><button>Clicked 0 times.</button></td>
			<td><button>Clicked 0 times.</button></td>
		</tr>
		<tr>
			<td><button>Clicked 0 times.</button></td>
			<td><button>Clicked 0 times.</button></td>
			<td><button>Clicked 0 times.</button></td>
		</tr>
		<tr>
			<td><button>Clicked 0 times.</button></td>
			<td><button>Clicked 0 times.</button></td>
			<td><button>Clicked 0 times.</button></td>
		</tr>
	</table>
	<script>
	/* ... */
	</script>
</body>
</html>
```

## №1 (*)

  - Привяжите обработчик события `onclick` ко всем элементам `td` который меняет цвет заливки при каждом нажатии.
  - Цвета меняются замкнутой цепочкой указанной в стилях.

## №2 (*)

  - Доработать программу из задания 1 так чтобы при клике с зажатой клавишей `ctrl` `td` становился прозрачным.
  - Подсказка: можно просто удалить все стили.

## №3 (*)

  - Сделайте страничку с живыми часами показывающие точное время.
  - Подсказка: используйте `setInterval`

## №4 (*)

  - При нажатии на кнопку `Отправить` должно происходить следующее:
      - в начало списка сообщений должно быть добавлено  новое сообщение из `textarea` по примеру. В новом сообщение должна быть указанна служебная информация: время и автор,
      - `textarea` должно очиститься,
      - пустое сообщение нельзя отправить в добавленные.

## №5 (*)

  - Доработать программу из задания 4 следующим образом: при нажатии на уже существующее сообщение его содержимое должно вставляться в конец `textarea`.
  - Примечание: содержимое без служебной информации.

## №6 (*)

  - Доработать программу из задания 4 следующим образом: можно отправить сообщение в добавленные не только нажатием на кнопку `Отправить`, но и комбинацией клавиш `ctrl+Enter`.

## №7 (**)

  - Менять цвета `div` элемента по нажатию на случайный цвет.
  - Цвет должен менять только нажатый `div` элемент.

## №8 (**)

  - Если при клике на `div` была прожата клавиша `ctrl`, то цвет элемента не меняется, но должны поменять все дочерние `div` элементы на цвет прожатого `div`.
  - При наведение на какой-то из `div` элементов его заливка становится картинкой (на ваше усмотрение).

## №9 (*)

  - Каждая кнопка подсчитывает сколько раз на нее прожали.

## №10 (**)

  - Доработать программу из задания 4 следующим образом: если в какой-то строке или столбце находятся кнопки прожатые одинаковое количество раз, то все их счетчики сбрасываются.

## №11 (***)

  - Написать скрипт заполняющий страницу большим количество случайных символов так чтобы появилась прокрутка.
  - При прокрутки страницы цвет и размер шрифта должны плавно меняться:
      - цвет становится красным,
      - размер увеличивается до 2-х раз.
