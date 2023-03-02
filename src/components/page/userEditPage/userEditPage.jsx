import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "../../common/form/textField";

const UserEditPage = () => {
    const [inputData, setInputData] = useState({
        name: "",
        surname: "",
        year: "",
        link: ""
    });
    const history = useHistory();

    useEffect(() => {
        setInputData(JSON.parse(localStorage.getItem("user")));
    }, []);

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
        localStorage.setItem("user", JSON.stringify(inputData));
        history.push(`/`);
    };

    return (
        <div>
            <h1>Редактировать</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label = "Имя"
                    type = "text"
                    id = "name"
                    name = "name"
                    value = {inputData.name}
                    onChange = {handleChange}
                />
                <TextField
                    label = "Фамилия"
                    type = "text"
                    id = "surname"
                    name = "surname"
                    value = {inputData.surname}
                    onChange = {handleChange}
                />
                <TextField
                    label = "Год рождения"
                    type = "text"
                    id = "year"
                    name = "year"
                    value = {inputData.year}
                    onChange = {handleChange}
                />
                <TextField
                    label = "Портфолио"
                    type = "text"
                    id = "link"
                    name = "link"
                    value = {inputData.link}
                    onChange = {handleChange}
                />
                <div className = "">
                    <button type = "button" className="btn btn-secondary m-2" onClick = {handleBack}> Назад</button>
                    <button type = "submit" className="btn btn-primary"> Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default UserEditPage;
