import styled from "styled-components";

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: 20px 40px;
`;
