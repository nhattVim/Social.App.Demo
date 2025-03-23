import { Box, Container, Grid2 } from "@mui/material";
import React from "react";
import { PostList } from "../components/PostList";
import Sidebar from "../components/SideBar";

export const Home = () => {
  return (
    <Container maxWidth="xl" sx={{marginTop: "80px", marginBottom: "40px"}}>
      <Grid2 container spacing={4}>
        <Grid2 size={{md:3}}>
          <Sidebar />
        </Grid2>
        <Grid2 size={{md:6}}>
          <PostList />
        </Grid2>
        <Grid2 size={{md:3}}>

        </Grid2>
      </Grid2>
    </Container>
  );
};
