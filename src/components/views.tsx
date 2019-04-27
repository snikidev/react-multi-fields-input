import * as React from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  font-size: 1em;
  line-height: 50px;
  height: 50px;
  position: relative;
  border: 1px solid #dcdee0;
  border-radius: 0.125rem;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  padding: 0 1rem;
  max-width: 80px;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    width: 30%;
  }

  ${({ error }: { error: boolean }) =>
    error &&
    css`
      border-color: #f96478;
    `}
`;
