import React from 'react';

import { Row, Col Form } from 'react-bootstrap'

function SurveyForm() {
    


    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)
      }



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