import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Outfit', "Kiwi Maru", serif, sans-serif;
    font-weight: 400;
    letter-spacing: 0.05em;
  }
`;

// font-family: 'Kiwi Maru', serif;
// font-family: 'Outfit', sans-serif;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
