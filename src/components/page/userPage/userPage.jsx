import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";

const UserPage = () => {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        setUserData(() => {
            return JSON.parse(localStorage.getItem("user"));
        });
    }, []);
    
    const type = Object.keys(userData).length > 0 ? "edit" : "create";
    const buttonName = type === "edit" ? "Редактировать" : "Добавить";
    const history = useHistory();
    const handleClick = () => {
        console.log("button click", `user/${type}`);
        history.push(`/${type}`);
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h1>Карточка студента</h1>
                    {!Object.keys(userData).length > 0
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
