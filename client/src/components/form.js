import React from 'react';

import { Form } from 'react-bootstrap'

function SurveyForm() {
    
    return(
    <Form>
    {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
        <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
        />

        <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
        />
        </div>
    ))}
    </Form>
    )
}

export default SurveyForm