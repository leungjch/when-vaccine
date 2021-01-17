import React from "react";

import "../styles/forms.css";
import { getPlacement } from "../helper/algorithm.js"

import { Row, Col, Form, Button } from "react-bootstrap";

import { useHistory } from "react-router-dom";


function SurveyForm() {

  const history = useHistory();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    if (formDataObj.age === "") {
      formDataObj.age = 0;
    }

    var rawData = formDataObj;

    var age = rawData.hasOwnProperty("age") ? rawData['age'] : undefined
    var occupation = rawData.hasOwnProperty("occupation") ? rawData['occupation'] : undefined
    var residence = rawData.hasOwnProperty("residence") ? rawData['residence'] : undefined

    var isYoungerThan2Years = rawData.hasOwnProperty("younguns") ? true : false
    var isOlderThan60Years = rawData.hasOwnProperty("oldies") ? true : false
    var isChronicIllness = rawData.hasOwnProperty("chronicIllness") ? true : false
    var isRespiratoryIllness = rawData.hasOwnProperty("respIllness") ? true : false
    var isHighRiskSetting = rawData.hasOwnProperty("dangerousWork") ? true : false
    var isConditions = rawData.hasOwnProperty("IDisease") ? true : false
    var isBipoc = rawData.hasOwnProperty("bipoc") ? true : false
    var isReserve = rawData.hasOwnProperty("onReserve") ? true : false

    // Gets an object with the result (score, month, etc.)
    var placementResult = getPlacement(formDataObj);
    
    // Updates data
    var cleanData = {
      "age": parseInt(age),
      "occupation": occupation,
      "isYoungerThan2Years": isYoungerThan2Years,
      "isOlderThan60Years": isOlderThan60Years,
      "isChronicIllness": isChronicIllness,
      "isRespiratoryIllness": isRespiratoryIllness,
      "isHighRiskSetting": isHighRiskSetting,
      "isConditions": isConditions,
      "isBipoc": isBipoc,
      "isReserve": isReserve,
      "residence": residence,
      "score": placementResult.points,
      "month": placementResult.month,
      "phase": placementResult.phase
    };

    fetch('/api/sendData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"data": cleanData})
    });
    console.log(cleanData);

    // Redirect user to results page
    history.push({
      pathname: '/result',
      data: cleanData // your data array of objects
    });
  }
  
  return (
    <div className="form-container">
      <Form style={{ textAlign: "left" }}
      onSubmit = {onFormSubmit}
      >
        <Form.Label as="legend"> {/*removed column sm{12}*/}
          Fill out the following form to find out when you can receive the vaccine in Ontario:
        </Form.Label>

        <br />

        <Form.Group>
          <Form.Label> {/*removed  as="legend" column md={4} sm={4}*/}
          
            <b>What is your age?</b>
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
            defaultValue="18"
            // placeholder="18"
          />
        </Form.Group>

        <br />

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label><b>What is your occupation?</b></Form.Label>
          <Form.Control as="select" name="occupation">
            {/* <option>Select an occupation...</option> */}
            <option>Caregiver</option>
            <option>Health care worker</option>
            <option>Essential Worker (first responders, teachers, food, construction...)</option>
            <option>Student</option>
            <option>Work from home </option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>

        <br />

        <Form.Group>
          <Form.Label> {/*removed as="legend" column sm={12}*/}
              <b>Do you live with anyone satisfying the following conditions?</b>
          </Form.Label>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Younger than 2 years"
              name="younguns"
              id="formHorizontalRadios4"
            />
            <Form.Check
              type="checkbox"
              label="Older than 60 years"
              name="oldies"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="checkbox"
              label="Suffering from a chronic illness"
              name="chronicIllness"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="Suffering from a respiratory illness"
              name="respIllness"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Required to go to work in a high-risk setting (caregiver, health care worker, etc.)"
              name="dangerousWork"
              id="formHorizontalRadios5"
            />
          </Form.Group>
        </Form.Group>

        <br />

        <Form.Label><b>Check those that apply to you:</b></Form.Label>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="I have lung disease, heart disease, hypertension, high blood pressure, or diabetes"
              name="IDisease"
              id="hasConditions"
            />
            <Form.Check
              type="checkbox"
              label="I identify as BIPOC (black, Indigenous, or person of colour)"
              name="bipoc"
              id="bipoc"
            />
            <Form.Check
              type="checkbox"
              label="I am an on-reserve First ation resident"
              name="onReserve"
              id="firstNation"
            />
        </Form.Group>

        <br />

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label><b>What is your place of residence?</b></Form.Label>
          <Form.Control as="select" name="residence"
          placeholder={"Select your place of residence..."}
          >
            <option>Congregate living (Senior homes, apartments, etc.)</option>
            <option>Town home</option>
            <option>Single home</option>
            <option>None of the above</option>
          </Form.Control>
        </Form.Group>

        <br />

        <Button variant="primary" type="submit" style={{backgroundColor:"#e52e05", borderColor:"#e52e05"}}>
              Submit
        </Button>

      </Form>
    </div>
  );
}

export default SurveyForm;
