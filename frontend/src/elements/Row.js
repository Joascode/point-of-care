import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || "space-between"};
  align-items: ${props => props.alignItems || "center"};
  margin-bottom: 1rem;
`;
