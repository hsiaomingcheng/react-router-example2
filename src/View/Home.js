import React from 'react';

import Nav from '../Component/Nav';
import Title from '../Component/Title';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.porps = props;
    }

    render() {
        return (
            <div>
                <Title name="Home - 首頁" />

                <Nav />
            </div>
        );
    }
}

export default Home;
