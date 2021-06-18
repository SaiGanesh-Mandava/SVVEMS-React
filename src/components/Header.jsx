import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  state = {};
  render() {
    return (
      <HeaderContainer>
        <HeaderLeft>
          <img src="/images/icon_h128.png" />
          <span>Enter to Learn</span>
        </HeaderLeft>
        <HeaderCenter>
          <>
            <MainHeader>Vidya Bharati's</MainHeader>
            <Subheader>Sri Vijnana Vihara Schools</Subheader>
          </>
        </HeaderCenter>
        <HeaderRight>
          <img src="/images/vidhya_bharati.png" />
          <span>Leave to Serve</span>
        </HeaderRight>
      </HeaderContainer>
    );
  }
}

export default Header;

const HeaderContainer = styled.div`
  left: 5%;
  right: 5%;
  height: 180px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: saturate(120%) blur(10px);
  box-shadow: rgb(255 255 253 / 69%) 10px 26px 30px -10px,
    rgb(253 245 253 / 73%) 0px 16px 10px -10px;
  border-radius: 10px;
  border: 4px solid transparent;
  @media (max-width: 600px) {
    height: 140px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  color: #004e89;
  @media (max-width: 1113px) {
    display: none;
  }
  > img {
    width: 160px;
    height: 100px;
    cursor: pointer;
  }
  > span {
    color: #004e89;
    padding: 0 20px;
    font-weight: bold;
  }
`;

const HeaderCenter = styled.div`
  flex: 4;
  margin-top: 4px;
  width: 750px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
`;

const HeaderRight = styled(HeaderLeft)`
  left: -2%;
  > img {
    width: 100px;
  }
`;

const MainHeader = styled.span`
  color: #d24914;
  font-weight: bold;
  font-size: 28px;
  font-family: "Roboto", sans-serif;
`;

const Subheader = styled.span`
  color: #03045e;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
