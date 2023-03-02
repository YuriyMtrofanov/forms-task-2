import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateUserPage from "../components/page/createUserPage";
import UserEditPage from "../components/page/userEditPage"

const ChangeFormPage = () => {
    const { type } = useParams();
    useEffect(() => {
        console.log(type);
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                {type === "edit"
                    ? (<UserEditPage />)
                    : (<CreateUserPage />)
                }
                </div>
            </div>
        </div>
    );
};

export default ChangeFormPage;
