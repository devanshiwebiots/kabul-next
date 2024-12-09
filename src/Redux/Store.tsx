import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Reducer/Layout/LayoutSlice";
import ThemeCustomizerSlice from "./Reducer/Layout/ThemeCustomizerSlice";
import HeaderBookmarkSlice from "./Reducer/Layout/HeaderBookmarkSlice";
import CartSlice from "./Reducer/CartSlice";
import ProductSlice from "./Reducer/ProductSlice";
import FilterSlice from "./Reducer/FilterSlice";
import FileManagerSlice from "./Reducer/FileManagerSlice";
import AddProductSlice from "./Reducer/AddProductSlice";
import ProjectSlice from "./Reducer/ProjectSlice";
import ChatSlice from "./Reducer/ChatSlice";

const Store = configureStore({
  reducer:{
    layout: LayoutSlice,
    themeCustomizer: ThemeCustomizerSlice,
    headerBookMark: HeaderBookmarkSlice,
    cartData: CartSlice,
    product: ProductSlice,
    filterData: FilterSlice,
    fileManager: FileManagerSlice,    
    addProduct: AddProductSlice,
    project: ProjectSlice,
    chat: ChatSlice,
  }
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
