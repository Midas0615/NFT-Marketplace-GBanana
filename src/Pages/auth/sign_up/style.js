import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CrumbLink = styled(Link)`
  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  color: #868686;
  text-decoration: none;
  cursor: pointer;
  line-height: 18px;
  letter-spacing: 5%;
`;

const Heading = styled(Typography)`
  font-family: Poppins !important;
  font-weight: 700 !important;
  font-size: 36px !important;
`;

const HeadGrid = styled(Grid)`
  height: 181px;
  background-color: #fdfef0;
`;

const FormGrid = styled(Grid)`
  padding: 48px;
`;

const FormArea = styled(Grid)`
  width: 80% !important;
`;
const Row = styled(Grid)`
  margin-top: 22px !important;
`;

export { CrumbLink, Heading, HeadGrid, FormGrid, FormArea, Row };
