import React from "react";
import { useParams } from "react-router-dom";
import TextField from "../../common/form/textField";

const UserEditPage = () => {
    const { userData } = useParams();
    const handleSubmit = (event) => {
        event.preventDafault();
        console.log(userData);
    };

    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h1>Редактировать</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField />
                        <button
                            type="submit"
                            // disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Обновить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserEditPage;
