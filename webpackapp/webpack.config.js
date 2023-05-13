const path = require("path");

module.exports = {
    mode: "development",  // опция mode. "development" указывает, что приложение находится в состоянии разработки.
    entry: "./app/app.jsx", // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, "./public"),     // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "bundle.js"       // название создаваемого файла. файл, который будет подключаться на веб-страницу
    },
    devServer: { // конфигурация запускаемого веб-сервера
        historyApiFallback: true, // указывает, что будет использоваться HTML5 History API
        static: {                 // устанавает настройки для статических файлов
            directory: path.join(__dirname, "/"), // directory указывает, где находится index.html
        },
        port: 8081, // веб-сервер будет запускаться на порту 8081
        open: true  // при запуске веб-сервера приложение будет автоматически открываться в веб-браузере
    },
    module: {
        rules: [   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["@babel/preset-react"]    // используемые плагины
                }
            }
        ]
    }
}