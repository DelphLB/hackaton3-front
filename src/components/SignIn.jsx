import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({});

    const {
        register,
        handleSubmit,
        formState,
        errors,
        watch,
        setError,
    } = useForm({
        mode: 'onTouched',
    });
    const {
        isSubmitting,
        isValid,
        isSubmitted,
        isSubmitSuccessful,
    } = formState;

    const onSubmit = async () => {
        await axios
            .post('https://cookeat-wild.herokuapp.com/api/users/', watch())
            .then((response) => response);
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
                type: /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]{2,3})$/,
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

    console.log(errors);

    const SetFormValidationMessage = () => {
        if (isSubmitted && !isSubmitSuccessful) {
            return (
                <div className="alert alert-success">
                    Vos informations sont incorrects
                </div>
            );
        }
    };

    return (
        <div className="SignIn">
            <form onSubmit={handleSubmit(onSubmit)}>
                {SetFormValidationMessage()}
                <div className="form-group">
                    <label htmlFor="firstname">Firstname: </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        ref={register(validation.firstname)}
                    />
                    {errors.firstname && (
                        <span>{errors.firstname.message}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname: </label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        ref={register(validation.lastname)}
                    />
                    {errors.lastname && <span>{errors.lastname.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        ref={register(validation.email)}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe : </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={register({ required: true })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default SignIn;
