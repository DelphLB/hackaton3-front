import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    userConnectedAction,
    userDataAction,
} from '../redux/actions/userAction';
import '../style/SignIn.css';

const SignIn = ({ user, handleIsConnected, handleUserData }) => {
    const history = useHistory();
    const { register, handleSubmit, formState, errors, watch } = useForm({
        mode: 'onTouched',
    });
    const { isSubmitted, isSubmitSuccessful } = formState;

    const onSubmit = async () => {
        await axios
            .post('https://cookeat-wild.herokuapp.com/api/users/', watch())
            .then((response) => {
                handleIsConnected(true);
                handleUserData({
                    firstname: watch('firstname'),
                    lastname: watch('lastname'),
                });
                history.push('/');
            });
    };

    const validation = {
        firstname: {
            required: 'vous devez entrer un prénom',
            minLength: {
                value: 3,
                message: 'Ce champs doit contenir au moins 3 caractères',
            },
        },
        lastname: {
            required: 'vous devez entrer un nom',
            minLength: {
                value: 3,
                message: 'Ce champs doit contenir au moins 3 caractères',
            },
        },
        email: {
            required: 'vous devez entrer un email',
            pattern: {
                value: /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]{2,3})$/,
                message: "Votre email n'est pas au bon format",
            },
        },
        password: {
            required: 'vous devez entrer un mot de passe',
            minLength: {
                value: 8,
                message:
                    'Ce champs doit contenir au moins 8 caractères alphanumériques',
            },
        },
    };

    const SetFormValidationMessage = () => {
        if (isSubmitted && !isSubmitSuccessful) {
            return (
                <div className="alert alert-danger">
                    Vos informations sont incorrects
                </div>
            );
        }
    };

    return (
        <div className="container-content-image">
            <div className="sign-in">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {SetFormValidationMessage()}
                    <div className="form-group">
                        <label htmlFor="firstname">Firstname: </label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            className={
                                errors.firstname
                                    ? 'input-error'
                                    : 'input-default'
                            }
                            ref={register(validation.firstname)}
                        />
                        {errors.firstname && (
                            <span className="feedback-error">
                                {errors.firstname.message}
                            </span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname: </label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            className={
                                errors.lastname
                                    ? 'input-error'
                                    : 'input-default'
                            }
                            ref={register(validation.lastname)}
                        />
                        {errors.lastname && (
                            <span className="feedback-error">
                                {errors.lastname.message}
                            </span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={
                                errors.email ? 'input-error' : 'input-default'
                            }
                            ref={register(validation.email)}
                        />
                        {errors.email && (
                            <span className="feedback-error">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe : </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={
                                errors.password
                                    ? 'input-error'
                                    : 'input-default'
                            }
                            ref={register(validation.password)}
                        />
                        {errors.password && (
                            <span className="feedback-error">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
