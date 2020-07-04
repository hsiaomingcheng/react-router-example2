import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">首頁</Link>
                </li>
                <li>
                    <Link to="/about">關於我</Link>
                </li>
                <li>
                    <Link to="/news">最新消息</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
