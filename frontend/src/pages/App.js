import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <img
        src={process.env.PUBLIC_URL + "../logos/Logo1.png"}
        width="100%"
        height="100%"
        alt="Logo niet beschikbaar..."
      />
    </AppWrapper>
  );
};

export default App;
