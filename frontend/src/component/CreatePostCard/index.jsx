import { useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CreatePostCard = ({ handleSubmit }) => {
  const [text, setText] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    const baseUrl = "http://localhost:5000";
    const res = await axios.post(`${baseUrl}/api/create-post`, {
      text,
    });

    if (res.data.status === "success") {
      handleSubmit();
      setText("");
    }
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ mt: 5, maxWidth: 550, px: 2, width: "100%" }}>
        <Typography component="div" variant="h6">
          Create Post
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <form
            onSubmit={handlePost}
            style={{ display: "flex", width: "100%" }}
          >
            <TextField
              label="Post"
              value={text}
              onChange={(e) => setText(e.target.value)}
              sx={{ flex: 1 }}
            />
            <Button
              variant="contained"
              onClick={handlePost}
              sx={{ px: 2, py: 2, ml: 3 }}
            >
              Post
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatePostCard;
