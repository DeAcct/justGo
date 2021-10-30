import styled, { css } from "styled-components";

const Hold = styled.header`
  width: 100%;
  height: 4.8rem;
  border-bottom: 1px solid var(--depth-200);
  position: fixed;
  top: 0;
  left: 0;
`;
const HeaderLeft = styled.div``;

const Header = () => {
  return (
    <Hold className="inner">
      <div className="left"></div>
      <div className="right">
        <nav></nav>
      </div>
    </Hold>
  );
};

export default Header;
