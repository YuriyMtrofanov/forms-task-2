import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "../../common/form/textField";
import { validator } from "../../../utils/validator";

const UserEditPage = () => {
    const [inputData, setInputData] = useState({
        name: "",
        surname: "",
        year: "",
        link: ""
    });
    const history = useHistory();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setInputData(JSON.parse(localStorage.getItem("user")));
    }, []);

    useEffect(() => {
        validate();
        console.log(errors);
    }, [inputData]);

    // Создадим универсальныый валидатор. В этом методе мы зададим отображение нескольких ошибок.
    // Данный метод будет проверять требования для вводимых в поле данных. Эти настройки сохраним в
    // переменную validatorVonfig. По сути своей это объект в котором перечислены наши поля и во
    // вложенных объектах перечисляются требования к вводимым данным и сообщение, которое будет
    // выводиться в случае невыполнения конкретного условия
    const validatorConfig = {
        name: {
            isRequired: {message: "Поле Имя обязательно для заполнения"},
            isName: {message: "Имя должно состоять из кириллических символов"}
        },
        surname: {
            isRequired: {message: "Поле Фамилия обязательно для заполнения"},
            isName: {message: "Фамилия должна состоять из кириллических символов"}
        },
        year: {
            isRequired: {message: "Поле Год рождения обязательно для заполнения"},
            isDigits: {message: "Год рождения должен состоять из цифр"},
            isCorrectYear: {message: "Данные введены некорректно"}
        },
        link: {
            isRequired: {message: "Поле Портфолио обязательно для заполнения"},
            isLink: {message: "Данные введены некорректно"}
        }
    };

    const validate = () => {
        // Реализуем валидацию
        // const errors = {};
        // for (const fieldName in inputData) {
            // Чтобы отловить пустое поле, следует обратиться к какому-либо полю из объекта с входящими данными
            // по его ключу "name" и сравнить его с пустой строкой. В случае выполнения условия - поле пустое,
            // записываем ошибку
            // if (inputData[fieldName].trim() === ""){
                // errors[fieldName] = `Поле ${fieldName} обязательно для заполнения`
            // }
        // }
        // На мы создали универсальный валидатор и теперь используем его:
        const errors = validator(inputData, validatorConfig);
        setErrors(errors);
        // Помимо записи состояния для объекта с ошибками вернем результат работы функции то есть
        // пройдена валидация или нет. Для этого пройдемся по ключам объекта с ошибками и проверим
        // длину полученного массива. Если дляна массива = 0 (валидация пройдена), то возвращаем
        // true, в противном случае возвращаем false (валидация не пройдена)
        return Object.keys(errors).length === 0
    };

    // Для кнопки отправить зададим параметр disabled. Создадим переменную, которая принимает результат
    // проверки на наличие ошибок в errors. Точно такой же как тот, что мы задаем в ф-ии validate
    // чтобы остановить её выполнение т.е. если isDisabled возвращает true, то наша кнопка неактивна,
    // если false - активна, следовательно нам нужно инвертировать равенство при вызове этой переменной
    const isDisabled = Object.keys(errors).length === 0

    const handleChange = ({target}) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleBack = () => {
        history.push(`/`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        localStorage.setItem("user", JSON.stringify(inputData));
        history.push(`/`);
    };

    return (
        <div>
            <h1 className="mb-4" >Редактировать</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label = "Имя"
                    type = "text"
                    id = "name"
                    name = "name"
                    value = {inputData.name}
                    onChange = {handleChange}
                    error = {errors.name}
                />
                <TextField
                    label = "Фамилия"
                    type = "text"
                    id = "surname"
                    name = "surname"
                    value = {inputData.surname}
                    onChange = {handleChange}
                    error = {errors.surname}
                />
                <TextField
                    label = "Год рождения"
                    type = "text"
                    id = "year"
                    name = "year"
                    value = {inputData.year}
                    onChange = {handleChange}
                    error = {errors.year}
                />
                <TextField
                    label = "Портфолио"
                    type = "text"
                    id = "link"
                    name = "link"
                    value = {inputData.link}
                    onChange = {handleChange}
                    error = {errors.link}
                />
                <div className = "">
                    <button
                        type = "button"
                        className="btn btn-secondary m-2"
                        onClick = {handleBack}
                    > Назад</button>
                    <button
                        type = "submit"
                        className="btn btn-primary"
                        disabled = {!isDisabled}
                    > Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default UserEditPage;
