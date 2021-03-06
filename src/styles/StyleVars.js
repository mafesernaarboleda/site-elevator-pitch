import React from 'react';
import 'typeface-open-sans';
import { Global, css } from '@emotion/core';

const StyleVars = () => (
  <Global
    styles={css`
      :root {
        --accentColor: #c00;
        --backgroundColor: #FF5961;
        --lastBackgroundColor: #333;
        --transitionBackgroundColor: #ddd;
        --textColor: #FFFFFF;
        --brightTextColor: #aaa;
        --fontFamily: 'Open Sans', Arial, sans-serif;
        --linkColor: #c00;
        --hoverLinkColor: #a00;
        --brightLinkColor: #ddd;
      }
    `}
  />
);

export default StyleVars;
