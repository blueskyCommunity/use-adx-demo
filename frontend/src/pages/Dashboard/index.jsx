import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Navbar from "../../component/Navbar";
import CreatePostCard from "../../component/CreatePostCard";
import PostCard from "../../component/PostCard";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const baseUrl = "http://localhost:5000";
    const res = await axios.get(`${baseUrl}/api/timeline`);
    setPosts(res.data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box>
      <Navbar />
      <CreatePostCard handleSubmit={fetchPosts} />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box display="flex" flexDirection="column">
          {posts.map((post) => (
            <PostCard post={post} key={post.tid.str} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default Dashboard;
