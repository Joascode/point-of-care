export const colors = {
  wildWatermelon: "#FA5172",
  atomicTangerine: "#FF926F",
  nightShadz: "#A3354A",
  waxFlower: "#F0B7A8",
  venus: "#907B87"
};

export const globalFont = "font-family: Lato; font-size: 1em;";

export const customScrollBar = `
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
      ${colors.atomicTangerine},
      ${colors.wildWatermelon} 65%
    );
    border-radius: 10px;
  }`;

export default null;
