import React from "react";
import styled from "styled-components";
import { formatDate } from "../utils";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0;
`;

const InnerElement = styled.div`
  margin: 0 1em;
`;

const DataElement = ({ data, divergent, index }) => {
  const color = divergent ? "Red" : "Green";

  if (data && typeof data !== undefined) {
    const date = formatDate(data.date_of_measurement);
    return (
      <Wrapper>
        <InnerElement>
          <img
            src={
              process.env.PUBLIC_URL + `../icons/icon${color}CircleOutline.png`
            }
            alt="Hier moest een picca komen"
          />
        </InnerElement>
        <InnerElement> {date} </InnerElement>
        <InnerElement>meting {index}</InnerElement>
      </Wrapper>
    );
  } else {
    return <Wrapper>Geen data</Wrapper>;
  }
};

export default DataElement;
