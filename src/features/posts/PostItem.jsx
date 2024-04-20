import React from "react";
import styles from "./Posts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { Avatar } from "@mui/material";

const PostItem = ({ post, user, photo }) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <Avatar src={photo?.url} />
        <strong>{user?.username} •</strong>
      </div>
      <img src={photo?.url} alt="" />
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
      <div className={styles.description}>
        <p>
          <strong>{user?.username}</strong> {post?.body}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default PostItem;
