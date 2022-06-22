import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../css/SlickCategory.css'
import styled from 'styled-components'
import { GiIsland, GiCampingTent, GiForestCamp } from 'react-icons/gi'
import { TbBeach, TbBuildingCastle, TbBuildingCarousel } from 'react-icons/tb'
import { BsToggles2 } from "react-icons/bs";
import { MdHouseboat, MdApartment, MdHotel, MdHome, MdOutlineHolidayVillage, MdOutlineCottage, MdSportsGolf, MdKitesurfing, MdDownhillSkiing } from 'react-icons/md'
import { Link } from "react-router-dom";



const Container = styled.div`
display: flex ;
justify-content: center;
align-content: center;
width: 100%;
position: fixed;
background-color: white;
color: #717171;
`

const Item = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-right : 50px;
&:hover{
  text-decoration: underline;
  color: black !important;
}
`

const FilterBox = styled.div`
border: 1px solid #717171;
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
border-radius: 15px;
width: 80px;
height: 50px;
margin: auto;
font-size: 14px;
`

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Container>
          <Slider {...settings} style={{ width: '70%', margin: 'auto' }}>
            <div>
            <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
                <Item style={{ color: '#717171' }}>
                  <MdOutlineCottage style={{ width: '30px', height: '30px', margin: 'auto' }} />
                  <span style={{ color: '#717171' }}>펜션</span>
                </Item>
                </Link>
            </div>
            <div>
            <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
                <Item style={{ color: '#717171' }}>
                  <MdHotel style={{ width: '30px', height: '30px', margin: 'auto' }} />
                  <span style={{ color: '#717171' }}>호텔</span>
                </Item>
                </Link>
            </div>
            <div>
            <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
                <Item style={{ color: '#717171' }}>
                  <MdApartment style={{ width: '30px', height: '30px', margin: 'auto' }} />
                  <span style={{ color: '#717171' }}>아파트</span>
                </Item>
                </Link>
            </div>
            <div>
            <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
                <Item style={{ color: '#717171' }}>
                  <MdHome style={{ width: '30px', height: '30px', margin: 'auto' }} />
                  <span style={{ color: '#717171' }}>주택</span>
                </Item>
                </Link>
            </div>
            <div>
            <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
                <Item style={{ color: '#717171' }}>
                  <MdOutlineHolidayVillage style={{ width: '30px', height: '30px', margin: 'auto' }} />
                  <span>게하</span>
                </Item>
                </Link>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <GiIsland style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>섬</span>
              </Item>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <TbBeach style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>해변 근처</span>
              </Item>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <GiCampingTent style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>캠핑장</span>
              </Item>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <MdHouseboat style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>하우스보트</span>
              </Item>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <TbBuildingCastle style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>캐슬</span>
              </Item>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <MdSportsGolf style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>골프</span>
              </Item>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <MdKitesurfing style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>서핑</span>
              </Item>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <MdDownhillSkiing style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>스키</span>
              </Item>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <TbBuildingCarousel style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>놀이공원</span>
              </Item>
            </div>
            <div>
              <Item style={{ color: '#717171' }}>
                <GiForestCamp style={{ width: '30px', height: '30px', margin: 'auto' }} />
                <span>캠핑</span>
              </Item>
            </div>
          </Slider>
          <FilterBox>
            <BsToggles2 style={{ color: 'black', margin: '10px'}} />
            <span style={{ color: 'black' }}>필터</span>
          </FilterBox>
        </Container>
      </div>
    );
  }
}