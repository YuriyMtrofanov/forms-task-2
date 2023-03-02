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
        console.log(userData);
    }, []);

    const handleClick = () => {
        if (userData){
            history.push(`/edit`);
        } else {
            history.push(`/create`);
        };
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
                                <p><b>Год рождения:</b> {userData.year}</p>
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
