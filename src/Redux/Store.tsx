import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Reducer/Layout/LayoutSlice";
import ThemeCustomizerSlice from "./Reducer/Layout/ThemeCustomizerSlice";
import HeaderBookmarkSlice from "./Reducer/Layout/HeaderBookmarkSlice";

const Store = configureStore({
  reducer:{
    layout: LayoutSlice,
    themeCustomizer: ThemeCustomizerSlice,
    headerBookMark: HeaderBookmarkSlice,
  }
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
