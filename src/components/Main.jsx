import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  { img: "https://source.unsplash.com/random" },
  { img: "http://placeimg.com/640/480/animals" },
  { img: "http://placeimg.com/640/480/arch" },
  { img: "http://placeimg.com/640/480/nature" },
  { img: "https://source.unsplash.com/random" },
  { img: "https://source.unsplash.com/random" },
  { img: "https://source.unsplash.com/random" },
  { img: "https://source.unsplash.com/random" },
  { img: "https://source.unsplash.com/random" },
  { img: "https://source.unsplash.com/random" },
  { img: "https://source.unsplash.com/random" },
];

const Main = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome Ryuta!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" component={RouterLink} to="/detail">
              For more information, click here
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h1"
          variant="h3"
          // align="center"
          color="text.primary"
          gutterBottom
        >
          Today's Suggestion!
        </Typography>
        <Typography
          variant="h5"
          // align="center"
          color="text.secondary"
          paragraph
        >
          Today you are scheduled to work. I suggest you wear a blue shirt,
          black slacks, and black leather shoes. Have a nice day!
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Accept</Button>
          <Button variant="outlined">Reject</Button>
        </Stack>
      </Container>
    </>
  );
};

export default Main;