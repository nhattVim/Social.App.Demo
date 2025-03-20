<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/Logo.svg'
import viteLogo from '/vite.svg'
import './App.css'
=======
import { CreatePost } from "./components/CreatePost";
import Post from "./components/Post";
import { LayoutCenter } from "./layout/LayoutCenter";
>>>>>>> 3e8f5d0 (complete layout center)

function App() {
  return (
    <>
      <LayoutCenter>
        <CreatePost />
        <Post />
        <Post />
        <Post />
        <Post />
      </LayoutCenter>
    </>
  );
}

export default App;
