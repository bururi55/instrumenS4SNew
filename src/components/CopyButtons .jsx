import React from 'react';

const CopyButtons = () => {
	const copyText = (selector) => {
		const text = document.querySelector(selector).innerText;
		navigator.clipboard
			.writeText(text)
			.then(() => {
				alert('Текст скопирован: ' + text);
			})
			.catch((err) => {
				console.error('Ошибка копирования текста: ', err);
			});
	};

	return (
		<div id="parent">
			<div id="left">
				<center>
					<p className="zagolovok">
						<b>Холды/Пушы/Закрытие/Приветствие</b>
					</p>
					<div style={{ fontSize: 0 }} id="t1">
						5-10 минут, пожалуйста, уточню информацию и вернусь с ответом
					</div>
					<div style={{ fontSize: 0 }} id="t2">
						10-15 минут, пожалуйста, уточню информацию и вернусь с ответом
					</div>
					<div style={{ fontSize: 0 }} id="t3">
						Мне нужно ещё немного времени, чтобы всё проверить. Прости, что
						задерживаюсь с ответом
					</div>
					<div style={{ fontSize: 0 }} id="t4">
						Коллега?
					</div>
					<div style={{ fontSize: 0 }} id="t5">
						Рад помочь. Если появятся дополнительные вопросы, то обязательно
						обращайся
					</div>
					<div style={{ fontSize: 0 }} id="t6">
						Не дождался твоего ответа, чат закрою. Возвращайся, когда будет
						удобно
					</div>
					<div style={{ fontSize: 0 }} id="t7">
						Привет, ! Чем могу помочь?
					</div>
					<div style={{ fontSize: 0 }} id="t8">
						Привет, ! Какой у тебя вопрос?
					</div>
					<div style={{ fontSize: 0 }} id="t9">
						Получаем много обращений. Прости, пожалуйста, за долгий ответ.
					</div>
					<div style={{ fontSize: 0 }} id="t10">
						Компания переводит оплату вместе с налогом и комиссией Наймикса.
						Если автооплата активна, Наймикс резервирует 6% на налог и
						списывает сумму автоматически в 10-15 числах месяца. А если
						функцию ранее не подключал, нужно оплачивать самостоятельно в
						приложении «Мой налог». Включить её можно в настройках: раздел
						«Профиль» → нажать на шестерёнку в правом верхнем углу →
						«Интеграция с Мой налог» → «Автоматическая уплата налогов» →
						нажать на бегунок, чтобы он стал зелёным. При подключении налог
						начинает оплачиваться с 1-го числа следующего месяца (если ранее
						автооплата была не подключена, то за предыдущий месяц необходимо
						оплатить самостоятельно)
					</div>
					<div style={{ fontSize: 0 }} id="t11">
						Оплату в компании переводят в среду-четверг. Если не получишь по
						истечении времени, сообщи нам повторно, пожалуйста
					</div>
					<div style={{ fontSize: 0 }} id="t12">
						Тебе направят 2 платежа в среду-четверг из-за стыка месяцев. 4200
						и 10200 рублей
					</div>
					<div style={{ fontSize: 0 }} id="t13">
						Тебе направят в среду-четверг ХХХ рублей
					</div>
					<div style={{ fontSize: 0 }} id="t14">
						У нас нет информации по премии. Рекомендую обратиться к тимлидеру
						или в чат супервайзеров: https://t.me/supervisor_support_bot
					</div>
					<div style={{ fontSize: 0 }} id="t15">
						За период 13.01-19.01 у тебя ХХ часов. Ошибок в расчёте нет.
						Оплату направили верно
					</div>
					<div style={{ fontSize: 0 }} id="text49">
						Тебя нет в ведомости. Передал информацию специалистам. Точных
						сроков нет. Как только получим ответ, вернёмся в личные сообщения
						Telegram
					</div>
					<div style={{ fontSize: 0 }} id="text50">
						Тебе не загрузили Х часов в ведомость. Напиши нам, пожалуйста, в
						понедельник после 12:00, проставим долг
					</div>
					<div style={{ fontSize: 0 }} id="text51">
						Тебе не загрузили Х часов в ведомость. Проставил в долг, направят
						вместе с основной оплатой за период хх-хх
					</div>
					<button onClick={() => copyText('#t1')} id="kildsan">
						Холд 5-10
					</button>
					<button onClick={() => copyText('#t2')} id="kildsan">
						Холд 10-15
					</button>
					<button onClick={() => copyText('#t3')} id="kildsan">
						Холд ещё
					</button>
					<br />
					<br />
					<button onClick={() => copyText('#t4')} id="kildsan">
						Коллега?
					</button>
					<button onClick={() => copyText('#t5')} id="kildsan">
						Рад помочь
					</button>
					<button onClick={() => copyText('#t6')} id="kildsan">
						Не дождался ответа
					</button>
					<br />
					<br />
					<button onClick={() => copyText('#t7')} id="kildsan">
						Чем могу?
					</button>
					<button onClick={() => copyText('#t8')} id="kildsan">
						Какой вопрос?
					</button>
					<button onClick={() => copyText('#t9')} id="kildsan">
						Прости за ожидание
					</button>
					<p className="zagolovok">
						<b>Оплата</b>
					</p>
					<button onClick={() => copyText('#t10')} id="kildsan">
						Налог
					</button>
					<button onClick={() => copyText('#t11')} id="kildsan">
						Сроки оплаты
					</button>
					<button onClick={() => copyText('#t12')} id="kildsan">
						Стык Месяцев
					</button>
					<br />
					<br />
					<button onClick={() => copyText('#t13')} id="kildsan">
						Сколько?
					</button>
					<button onClick={() => copyText('#t14')} id="kildsan">
						Премия
					</button>
					<button onClick={() => copyText('#t15')} id="kildsan">
						Расчёт верный
					</button>
					<br />
					<br />
					<button onClick={() => copyText('#text49')} id="kildsan">
						Нет в ведомости
					</button>
					<button onClick={() => copyText('#text50')} id="kildsan">
						Долг после среды
					</button>
					<button onClick={() => copyText('#text51')} id="kildsan">
						Долг до среды среды
					</button>
					<div style={{ fontSize: 0 }} id="text16">
						Резюме передал. Срок рассмотрения заявки составляет 10 рабочих
						дней. Если в течение этого времени кандидат не получит обратную
						связь, это означает, что он переведён в резервный список. Когда
						откроют новый набор, то с ним свяжутся
					</div>
					<div style={{ fontSize: 0 }} id="text17">
						Резюме передал. С кандидатом свяжутся, как только откроют набор и
						подберут для него подходящую позицию
					</div>
					<div style={{ fontSize: 0 }} id="text18">
						Заполни, пожалуйста, резюме по шаблону: https://clck.ru/38mAuQ и
						отправь в чат{' '}
					</div>
					<div style={{ fontSize: 0 }} id="text19">
						Вижу, что ИМЯ находится в резерве. Как только появятся свободные
						места, с ним свяжутся{' '}
					</div>
					<div style={{ fontSize: 0 }} id="text20">
						Резюме “Приведи друга” от
					</div>
					<div style={{ fontSize: 0 }} id="text21">
						Добрый день. Передали ФИО кандидата по акции “Приведи друга”.
						Передал (ФИО человека, который передал резюме). Резюме во
						вложении.
					</div>
					<p className="zagolovok">
						<b>Приведи друзей к нам</b>
					</p>
					<button onClick={() => copyText('#text16')} id="kildsan">
						Передал, набор есть
					</button>
					<button onClick={() => copyText('#text17')} id="kildsan">
						Передал, набора нет
					</button>
					<button onClick={() => copyText('#text18')} id="kildsan">
						Шаблон резюме
					</button>
					<br />
					<br />
					<button onClick={() => copyText('#text19')} id="kildsan">
						В резерве друг
					</button>
					<button onClick={() => copyText('#text20')} id="kildsan">
						ПОЧТА тема
					</button>
					<button onClick={() => copyText('#text21')} id="kildsan">
						ПОЧТА письмо
					</button>
				</center>
			</div>
			<div id="right">
				<p className="zagolovok">
					<b>Задачи и ТО</b>
				</p>
				<div style={{ fontSize: 0 }} id="t25">
					Рекомендую: 1. Проверить корректность логина и пароля; 2. Убедиться,
					что настройки в клиенте заданы верно. Порт: 54443, адрес подключения:
					river.megamarket.tech
				</div>
				<div style={{ fontSize: 0 }} id="t26">
					Рекомендую: 1. Убедиться, что настройки в клиенте заданы верно. Порт:
					54443, адрес подключения: river.megamarket.tech; 2. Переустановить VPN
					по инструкции: https://clck.ru/3DT98z 3. Уточнить о блокировке у
					провайдера
				</div>
				<div style={{ fontSize: 0 }} id="t27">
					Инструкция: https://clck.ru/3DT98z
				</div>
				<div style={{ fontSize: 0 }} id="t28">
					Чтобы устранить проблему, пожалуйста, сделай следующее: • перезагрузи
					страницу через ctrl+F5(очистка кэша); • очисти cookies; • попробуй
					перелогиниться на сервисе или войти через другой браузер (Google
					Chrome). При сохранении проблемы напиши нам повторно
				</div>
				<div style={{ fontSize: 0 }} id="t29">
					Передам данные техническим специалистам в течение 5-10 минут. А пока
					напиши свой тег в Telegram, вернёмся с обратной связью туда
				</div>
				<div style={{ fontSize: 0 }} id="t30">
					Задачу создал. Срок решения — до 6 дней. Как только получим ответ,
					напишем в личные сообщения Telegram. Если по истечении этого времени с
					тобой не свяжутся, сообщи нам повторно, пожалуйста
				</div>
				<div style={{ fontSize: 0 }} id="t31">
					Передал данные в работу. Доступы заберём в течение 3 дней{' '}
				</div>
				<div style={{ fontSize: 0 }} id="t32">
					Передал данные в работу. Доступы сделаем в течение 3 дней. Учётная
					запись будет действительна в течение 90 дней. По истечении этого срока
					на почту руководителя, придёт письмо с просьбой подать заявку на
					продление учётной записи. Если данные для входа не получит, напиши нам
					повторно
				</div>
				<div style={{ fontSize: 0 }} id="t33">
					Просьба забрать доступы у контрагента в только контуре ММ
				</div>
				<div style={{ fontSize: 0 }} id="t34">
					https://space.samokat.ru/pages/viewpage.action?pageId=3889109158
				</div>
				<div style={{ fontSize: 0 }} id="t35">
					Перейди в бота: https://t.me/MWordBot Активируй учётную запись и в
					Таймтреке нажми на кнопку «Сбросить пароль». После бот направит новый
					пароль
				</div>
				<div style={{ fontSize: 0 }} id="t36">
					Мы можем помочь только с учётными записями для операторов. В твоем
					случае нужно обратиться к Галине Соловьевой на почту:
					gsoloveva@samokat.ru
				</div>
				<div style={{ fontSize: 0 }} id="t37">
					Логин и пароль такие же, как от корпоративной почты. Введи их,
					пожалуйста
				</div>
				<div style={{ fontSize: 0 }} id="t38">
					Ты можешь поделиться своей болью, если это уместно. Однако скажу
					сразу, что я обычный оператор и не смогу дать совет по данной
					проблеме, но я хочу помочь тебе. Позвони, пожалуйста, по телефону
					доверия: +74959895050
				</div>
				<div style={{ fontSize: 0 }} id="t39">
					У нас нет доступа к расписанию. Рекомендую обратиться к тимлидеру или
					в чат супервайзеров: https://t.me/supervisor_support_bot
				</div>
				<button onClick={() => copyText('#t25')} id="kildsan">
					VPN 455
				</button>
				<button onClick={() => copyText('#t26')} id="kildsan">
					VPN ТО другое
				</button>
				<button onClick={() => copyText('#t27')} id="kildsan">
					VPN Инструкция
				</button>
				<br />
				<br />
				<button onClick={() => copyText('#t28')} id="kildsan">
					Тех Реки
				</button>
				<button onClick={() => copyText('#t29')} id="kildsan">
					Передам АЙТИ
				</button>
				<button onClick={() => copyText('#t30')} id="kildsan">
					Задачу создал
				</button>
				<br />
				<br />
				<button onClick={() => copyText('#t31')} id="kildsan">
					Заберем доступы
				</button>
				<button onClick={() => copyText('#t32')} id="kildsan">
					Сделаем доступы
				</button>
				<button onClick={() => copyText('#t33')} id="kildsan">
					Забрать для задачи
				</button>
				<br />
				<br />
				<button onClick={() => copyText('#t34')} id="kildsan">
					Матрица доступов
				</button>
				<button onClick={() => copyText('#t35')} id="kildsan">
					Таймтрек Сброс
				</button>
				<button onClick={() => copyText('#t36')} id="kildsan">
					РА не для оперов
				</button>
				<p className="zagolovok">
					<b>Разное</b>
				</p>
				<button onClick={() => copyText('#t37')} id="kildsan">
					VPN пароль
				</button>
				<button onClick={() => copyText('#t38')} id="kildsan">
					Суисайд
				</button>
				<button onClick={() => copyText('#t39')} id="kildsan">
					Вопрос по слотам
				</button>
				<br />
				<br />
				<div style={{ fontSize: 0 }} id="text40">
					Превышен лимит администраторов, права дать не сможем. Если нужно
					добавить кого-то, они могут перейти по ссылке:
					https://t.me/+4lmgw0Vdd4pjYmRi
				</div>
				<div style={{ fontSize: 0 }} id="text41">
					Подробности можно уточнить в компании по телефону: 8 (800) 511-12-11
					или 8 (812) 607-64-64
				</div>
				<div style={{ fontSize: 0 }} id="text42">
					Доступы в сервисы Мегамаркета выдаются только после согласования с
					Информационной Безопасностью. Для вашего направления выдать не
					получится, так как процесс не согласован. Обратись, пожалуйста, к
					своему руководителю
				</div>
				<div style={{ fontSize: 0 }} id="text43">
					—
				</div>
				<div style={{ fontSize: 0 }} id="text44">
					«»
				</div>
				<div style={{ fontSize: 0 }} id="text45">
					Превышен лимит администраторов, права дать не сможем. Если нужно
					добавить кого-то, они могут перейти по ссылке:
					https://t.me/+BGUrK1kcBGI5ZWI6
				</div>
				<div style={{ fontSize: 0 }} id="text46">
					Доступы в сервисы Мегамаркета выдаются только по согласованной матрице
					доступов. Для твоего направления выдать не получится, так как процесс
					не согласован. Обратись, пожалуйста, к своему руководителю
				</div>
				<div style={{ fontSize: 0 }} id="text47">
					Для создания заявки уточни следующее, пожалуйста: - Твой логин ERM; -
					Порядок действий, который привёл к проблеме; - Скриншоты, на которых
					видно проблему; - Часовой пояс; - Номер телефона/gd покупателя и/или
					номер заказа/доставки, в которой обнаружен сбой; - Как часто возникает
					ошибка; - Проблема массовая или локальная; - Возможно ли
					взаимодействовать с системой; - Подробное описание проблемы
				</div>
				<div style={{ fontSize: 0 }} id="text48"></div>
				<div style={{ fontSize: 0 }} id="text52">
					Техническая поддержка штатных сотрудников компании с 1 сентября
					работает только через портал ithelp.samokat.ru. Рекомендуем создать
					задачу на технических специалистов самостоятельно:
					http://ithelp.samokat.ru/ Авторизоваться можно с помощью учётной
					записи Мегамаркета, если нет учётной записи Самокат. Подробнее о входе
					в систему рассказали в инструкции:
					https://docs.google.com/document/d/1GcX-lUNz1oeZwAhdzG7eNQDEmEnRXadfUbd5lm8VmUI/edit
					Если не получится самостоятельно, сообщи своему руководителю
				</div>
				<div style={{ fontSize: 0 }} id="text53">
					В дальнейшем можешь узнать самостоятельно, умножив часы в Таймтреке на
					свою ставку — 150 рублей в час. И добавить премию, если она есть.
					Уточнить сумму можно у тимлидера или в чате супервайзеров:
					https://t.me/supervisor_support_bot
				</div>
				<div style={{ fontSize: 0 }} id="text54">
					Данные для входа отправил на корпоративную почту. Если не получишь
					письмо в течение суток, напиши нам повторно, пожалуйста
				</div>
				<button onClick={() => copyText('#text40')} id="kildsan">
					ТГ Важные изменения
				</button>
				<button onClick={() => copyText('#text41')} id="kildsan">
					Телефон ВР
				</button>
				<button onClick={() => copyText('#text42')} id="kildsan">
					Доступы Левым
				</button>
				<br />
				<br />
				<button onClick={() => copyText('#text43')} id="kildsan">
					—
				</button>
				<button onClick={() => copyText('#text44')} id="kildsan">
					«»
				</button>
				<button onClick={() => copyText('#text45')} id="kildsan">
					ТГ ММ Акции{' '}
				</button>
				<br />
				<br />
				<button onClick={() => copyText('#text46')} id="kildsan">
					Доступ по Матрице
				</button>
				<button onClick={() => copyText('#text47')} id="kildsan">
					ERM ТО Уточни
				</button>
				<button onClick={() => copyText('#text48')} id="kildsan">
					--
				</button>
				<br />
				<br />
				<button onClick={() => copyText('#text52')} id="kildsan">
					ШТАТ ЗАДАЧИ
				</button>
				<button onClick={() => copyText('#text53')} id="kildsan">
					ОПЛАТА САМ
				</button>
				<button onClick={() => copyText('#text54')} id="kildsan">
					ERM Пароль
				</button>
			</div>
		</div>
	);
};

export default CopyButtons;
