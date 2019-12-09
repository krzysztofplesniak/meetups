import React from 'react';
import { css } from '@emotion/core';
import { MoonLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    top: 200px;
`;

export const Loading = () => {
    
  return (
    <div className='sweet-loading'>
      <MoonLoader css={override} sizeUnit={'px'} size={150} color={'#123abc'} />
    </div>
  );
};
