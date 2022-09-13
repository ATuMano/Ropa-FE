import styled from "styled-components";

export const NotificationAlertStyled = styled.div`
  background-color: ${({ theme }) => theme.successColor};
  height: 45px;
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 300px;
`;

export const Message = styled.p`
  margin: 0 auto;
  color: ${({ theme }) => theme.lightColor};
`;
