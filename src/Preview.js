import React from 'react';
import './Preview.css';

function Preview(props) {
  const { review, size } = props;
  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">

          😍
          {/* Your emoji code goes here */}

        </div>
        <div className="preview-feedback">
          Let us know what we did well or could improve...
          <div>
            {review}
          </div>
        </div>
        <div className="preview-party">
         {size} people dined here.
        </div>
      </div>
    </section>
  );
}

export default Preview;
