import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const UserPage = () => {
    const [userData, setUserData] = useState({});
    const buttonName = userData ? "Редактировать" : "Добавить";
    const history = useHistory();
    useEffect(() => {
        setUserData(() => {
            return JSON.parse(localStorage.getItem("user"));
        });
    }, []);

    // Реализую переадресацию
    const handleClick = () => {
        if (userData){
            history.push(`/edit`);
        } else {
            history.push(`/create`);
        };
    };

    // Высчитываю полное количество лет и выдаю итоговую запись со склонением
    const fullAge = () => {
        const age = new Date().getFullYear() - userData.year;
        const numberArray = age.toString().split("");
        if (numberArray.length === 1){
            if (Number(numberArray[0]) === 1) {
                return `${age} год`;
            } else if (Number(numberArray[0]) > 1 && Number(numberArray[0]) <= 4) {
                return `${age} года`;
            } else {
                return `${age} лет`;
            }
        } else if (numberArray.length === 2 && Number(numberArray[0]) === 1){
            return `${age} лет`;
        } else if (numberArray.length >= 2 && numberArray.length < 3) {
            if (Number(numberArray[1]) === 1) {
                return `${age} год`;
            } else if (Number(numberArray[1]) > 1 && Number(numberArray[1]) <= 4) {
                return `${age} года`;
            } else {
                return `${age} лет`;
            }
        }
        // return `Возраст: ${age}, ${ends}`;
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h1>Карточка студента</h1>
                    {!userData
                        ? (<h5>Нет данных</h5>)
                        : (
                            <div>
                                <p><b>Имя:</b> {userData.name}</p>
                                <p><b>Фамилия:</b> {userData.surname}</p>
                                <p><b>Год рождения:</b> {userData.year}{` (${fullAge()})`}</p>
                                <p><b>Портфолио:</b> {userData.link}</p>
                            </div>
                        )}
                    <button
                        className="btn btn-primary mx-auto"
                        onClick = {handleClick}
                    >
                        {buttonName}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
