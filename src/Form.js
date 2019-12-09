import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  const { emoji, updateInput, feedback, party } = props;
  
  return (
    <div className="form">
      <label className="form-label form-text-label-mobile">Your feedback</label>
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
        <div className="form-emoji">
         <label>
           <input onChange={updateInput} name="emoji" type="radio" value="😍" checked={emoji === '😍'} />
           &nbsp;Excellent 😍
         </label>
        </div>
        <div className="form-emoji">
        <label>
          <input onChange={updateInput} name="emoji" type="radio" value="😄" checked={emoji === '😄'}/>
          &nbsp;Great 😄
        </label>
        </div>
       <div className="form-emoji">
        <label>
          <input onChange={updateInput} name="emoji" type="radio" value="😊" checked={emoji === '😊'}/>
          &nbsp;Good 😊
        </label>
       </div>
       <div className="form-emoji">
        <label>
          <input onChange={updateInput} name="emoji" type="radio" value="😐" checked={emoji === '😐'}/>
          &nbsp;Okay 😐
        </label>
       </div>
       <div className="form-emoji">
        <label>
          <input onChange={updateInput} name="emoji" type="radio" value="🙁" checked={emoji === '🙁'}/>
          &nbsp;Below Standards 🙁
        </label>
       </div>
       <div className="form-emoji">
        <label>
          <input onChange={updateInput} name="emoji" type="radio" value="🤢" checked={emoji === '🤢'}/>
          &nbsp;Far Below Standards 🤢
        </label>
       </div>
      </div>

    </div>
  );
}

export default Form;
