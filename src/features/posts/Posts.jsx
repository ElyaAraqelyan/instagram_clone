import React from "react";
import styles from "./Posts.module.css";

import PostList from "./PostList";

const Posts = () => {
  return (
    <div className={styles.posts}>
      <PostList />
    </div>
  );
};

export default Posts;
