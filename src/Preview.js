import React from 'react';
import './Preview.css';

function Preview(props) {
  const { feedback, party, emoji } = props;
  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          {emoji}
        </div>
        <div className="preview-feedback">
          
          <div>
            {feedback === '' ? <span>Let us know what we did well or could improve...</span> : feedback}
          </div>
        </div>
        <div className="preview-party">
         {party} people dined here.
        </div>
      </div>
    </section>
  );
}

export default Preview;
