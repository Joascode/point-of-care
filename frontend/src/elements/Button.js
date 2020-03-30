import styled from "styled-components";
import { colors } from "../globals";

export const Button = styled.button`
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const BabyBloomButton = styled(Button)`
  border-radius: 15px;
  color: white;
  margin: 0.5em;
  background-image: linear-gradient(
    ${colors.atomicTangerine},
    ${colors.wildWatermelon} 65%
  );

  @media (hover: hover) {
    &:hover {
      color: black;
      background-image: linear-gradient(
        ${colors.wildWatermelon} 65%,
        ${colors.atomicTangerine}
      );
    }
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export default null;
