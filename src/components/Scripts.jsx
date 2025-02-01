import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-snowfall';

const Scripts = () => {
	useEffect(() => {
		// Копирование текста
		window.copytext = function (el) {
			var $tmp = $('<textarea>');
			$('body').append($tmp);
			$tmp.val($(el).html()).select();
			document.execCommand('copy');
			$tmp.remove();
		};

		// Создание снегопада
		$('#dnn_whiteHolder').snowfall({
			image: 'https://www.dropbox.com/s/e947ssx967uvwju/snow1.png?dl=1',
			minSize: 2,
			maxSize: 10,
			maxSpeed: 0.75,
			minSpeed: 0.5,
			flakeCount: 100,
			shadow: false,
			round: true,
		});
	}, []);

	return null;
};

export default Scripts;
