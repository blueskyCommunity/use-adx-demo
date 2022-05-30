import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const UserCard = ({ user, type, handleSubmit }) => {
  const { username, did } = user;

  const navigate = useNavigate();

  const handleViewFeed = () => {
    navigate(`/feed/${username.split("@")[0]}/${did.replace("did:key:", "")}`);
  };

  const handleFollow = async () => {
    const baseUrl = "http://localhost:5000";
    const res = await axios.post(`${baseUrl}/api/follow`, {
      username,
    });
    navigate("/follows");
  };

  const handleUnFollow = async () => {
    const baseUrl = "http://localhost:5000";
    const res = await axios.post(`${baseUrl}/api/unfollow`, {
      username,
    });
    if (res.data.status === "success") handleSubmit();
  };

  return (
    <Card sx={{ border: 1, mb: 3 }}>
      <Box display="flex" justifyContent="space-between" sx={{ mx: 5, my: 4 }}>
        <Box display="flex" alignItems="center">
          <Typography
            component="span"
            variant="h5"
            sx={{ mr: 1, fontWeight: "bold" }}
          >
            {username.split("@")[0]}
          </Typography>
          <Typography component="span" variant="h5">
            {type === "followers" ? "follows you." : "followed by you"}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          {type === "followers" ? (
            <Button variant="outlined" color="success" onClick={handleFollow}>
              Follow
            </Button>
          ) : (
            <Button variant="outlined" color="error" onClick={handleUnFollow}>
              Unfollow
            </Button>
          )}
          <Button variant="outlined" onClick={handleViewFeed} sx={{ mt: 1 }}>
            View Feed
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default UserCard;
