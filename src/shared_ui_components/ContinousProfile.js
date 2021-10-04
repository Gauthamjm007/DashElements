import styled from "styled-components";

const RouteList = styled.ul`
  list-style: none;
  font-family: "Roboto", sans-serif;
  padding: 9px 0 5px 0;
  margin: 0;
`;

const RouteContinouseItem = styled.li`
  padding: 16px 16px 16px 68px;
  position: relative;
  line-height: 16px;
  color: #000000;
  cursor: pointer;
  background: #fff;
  margin-bottom: 16px;
  margin-right: ${(props) => (props.full ? "0px" : "16px")};
  border-radius: ${(props) => (props.full ? "5px 0px 0px 5px" : "5px")};

  &::after {
    position: absolute;
    left: 39px;
    top: 27px;
    content: "";
    width: 1px;
    height: calc(100% + 10px);
    background-color: #e6ebf0;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 9;
  }
`;

export { RouteList, RouteContinouseItem };
