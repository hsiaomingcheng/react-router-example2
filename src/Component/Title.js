import React from 'react';
import styled from 'styled-components';

function Title(props) {
    const { name } = props;

    return (
        <H1>{name}</H1>
    );
}

export default Title;

const H1 = styled.h1`
    text-align: center;
`;
