import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsAsync,
  selectLimit,
  selectPage,
  selectStatus,
} from "../posts/postsSlice";
import Loader from "../../UI/Loader";
import Navbar from "../../UI/NavBar";
import { fetchUsersAsync } from "../users/usersSlice";
import {
  fetchPhotosAsync,
  selectLimitPhotos,
  selectPagePhotos,
} from "../photos/photosSlice";

const AppRouter = () => {
  const status = useSelector(selectStatus);
  const pagePosts = useSelector(selectPage);
  const limitPosts = useSelector(selectLimit);
  const pagePhotos = useSelector(selectPagePhotos);
  const limitPhotos = useSelector(selectLimitPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync({ page: pagePosts, limit: limitPosts }));
    dispatch(fetchUsersAsync());
    dispatch(fetchPhotosAsync({ page: pagePhotos, limit: limitPhotos }));
  }, [dispatch, pagePosts, limitPosts, pagePhotos, limitPhotos]);

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="*" element={<Posts />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default AppRouter;
