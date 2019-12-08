import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  const { emoji, updateInput, feedback, party } = props;
  
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
       <label>
         <input onChange={updateInput} name="emoji" type="radio" value="😍" checked={emoji === '😍'} />
         Excellent 😍
       </label>
       <label>
         <input onChange={updateInput} name="emoji" type="radio" value="😄" checked={emoji === '😄'}/>
         Great 😄
       </label>
       <label>
         <input onChange={updateInput} name="emoji" type="radio" value="😊" checked={emoji === '😊'}/>
         Good 😊
       </label>
       <label>
         <input onChange={updateInput} name="emoji" type="radio" value="😐" checked={emoji === '😐'}/>
         Okay 😐
       </label>
       <label>
         <input onChange={updateInput} name="emoji" type="radio" value="🙁" checked={emoji === '🙁'}/>
         Below Standards 🙁
       </label>
       <label>
         <input onChange={updateInput} name="emoji" type="radio" value="🤢" checked={emoji === '🤢'}/>
         Far Below Standards 🤢
       </label>
      </div>

    </div>
  );
}

export default Form;
