import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../style/Navbar.css';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import {
    userConnectedAction,
    userDataAction,
} from '../../redux/actions/userAction';

const NavBar = ({ user, handleIsConnected }) => {
    const [activeId, setActiveId] = useState('home');

    const handleClick = (e) => {
        e.preventDefault();
        handleIsConnected(false);
    };

    return (
        <div className="navBar">
            <nav>
                <div className="list">
                    <div>
                        <button
                            type="button"
                            onClick={() => setActiveId('home')}
                            className={
                                activeId === 'home' ? 'items active' : 'items'
                            }
                        >
                            <Link className="linkPages" to="/">
                                <p>
                                    <AiIcons.AiOutlineHome /> &#32; ACCUEIL
                                </p>
                            </Link>
                        </button>
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={() => setActiveId('recette')}
                            className={
                                activeId === 'recette'
                                    ? 'items active'
                                    : 'items'
                            }
                        >
                            <Link className="linkPages" to="/recettes">
                                RECETTES
                            </Link>
                        </button>
                    </div>

                    {!user.connected ? (
                        <div>
                            <button
                                type="button"
                                onClick={() => setActiveId('connexion')}
                                className={
                                    activeId === 'connexion'
                                        ? 'items active'
                                        : 'items'
                                }
                            >
                                <Link className="linkPages" to="/connection">
                                    ME CONNECTER
                                </Link>
                            </button>{' '}
                            {' / '}{' '}
                            <button
                                type="button"
                                onClick={() => setActiveId('register')}
                                className={
                                    activeId === 'register'
                                        ? 'items active'
                                        : 'items'
                                }
                            >
                                <Link className="linkPages" to="/inscription">
                                    S'INSCRIRE
                                </Link>
                            </button>
                        </div>
                    ) : (
                        <div className="linkPages">
                            Bonjour {user.data.firstname} {user.data.lastname}{' '}
                            <button
                                className="log-out"
                                onClick={(e) => handleClick(e)}
                            >
                                <FiLogOut />
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    handleIsConnected: (newValue) => dispatch(userConnectedAction(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
