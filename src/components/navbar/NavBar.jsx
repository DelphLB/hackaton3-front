import React, { useState } from 'react';
import '../../style/Navbar.css';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';

const NavBar = () => {
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
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
