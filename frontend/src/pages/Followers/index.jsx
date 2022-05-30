import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Navbar from "../../component/Navbar";
import UserCard from "../../component/UserCard";

const Followers = () => {
  const [followers, setFollowers] = useState([]);

  const fetchFollowers = async () => {
    const baseUrl = "http://localhost:5000";
    const res = await axios.get(`${baseUrl}/api/list-followers`);
    setFollowers(res.data.data);
  };

  useEffect(() => {
    fetchFollowers();
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
          Followers
        </Typography>
        <Box display="flex" flexDirection="column">
          {followers.map((user) => (
            <UserCard user={user} type="followers" key={user.did} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default Followers;
