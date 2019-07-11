import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Label,
} from 'semantic-ui-react';
import Intent from '../imports/ui/components/utils/Intent';

storiesOf('Intent', module)
    .addDecorator(renderLabel => <Label>Please enter a value {renderLabel()}</Label>)
    .add('default', () => <Intent />)
    .add('with value', () => (
        <>
            <Intent value='Intent 1' size='mini' options={['Intent 1', 'Intent 2', 'Intent 3']} />
            <Intent value='Intent 1' size='mini' options={['Intent 1', 'Intent 2', 'Intent 3']} allowEditing />
        </>
    ));
