export default (data) => {
	// Создание объекта XMLHttpRequest
	var xhr = new XMLHttpRequest();
  
	// Настройка запроса
	xhr.open('POST', 'send.php', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
	console.log(data)

	// Отправка данных формы в виде параметров запроса
	var params = 'name=' + encodeURIComponent(data.name) +
				 '&email=' + encodeURIComponent(data.email ? data.email : "") +
				 '&ask=' + encodeURIComponent(data.ask ? data.ask : "") +
				 '&phone=' + encodeURIComponent(data.phone);
  
	// Отправка запроса
	xhr.send(params);
  
	// Обработка ответа от сервера
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
		  // Запрос успешно выполнен
		  console.log(xhr.responseText, params);
		  alert('Письмо успешно отправлено!');
		  // Дополнительные действия при успешной отправке письма
		} else {
		  // Произошла ошибка при выполнении запроса
		  console.log('Ошибка: ' + xhr.status, params);
		  alert('Произошла ошибка при отправке письма.');
		  // Дополнительные действия при ошибке отправки письма
		}
	  }
	};
}