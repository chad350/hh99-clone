//main 페이지

import React from 'react'
import './Main.css'
import styled from "styled-components";
import logo from '../asset/자오선.png'
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
// import { __loadPosts } from '../redux/modules/post';
// import {getCookie} from "../shared/Cookie"

const Main = () => {

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const token = getCookie("Authorization")

  // useEffect(() => {
  //   dispatch(__loadPosts(token))
  // }, [dispatch]);

  // const {posts} = useSelector((state) => state.postReducer);


    return (
      <>
      <div>
      <Link to={'/PostAdd'}>
          <button>호스팅하기</button>
        </Link>
      </div>

        {/* <PostBox>
          {posts?.map((post) => (
            <Posts 
            key={post.id} 
            onClick = {() => {
              navigate(`/detail/${post.id}`)
            }}
          >
            <img src={post.images[0]} />
            <NameBox>
              <span>{post.titleInputRef}</span>
              <span className='right'>4.94 ⭐</span>
            </NameBox>
              <span>₩{post.feeInputRef}/박</span>
            </Posts>
          ))}
        </PostBox> */}
        
        <Container>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        <Item>
          <Link to={'/detail'}>
            <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMDFfNjMg%2FMDAxNjM4MzYzNDUwODQw.TsNGR6Bqko3DnkbOJ7S_7P2JVS4tavU29qU92Bf8hPUg.UXFCQuTu-Si2wkzvsqNzy45SUJqfyNU5wM7hXYHJ-V0g.JPEG.sykim243567%2FKakaoTalk_20211130_195410744_29.jpg&type=sc960_832' alt='' width='300px' height='300px' />
          </Link>
          <NameBox>
            <span>제주도</span>
            <span className='right'>4.94 ⭐</span>
          </NameBox>
          <span>₩150,000/박</span>
        </Item>
        </Container>
        <div className='footer'>
          <div className='footerLeft'>
            <span>© 2022 Airbnb, Inc. · </span>
            <span>개인정보 처리방침 · </span>
            <span>이용약관 · </span>
            <span>사이트맵 · </span>
            <span>한국의 변경된 환불 정책 · </span>
            <span>회사 세부정보</span>
          </div>
          <div className='footerRight'>
            <img src={logo} alt='' style={{width : '15px', height : '15px', marginRight : '10px'}}/>
            <span style={{marginRight : '8px'}}>한국어 (KR) </span>
            <span style={{marginRight : '15px'}}>₩  KRW</span>
            <span style={{marginRight : '8px'}}>지원 및 참고 자료 ⋀</span>
          </div>
        </div>
        <div className='bottom'>
          <div style={{borderTop : '1px solid #dddddd'}}>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2,D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호:IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트,080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다.에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</div>
        </div>

      </>
  )
}

export default Main;


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  align-content: center;
  margin-top: 10px;
  margin-left: 60px;
  padding: 20px;
`

const Item = styled.div`
  width: 300px;
  margin-top: 32px;

`

const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
