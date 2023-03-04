export function validator(data, config){
    // Создадим переменную в которую будем записывать ошибки
    const errors= {};
    // Далее реализуем функцию, которая будет с помощью switch/case перебирать
    // условия проверки для каждого поля. В данном случае data = это не все
    // вводимые данные во все поля, а значение каждого отдельного поля, ниже мы
    // вызываем эту функцию и передаем в качестве аргумента data - data[fieldName].
    function validate(validateMethod, data, config) {
        switch (validateMethod) {
            case "isRequired":
                // Далее реализуем проверку на наличие символов в поле ввода
                if (data.trim() === "") return config.message;
                break;
            // Добавим проверку на правильность ввода имени
            case "isName": {
                const nameRegExp = /^[А-Яа-я]+$/g;
                if (!nameRegExp.test(data)) return config.message;
                break;
            }
            // Добавим проверку на правильность ввода года рождения
            case "isDigits": {
                const yearRegExp = /^[0-9]+$/g;
                if (!yearRegExp.test(data)) return config.message;
                break;
            }
            case "isCorrectYear": {
                if (data > new Date().getFullYear()) return config.message;
                break;
            }
            // case "min": {
            //     statusValidate = data.length < config.value;
            //     break;
            // }
            case "isLink": {
                const linkRegExp = /^https?:\/\/\S+$/g;
                if (!linkRegExp.test(data)) return config.message;
                break;
            }
            default:
                break;
        }
    };
    // Перебираем имена полей в обоъекте с вводимыми данными
    for (const fieldName in data) {
    // Для каждого поля у нас подготовлен объект (или несколько объектов)
    // с настройками (validatorConfig). Поэтому на каждой итерации мы перебираем
    // все настройки для данного поля:
        for (const validateMethod in config[fieldName]){
        // validateMethod - это например "isRequired"
        // config[fieldName] - это боъект вызываемый по имени поля name: {isRequired:{}}
        // На каждой итерации вызоыем функцию validate(), передадим в нее доступные на
        // данной итерации параметры (метод, данные введенные конкретном в поле, сообщение
        // об ошибке для данного поля из объекта с конфигурацией) и сохраним результат её
        // работы в переменную 
            const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
            // и выполним дополнительную проверку существует ли вообще ошибка "error"
            // а также  НЕ сужествует ли в объекте "errors" ранее записанная ошибка (!errors[fieldName]).
            // То есть мы проверяем существуют ли записи об ошибках и выводим первую.
            // Другими словами ошибка добавляется в том случае если записей об ошибках не было
            // и не добавится если ранее запись уже была сделана
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    };
    return errors;
};

// Резюме: мы инициализируем метод validate(), вызываем его для каждого из требований,
// записали ошибки в переменную errors и вернули ошибки