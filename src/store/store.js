import { configureStore } from "@reduxjs/toolkit";
import navOpen from "./slice/navOpen";

export default configureStore({
  reducer: {
    navOpen: navOpen,
  },
});
