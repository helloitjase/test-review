import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  const { write, review, size, setSize } = props;

  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        rows="4"
        onChange={(e) => {write(e.target.value)}}
        placeholder="Let us know what we did well or could improve..."
        value={review}
      />

      <label className="form-label">How many in your party?</label>
      <input className="form-input"
        type="number"
        name="party"
        min="1"
        onChange={(e) => {setSize(e.target.value)}}
        placeholder="2"
        value={size}
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
