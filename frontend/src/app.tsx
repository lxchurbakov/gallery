import React from 'react';

import { Base, Text, Container } from './lib/atoms';

export default () => {
    return (
        <Container pt="128px">
            <Text size="42px" weight="600">My Application Works!</Text>
            <Text size="22px" weight="400">And that is awesome</Text>
        </Container>
    );
};
