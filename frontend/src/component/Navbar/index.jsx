import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const navigate = useNavigate();

  const handleDestroy = async () => {
    const baseUrl = "http://localhost:5000";
    try {
      await axios.get(`${baseUrl}/api/destroy`);
    } catch (err) {
      window.localStorage.clear();
      navigate("/");
    }
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 10 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              ADX Feed
            </Link>
          </Typography>
          <Box display="flex" alignItems="center">
            <Link to="/follows" style={{ textDecoration: "none" }}>
              <Typography
                component="div"
                variant="h6"
                sx={{ color: "white", mr: 4 }}
              >
                Follows
              </Typography>
            </Link>
            <Link to="/followers" style={{ textDecoration: "none" }}>
              <Typography
                component="div"
                variant="h6"
                sx={{ color: "white", mr: 4 }}
              >
                Followers
              </Typography>
            </Link>
            <Button
              variant="contained"
              color="error"
              onClick={handleDestroy}
              sx={{ px: 2, py: 2 }}
              disableElevation
            >
              Destroy
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
