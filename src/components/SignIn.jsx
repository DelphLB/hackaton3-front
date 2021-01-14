import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isConnected, setIsConnected] = useState(false);
    const [user, setUser] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(
                'https://cookeat-wild.herokuapp.com/api/users/login',
                formData
            )
            .then((response) => response.data)
            .then((data) => {
                axios({
                    method: 'post',
                    url: 'https://cookeat-wild.herokuapp.com/api/profile',
                    headers: {
                        Authorization: `Bearer ${data.token}`,
                    },
                })
                    .then((response) => response.data)
                    .then((data) => {
                        setIsConnected(true);
                        setUser(data);
                    });
            });
    };

    return (
        <div className="Login">
            {isConnected && <Redirect to="/connectPage" user={user} />}
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Mot de passe : </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default SignIn;
