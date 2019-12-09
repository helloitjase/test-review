import React from 'react';
import './Preview.css';

function Preview(props) {
  const { feedback, party, emoji } = props;
  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-content-styling">
          <div className="preview-emoji">
            <div className="preview-emoji-box">
                {emoji}
            </div>
          </div>
          <div className="preview-feedback">
            <div>
              {feedback === '' ? <span className="preview-filler">Let us know what we did well or could improve...</span> : feedback}
            </div>
          </div>
          <div className="preview-party">
            <span className="preview-party-number">{party}</span> people dined here.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;
