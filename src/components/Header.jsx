import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderContainer>
          <HeaderLeft>
            <img src="/images/icon_h128.png" />
            <span>Enter to Learn</span>
          </HeaderLeft>
          <HeaderCenter>
            <>
              <span>Vidya Bharati's</span>
              <span>Sri Vijana Vijara Schools</span>
            </>
          </HeaderCenter>
          <HeaderRight>
            <img src="/images/vidhya_bharati.png" />
            <span>Leave to Serve</span>
          </HeaderRight>
        </HeaderContainer>
      </div>
    );
  }
}

export default Header;

const HeaderContainer = styled.div`
  height: 260px;
  display: flex;
  align-items: center;
  background-image: url("/images/webb.png");
  background-repeat: repeat;
  background-color: blue;
  padding: 0px 86.5px 0px 86.5px;
  margin-top: 10px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  @media (max-width: 1113px) {
    display: none;
  }

  > img {
    width: 160px;
    height: 100px;
    cursor: pointer;
  }
  > span {
    color: white;
    padding: 0 25px;
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
  > img {
    width: 100px;
  }
`;
