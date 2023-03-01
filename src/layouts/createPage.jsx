import React from "react";
import { useParams } from "react-router-dom";
import CreateUserPage from "../components/page/createUserPage";
import UserEditPage from "../components/page/userEditPage"

const CreatePage = () => {
    const { type } = useParams();
    return (
        <>
            {type === "edit"
                ? (<UserEditPage />)
                : (<CreateUserPage />)
            }
        </>
    );
};

export default CreatePage;
