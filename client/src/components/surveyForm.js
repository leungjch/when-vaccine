import React from "react";

import { Row, Col, Form, Button } from "react-bootstrap";

function SurveyForm() {
  return (
    <Form style={{ textAlign: "left" }}>
      <Form.Label as="legend" column sm={12}>
        Form Subtitle
      </Form.Label>

      <Form.Group>
        <Form.Label as="legend" column md={4} sm={4}>
          What is your age?
        </Form.Label>
        <Form.Control
          column
          sm={4}
          type="number"
          label="Age"
          name="age"
          id="formNumber"
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>If you travel to work, what is your occupation?</Form.Label>
        <Form.Control as="select">
          <option>Caregiver</option>
          <option>Health care worker</option>
          <option>Essential Worker (first responders, teachers, food, construction...)</option>
          <option>Other</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>If you do not travel to work, what is your occupation?</Form.Label>
        <Form.Control as="select">
          <option>Student</option>
          <option>Other / work from home </option>
        </Form.Control>
      </Form.Group>


      <Form.Group>
        <Form.Label as="legend" column sm={12}>
            Do you live with anyone satisfying the following conditions?
        </Form.Label>
        <Form.Group>
        <Form.Check
          type="checkbox"
          label="Older than 60 years"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />

        <Form.Check
          type="checkbox"
          label="Suffering from a chronic illness"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />

        <Form.Check
          type="checkbox"
          label="Suffering from a respiratory illness"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type="checkbox"
          label="Younger than 2 years"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
        />
        <Form.Check
          type="checkbox"
          label="Required to go to work in a high-risk setting (caregiver, health care worker)"
          name="formHorizontalRadios"
          id="formHorizontalRadios5"
        />
        </Form.Group>
      </Form.Group>
      <br />

      <Form.Group>
        <Form.Check
          type="checkbox"
          label="I have lung disease, heart disease, hypertension, high blood pressure, or diabetes"
          name="formHorizontalRadios"
          id="hasConditions"
        />
        <Form.Check
          type="checkbox"
          label="I've already had COVID-19"
          name="formHorizontalRadios"
          id="alreadyCovid"
        />
        <Form.Check
          type="checkbox"
          label="I am a member of the first nation's community"
          name="formHorizontalRadios"
          id="firstNation"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
            Submit
      </Button>

    </Form>
  );
}

export default SurveyForm;
