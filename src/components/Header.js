import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { toggle } from "../store/slice/navOpen";
import Inner from "../style-utility/Inner";

const Hold = styled.header`
  ${Inner}
  width: 100%;
  height: 4.8rem;
  border-bottom: 1px solid var(--depth-200);
  background-color: var(--depth-100);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: box-shadow 100ms ease-out;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${(props) => {
    return (
      props.isScroll &&
      css`
        box-shadow: 0 -0.1rem 3rem var(--depth-200);
        border-bottom-color: transparent;
      `
    );
  }}
`;
const Logo = styled.h1`
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  left: calc(50% - 1.75rem);
  a {
    display: flex;
    width: 100%;
    height: 100%;
    svg {
      fill: var(--theme-500);
    }
  }
`;
const GnbToggleBtn = styled.button`
  width: 3.5rem;
  height: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    width: 100%;
    height: 1px;
    background-color: var(--text-900);
  }
`;

const Header = () => {
  const [isScroll, setIsScroll] = useState(window.scrollY > 0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScroll(window.scrollY > 0);
    });
  });
  const toggleGnb = useDispatch();

  return (
    <Hold isScroll={isScroll}>
      <Logo>
        <Link to="/">
          <svg viewBox="0 0 512 512">
            <path d="M429.61,288,365.32,180H294.39l26.19,44H283.5V96h-64v5.56a95.84,95.84,0,0,0-99.77,158.21A95.34,95.34,0,0,0,187.5,288h32v32.77a32,32,0,0,1-54.62,21.85l-8.49-8.48L111.13,379.4l8.49,8.49A96.73,96.73,0,0,0,187.5,416a96.39,96.39,0,0,0,96-96V288ZM199.5,224h-12a32,32,0,1,1,32-32v32Z" />
          </svg>
        </Link>
      </Logo>
      <GnbToggleBtn onClick={() => toggleGnb(toggle())}>
        <span></span>
        <span></span>
      </GnbToggleBtn>
    </Hold>
  );
};

export default Header;
