import React, { useEffect, useState } from "react";
import UserPage from "../components/page/userPage";

const MainPage = () => {
    // Временно запушу данные в localStorage
    const user = {
        name: "Юрий",
        surname: "Митрофанов",
        year: "1987",
        link: "https://github.com/YuriyMtrofanov/"
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    });

    return (
        <UserPage />
    );
};

export default MainPage;
