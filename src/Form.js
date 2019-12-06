import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  const { updateInput, feedback, party } = props;
  
  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        rows="4"
        onChange={updateInput}
        placeholder="Let us know what we did well or could improve..."
        value={feedback}
      />

      <label className="form-label">How many in your party?</label>
      <input className="form-input"
        type="number"
        name="party"
        min="1"
        onChange={updateInput}
        placeholder="2"
        value={party}
      />

      <label className="form-label">How was your meal?</label>
      <div>

        *** Add Emoji selector ***
        {/* Your Code goes here */}

      </div>
    </div>
  );
}

export default Form;
