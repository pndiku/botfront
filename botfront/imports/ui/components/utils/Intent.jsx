import React, { useState, useContext } from 'react';
import {
    Label, Popup,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import IntentDropdown from '../nlu/common/IntentDropdown';
import { IntentContext } from './Context';

function handleOnChange(data, changeDropDownValue, changeIntent) {
    changeDropDownValue(data.value);
    changeIntent(data.value);
}

function Intent({
    value,
    size,
    allowEditing,
    allowAdditions,
    changeIntent,
}) {
    const [dropDownValue, changeDropDownValue] = useState(value);
    const { options } = useContext(IntentContext);
    const intents = options.map(intent => ({ key: intent, text: intent, value: intent }));
    return (
        <Popup
            trigger={
                <Label color='purple' size={size}>{dropDownValue}</Label>
            }
            content={
                (
                    <IntentDropdown
                        intent={dropDownValue}
                        options={[...intents, { text: dropDownValue, value: dropDownValue }]}
                        onChange={(e, data) => handleOnChange(data, changeDropDownValue, changeIntent)}
                        allowAdditions={allowAdditions}
                    />
                )
            }
            on='click'
            position='top right'
            disabled={!allowEditing}
        />
        
    );
}

Intent.propTypes = {
    value: PropTypes.object.isRequired,
    size: PropTypes.string,
    allowEditing: PropTypes.bool,
    allowAdditions: PropTypes.bool,
    changeIntent: PropTypes.func,
};

Intent.defaultProps = {
    size: 'small',
    allowEditing: false,
    allowAdditions: false,
    changeIntent: () => {},
};

export default Intent;
