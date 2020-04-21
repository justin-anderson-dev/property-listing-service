// Description component includes host-provided description of property

import React from 'react';

const Description = (props) => (
  <div className = "listing-description">
    <h3>This is the Description component.</h3>
    The first paragraph of description text appears here.
    There will be a 'read more about this space' link to expand and show all description text.
  </div>
);

export default Description;