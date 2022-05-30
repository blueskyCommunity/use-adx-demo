import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const PostCard = ({ post }) => {
  const { author, text, likes, author_name } = post;
  return (
    <Card sx={{ border: 1, mb: 3 }}>
      <Box sx={{ mx: 5, my: 4 }}>
        <Typography component="div" variant="h5">
          {text}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography component="span" variant="h7" sx={{ mr: 3 }}>
            Likes: {likes}
          </Typography>
          <Typography component="span" variant="h7">
            Author: {author_name.split("@")[0]}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default PostCard;
