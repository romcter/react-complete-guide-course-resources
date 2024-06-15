import {NavLink} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import React from "react";

const MainNavigation: React.FC = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/messages"
                            className={({isActive}) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/friends"
                            className={({isActive}) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Friends
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
