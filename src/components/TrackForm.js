import React from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = () => {
    return (<>
        <Spacer>
            <Input placeholder="My Footing" />
        </Spacer>
        <Button title="Start Recording" />
    </>);
};

export default TrackForm;