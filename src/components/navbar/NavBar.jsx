import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../style/Navbar.css';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';

const NavBar = ({ user }) => {
    const [activeId, setActiveId] = useState('home');
    const [isConnected, setIsConnected] = useState(false);

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
                        type='button'
                        onClick={() => setActiveId("video")}
                        className={activeId === "video" ? "items active" : "items"}>
                        <Link className='linkPages' to='/videoChat'>
                          LIVE
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
                            </button>
                            {' / '}
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

export default connect(mapStateToProps)(NavBar);
