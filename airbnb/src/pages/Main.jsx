//main 페이지

import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { getCookie } from "../shared/cookie";
import { __loadPosts } from "../redux/modules/post";

//컴포넌트
import Footer from "../components/Main/Footer";
import SlickCategory from "../components/Main/SlickCategory";


//css
import "../css/Main.css";
import { GoStar } from "react-icons/go";

const Main = () => {
  const { posts } = useSelector((state) => state.postReducer);
  // const avg_list = useSelector((state) => state.comment.commentAvgs);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie("Authorization");
  const location = useLocation();


  useEffect(() => {
      const sch = location.search;
      const schParams = new URLSearchParams(sch);
      const category = schParams.get("category");
      dispatch(__loadPosts(token, category));
  }, [dispatch, token, location]);

  if (!posts) return;
  return (
    <>
      <SlickCategory />
      <PostBox>
        {posts?.map((post) => {
          return (
            <Posts
              key={post.id}
              onClick={() => {
                navigate(`/detail/${post.id}`);
              }}
            >
              <img
                src={post?.photoUrls[0]}
                width="300px"
                height="300px"
                alt=""
              />
              <NameBox>
                <span>{post?.title}</span>
                <span className="right">
                  <GoStar style={{ width: "14px", marginRight: "2px" }} />
                  New
                  {/* {avg_list.totalStar === 0 ? "New" : avg_list.totalStar} */}
                </span>
              </NameBox>
              <span>₩{post?.fee}/박</span>
            </Posts>
          );
        })}
      </PostBox>
      <Footer />
    </>
  );
};

export default Main;

const PostBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  align-content: center;
  margin-top: 10px;
  margin-left: 60px;
  padding: 100px;
`;

const Posts = styled.div`
  width: 300px;
  margin-top: 32px;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
