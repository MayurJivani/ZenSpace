import React, { useState } from 'react'
import './navbar.css';

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div className="App">
            <div className={sidebar ? 'sidebar open' : 'sidebar close'}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src="./logo.svg" alt="" />
                        </span>

                        <div className="text logo-text">
                            <span className="name">ZenSpace</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle' onClick={showSidebar}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        <li className="search-box">
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..." />
                        </li>

                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="/">
                                    <i className='bx bx-home-alt icon' ></i>
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/">
                                    <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                    <span className="text nav-text">Spaces</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/">
                                    <i className='bx bx-notepad icon'></i>
                                    <span className="text nav-text">Todo</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/">
                                    <i className='bx bx-heart icon' ></i>
                                    <span className="text nav-text">Likes</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/">
                                    <i className='bx bx-time  icon' ></i>
                                    <span className="text nav-text">Timer</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a href="/">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>

                        <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-moon icon moon'></i>
                                <i className='bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">Dark mode</span>

                            <div className="toggle-switch">
                                <span className="switch"></span>
                            </div>
                        </li>

                    </div>
                </div>

            </div>
        </div>

    )
}
