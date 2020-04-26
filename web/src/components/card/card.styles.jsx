import styled from "styled-components";
import { logoColor } from "../../vars";

const getTextColor = (props) => {
  if (props.active) {
    return logoColor;
  } else {
    return "black";
  }
};

export const CardContainer = styled.div`
  margin: 15px 0px;
  height: 5vw;
  width: 60vw;
  display: flex;
  overflow: hidden;
  color: ${getTextColor};
  font-weight: 600;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  padding: 0px 15px;
  border: 1px solid #efefef;
  border-bottom: 2px solid #efefef;
  border-left: 2px solid #efefef;
  z-index: 10;
  box-shadow: 0 1px 2px rgba(16, 16, 17, 0.02),
    0 3.4px 8px rgba(16, 16, 17, 0.007), 0 12px 30px rgba(16, 16, 17, 0.003);
  font-size: 16px;
  cursor: pointer;
  font-size: 22px;
  transition-property: background-color, fill;
  transition-duration: 0.5s;

  span {
    padding: 20px;
  }
  span.green {
    color: green;
  }
  span.orange {
    color: orange;
  }
  span.red {
    color: red;
  }

  svg {
    fill: ${logoColor};
    padding: 12px;
  }

  :hover {
    background-color: black;
    color: white;
    svg {
      fill: white;
    }

    transition-property: background-color, fill;
    transition-duration: 0.7s;
  }
`;
