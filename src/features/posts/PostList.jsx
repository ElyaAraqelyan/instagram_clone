import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import PostItem from "./PostItem";
import styles from "./Posts.module.css";
import { selectUsers } from "../users/usersSlice";
import { selectPhotos } from "../photos/photosSlice";

const PostList = () => {
  const posts = useSelector(selectPosts);

  const users = useSelector(selectUsers);

  const photos = useSelector(selectPhotos);

  return (
    <div className={styles.list}>
      {posts.map((post) => {
        const user = users.find((user) => user.id === post.id);
        const photo = photos.find((photo) => photo.id === post.id);
        return <PostItem key={post.id} post={post} user={user} photo={photo} />;
      })}
    </div>
  );
};

export default PostList;
