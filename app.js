const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) { // создаем собственно веб-сервер с помощью функции http.createServer():

    let filePath = "index.html";                 // Если запрос по адресу "localhost:3000/", то отправляем страницу "index.html"
    if (request.url !== "/") {
        // получаем путь после слеша
        filePath = request.url.substring(1);     // получаем запрошенный путь
    }
    fs.readFile(filePath, function (error, data) {  // считываем из файловой системы запрошенный файл

        if (error) {

            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else {
            response.end(data);                    // с помощью метода response.end() отправляем считанный данные пользователю
        }
    });

}).listen(3000, function () {                      // функция listen() запускает созданный веб-сервер на 3000-м порту
    console.log("Server started at 3000");
});