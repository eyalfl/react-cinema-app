/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
  test('display spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const elem = getByTestId('spinner');
    expect(elem).toBeInTheDocument();
  });

  test('Spinner contains 3 elements', () => {
    const { getByTestId } = render(<Spinner />);
    const elem = getByTestId('spinner');
    expect(elem.children.length).toBe(3);
  });
});


