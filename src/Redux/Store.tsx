import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Reducer/Layout/LayoutSlice";
import ThemeCustomizerSlice from "./Reducer/Layout/ThemeCustomizerSlice";
import HeaderBookmarkSlice from "./Reducer/Layout/HeaderBookmarkSlice";
import CartSlice from "./Reducer/CartSlice";
import FileManagerSlice from "./Reducer/FileManagerSlice";

const Store = configureStore({
  reducer:{
    layout: LayoutSlice,
    themeCustomizer: ThemeCustomizerSlice,
    headerBookMark: HeaderBookmarkSlice,
    cartData: CartSlice,
    fileManager: FileManagerSlice,    
  }
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
