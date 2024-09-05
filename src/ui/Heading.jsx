import styled, { css } from "styled-components";
// import css from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 5.5em;
      text-align: center;
      font-weight: bolder;
      color: cyan;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3.5em;
      text-align: center;
      font-weight: bolder;
      color: cyan;
    `}

  ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2.5em;
      text-align: center;
      font-weight: bold;
      color: yellow;
    `};

  ${(props) =>
    props.type === "h4" &&
    css`
      font-size: 3rem;
      text-align: center;
      font-weight: bold;
    `};

  line-height: 1.5em;
`;

export default Heading;
