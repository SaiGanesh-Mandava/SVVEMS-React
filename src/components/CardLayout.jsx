import React, { Component } from "react";
import Card from "./Card";
import styled from "styled-components";

class CardLayout extends Component {
  state = {
    error: null,
    isLoaded: false,
    school_Name: [],
    school_Location: [],
    school_Code: [],
  };

  componentDidMount() {
    fetch("https://devapi.srivijnanavihara.com/general/home/GET_META_DATA")
      .then((res) => res.json())
      .then(
        (result) => {
          let data = result.msg.results;
          data.forEach((key, index) => {
            if (key.item === "School_Locations") {
              var location = JSON.parse(key.codes);
              this.setState({ school_Location: location, isLoaded: true });
            }
            if (key.item === "school_full_names") {
              var name = JSON.parse(key.codes);
              this.setState({ school_Name: name, isLoaded: true });
            }
            if (key.item === "School_Codes") {
              var code = JSON.parse(key.codes);
              this.setState({ school_Code: code, isLoaded: true });
            }
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, school_Code, school_Location, school_Name } =
      this.state;
    if (error) {
      return (
        <div>
          Error: {error.message} Please check your internet connection and try
          again
        </div>
      );
    } else if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <Container>
          {school_Name.map((sch, index) => (
            <Wrap>
              <div className="card-body">
                &nbsp;
                <div className="Photo">
                  <img src="https://image.slidesharecdn.com/rgvs-naaistam-part1-110111041238-phpapp01/95/rgv-naa-istam-part1-1-728.jpg?cb=1294719312" />
                </div>
                <div className="card-info">
                  <SchoolName>{sch}</SchoolName>
                  <Location>
                    <h3>
                      <span>{school_Location[index]}</span>
                    </h3>
                  </Location>
                  <Button>Visit School</Button>
                </div>
              </div>
            </Wrap>
          ))}
        </Container>
      );
    }
  }
}

export default CardLayout;

const Container = styled.main`
  padding: 0 calc(3.5vw + 5px);
  margin-top: 8%;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 1340px) and (min-width: 823px) {
    margin-top: 24.5%;
    grid-gap: 20px;

    grid-template-columns: repeat(2, minmax(0, 2fr));
  }
  @media (max-width: 822px) {
    margin-top: 35%;
    grid-gap: 20px;
    grid-template-columns: repeat(1, minmax(0, 2fr));
  }
`;

const Wrap = styled.div`
  transition: 0.3s;
  width: 40%;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  margin-bottom: 50px;

  > .card-body {
    background: #e9ecef;
    height: 430px;
    width: 280px;
    position: relative;
    margin: auto;
    top: 150px;
    bottom: 50px;
    left: 0;
    right: 0;
    border-radius: 8px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  .Photo {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 100px;
    margin: -60px auto 0;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    transform: scale(1.05);
    border-color: 3px solid rgba(249, 249, 249, 0.8);
  }

  @media (max-width: 822px) {
    .card-body {
      width: 550px;
    }
  }

  @media (max-width: 1330px) and (min-width: 823px) {
    .card-body {
      width: 450px;
    }
  }
`;

const SchoolName = styled.div`
  font-size: 31px;
  font-family: "PT Serif", serif;
  color: #002855;
  position: absolute;
  font-size: 32;
  top: 68px;
  left: 25px;
  right: 40px;

  @media (max-width: 1230px) and (min-width: 823px) {
    top: 150px;
    text-align: center;
  }
`;

const Location = styled.div`
  display: flex;
  background-color: #ffe5d9;

  align-items: center;

  h3 {
    top: 320px;
    background-color: #ffe5d9;
    position: absolute;
    width: 100%;
    text-align: center;
    border-bottom: 5px solid #03045e;
    line-height: 0.09em;
    margin: 10px 0 25px;

    span {
      background: #90e0ef;
      font-family: "Cinzel", serif;
      padding: 4px 10px;
      margin-top: 10%;
    }
  }
`;

const Button = styled.div`
  position: absolute;
  bottom: 25px;
  display: flex;
  margin-left: 35%;
  cursor: pointer;
  letter-spacing: 1.3px;
  background-color: #f7c59f;
  font-size: 20px;
  border-radius: 15px 15px 15px 15px;
  padding: 10px 20px;
  color: #004e89;
  font-family: "Work Sans", sans-serif;
  box-shadow: rgb(247 197 159 / 90%) 0px 20px 30px -10px,
    rgb(247 197 159 / 95%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    background: #ec7113;
  }

  @media (max-width: 1230px) and (min-width: 823px) {
    margin-left: 65%;
    bottom: 10px;
    font-size: 20px;
  }
`;
