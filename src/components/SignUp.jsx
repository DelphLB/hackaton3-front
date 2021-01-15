import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import {
    userConnectedAction,
    userDataAction,
} from '../redux/actions/userAction';
import '../style/SignIn.css';

const SignUp = ({ user, handleIsConnected, handleUserData }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
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
                        handleIsConnected(true);
                        handleUserData({
                            firstname: data.firstname,
                            lastname: data.lastname,
                        });
                    });
            });
    };

    return (
        <div className="sign-up">
            {user.connected && <Redirect to="/" />}
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

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    handleIsConnected: (newValue) => dispatch(userConnectedAction(newValue)),
    handleUserData: (newValue) => dispatch(userDataAction(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
