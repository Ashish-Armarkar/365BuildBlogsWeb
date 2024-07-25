import { useState, Suspense, lazy  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "./Components/Navbar";
import "./App.css";

const HeroArea = lazy( () => import('./Components/HeroArea' ) );
const Blogs = lazy( () => import('./Components/Blogs') );
const UserList = lazy( () => import('./Components/UserList') );
const UserDetails = lazy( () => import('./Components/UserDetails') );
const PostDetails = lazy( () => import('./Components/PostDetails') );


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <HelmetProvider>
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <BrowserRouter>
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="Main-Container">
          <Suspense fallback={ <>loading...</> }>
            <Routes>
              <Route path="/" element={<HeroArea />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/blogs/post/:id" element={<PostDetails />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
