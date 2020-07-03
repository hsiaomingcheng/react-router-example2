import React from 'react';
import styled from 'styled-components';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.porps = props;
    }

    render() {
        return (
            <div>
                <Title>React-router練習</Title>
            </div>
        );
    }
}

export default Home;

const Title = styled.h1`
    text-align: center;
`;
