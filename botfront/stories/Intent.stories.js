import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Label,
} from 'semantic-ui-react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Intent from '../imports/ui/components/utils/Intent';
import { IntentContext } from '../imports/ui/components/utils/Context';

storiesOf('Intent', module)
    .addDecorator(withKnobs)
    .addDecorator(story => (
        <IntentContext.Provider value={{ options: ['Intent 1', 'Intent 2', 'Intent 3'] }}>
            {story()}
        </IntentContext.Provider>
    ))
    .addDecorator(renderLabel => <Label>Please enter a value {renderLabel()}</Label>)
    .add('with props', () => (
        <>
            <Intent value='Intent 1' size='mini' allowEditing={boolean('allowEditing', false)} allowAdditions={boolean('allowAdditions', false)} />
        </>
    ));
