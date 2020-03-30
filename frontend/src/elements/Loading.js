import styled from "styled-components";
import React from "react";

const LoadingImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 8%;
`;

export const Loading = () => {
  return (
    <LoadingImage
      src={process.env.PUBLIC_URL + "/loading.gif"}
      alt="Can't load gif, still no page found"
    />
  );
};
