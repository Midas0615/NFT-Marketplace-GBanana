import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Label = styled(Typography)`
  font-family: Poppins;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  letter-spacing: 2% !important;
  margin-bottom: 11px !important;
`;

const Input = styled.input`
  border: 1px solid #d7d7d7 !important;
  height: 55px !important;
  border-radius: 3px !important;
  width: 100% !important;
  padding: 20px 15px !important;
`;

export { Label, Input };
