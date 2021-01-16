import React from "react";
import "../styles/forms.css";

import { Row, Col, Form, Button } from "react-bootstrap";

function SurveyForm() {

  const onFormSubmit = e => {
    console.log("Hello")
    e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)
  }

  
  return (
    <div className="form-container">
      <Form style={{ textAlign: "left" }}
      onSubmit = {onFormSubmit}
      >
        <Form.Label as="legend"> {/*removed column sm{12}*/}
          Fill out the following form to get an estimate for when you can receive the vaccine:
        </Form.Label>

        <br />

        <Form.Group>
          <Form.Label> {/*removed  as="legend" column md={4} sm={4}*/}
            What is your age?
          </Form.Label>
          <Form.Control
            column
            sm={4}
            type="number"
            label="Age"
            name="age"
            id="formNumber"
            max="140"
            min="0"
          />
        </Form.Group>

        <br />

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>What is your occupation?</Form.Label>
          <Form.Control as="select">
            <option>Caregiver</option>
            <option>Health care worker</option>
            <option>Essential Worker (first responders, teachers, food, construction...)</option>
            <option>Student</option>
            <option>Other / work from home </option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>

        <br />

        <Form.Group>
          <Form.Label> {/*removed as="legend" column sm={12}*/}
              Do you live with anyone satisfying the following conditions?
          </Form.Label>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Younger than 2 years"
              name="Younger than 2 years"
              id="formHorizontalRadios4"
            />
            <Form.Check
              type="checkbox"
              label="Older than 60 years"
              name="Older than 60 years"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="checkbox"
              label="Suffering from a chronic illness"
              name="Suffering from a chronic illness"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="Suffering from a respiratory illness"
              name="Suffering from a respiratory illness"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Required to go to work in a high-risk setting (caregiver, health care worker, etc.)"
              name="Required to go to work in a high-risk setting"
              id="formHorizontalRadios5"
            />
          </Form.Group>
        </Form.Group>

        <br />

        <Form.Label>Check those that apply to you:</Form.Label>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="I have lung disease, heart disease, hypertension, high blood pressure, or diabetes"
              name="I have lung disease, heart disease, hypertension, high blood pressure, or diabetes"
              id="hasConditions"
            />
            <Form.Check
              type="checkbox"
              label="I've already had COVID-19"
              name="I've already had COVID-19"
              id="alreadyCovid"
            />
            <Form.Check
              type="checkbox"
              label="I am a member of the first nation's community"
              name="I am a member of the first nation's community"
              id="firstNation"
            />
        </Form.Group>

        <Button variant="primary" type="submit">
              Submit
        </Button>

      </Form>
    </div>
  );
}

export default SurveyForm;
