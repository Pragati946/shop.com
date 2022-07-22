import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import ReqAuth from "../Components/ReqAuth";
import { Stack } from "@chakra-ui/layout";
import Sidebar from "../Components/Sidebar";
const MainRout = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Stack direction="row">
              <Sidebar />
              <Home />
            </Stack>
          </ReqAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRout;
