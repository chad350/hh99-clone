import React from 'react'
import styled from 'styled-components'
import pension from '../../asset/펜션.png'
import hotel from '../../asset/hotel.png'
import apartment from '../../asset/아파트.png'
import house from '../../asset/주택.png'
import guestHouse from '../../asset/게하.png'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { __loadPosts } from '../../redux/modules/post'
import { GiIsland, GiCampingTent } from 'react-icons/gi'
import { TbBeach } from 'react-icons/tb'




const Category = () => {

  // const dispatch = useDispatch();

  const selectCategory = (category) => {
    // dispatch(__loadPosts("", category));
  }

  return (
    <>
      <Container>
        <Item>
          <GiIsland style={{ width: '45px', height: '45px' }}>
            <span>섬</span>
          </GiIsland>
        </Item>
        <Item>
          <TbBeach style={{ width: '45px', height: '45px' }}>
            <span>해변 근처</span>
          </TbBeach>
        </Item>
        <Item>
          <GiCampingTent style={{ width: '45px', height: '45px' }}>
            <span>캠핑장</span>
          </GiCampingTent>
        </Item>
        <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
          <Item onClick={selectCategory("pension")}>
            <img src={pension} alt='' style={{ width: '40px', height: '40px' }} />
            <span>펜션</span>
          </Item>
        </Link>
        <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
          <Item onClick={selectCategory("hotel")}>
            <img src={hotel} alt='' style={{ width: '40px', height: '40px' }} />
            <span>호텔</span>
          </Item>
        </Link>
        <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
          <Item onClick={selectCategory("apartment")}>
            <img src={apartment} alt='' style={{ width: '40px', height: '40px' }} />
            <span>아파트</span>
          </Item>
        </Link>
        <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
          <Item onClick={selectCategory("house")}>
            <img src={house} alt='' style={{ width: '40px', height: '40px' }} />
            <span>주택</span>
          </Item>
        </Link>
        <Link to={'/Main'} style={{ textDecoration: 'none', color: '#717171' }}>
          <Item onClick={selectCategory("guestHouse")}>
            <img src={guestHouse} alt='' style={{ width: '40px', height: '40px' }} />
            <span>게하</span>
          </Item>
        </Link>
      </Container>
    </>
  )
}

export default Category

const Container = styled.div`
display: flex ;
justify-content: center;
align-content: center;
width: 100%;
position: fixed;
background-color: white;
`

const Item = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-right : 40px;
`