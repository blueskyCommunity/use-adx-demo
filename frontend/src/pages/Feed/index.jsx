import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Navbar from "../../component/Navbar";
import PostCard from "../../component/PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { username, id } = useParams();

  const fetchPosts = async () => {
    const baseUrl = "http://localhost:5000";
    const res = await axios.get(`${baseUrl}/api/feed?id=did:key:${id}`);
    if (res.data.status === "success") setPosts(res.data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ mb: 4, fontWeight: "semiBold" }}
        >
          {username}'s feed
        </Typography>
        {posts.length !== 0 ? (
          <Box display="flex" flexDirection="column">
            {posts.map((post) => (
              <PostCard post={post} key={post.tid.str} />
            ))}
          </Box>
        ) : (
          <Typography variant="h6" component="div" sx={{ mt: 4 }}>
            No Posts
          </Typography>
        )}
      </Container>
    </Box>
  );
};
export default Feed;
