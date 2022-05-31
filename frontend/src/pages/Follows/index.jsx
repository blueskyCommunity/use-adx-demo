import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Navbar from "../../component/Navbar";
import FollowUserCard from "../../component/FollowUserCard";
import UserCard from "../../component/UserCard";

const Follows = () => {
  const [follows, setFollows] = useState([]);

  const fetchFollows = async () => {
    const baseUrl = "http://localhost:5000";
    const res = await axios.get(`${baseUrl}/api/list-follows`);
    setFollows(res.data.data);
  };

  useEffect(() => {
    fetchFollows();
  }, []);

  return (
    <Box>
      <Navbar />
      <FollowUserCard handleSubmit={fetchFollows} />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box display="flex" flexDirection="column">
          {follows.map((user) => (
            <UserCard
              user={user}
              type="follows"
              key={user.did}
              handleSubmit={fetchFollows}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default Follows;
