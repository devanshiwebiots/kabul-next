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
import LetterBoxSlice from "./Reducer/LetterBoxSlice";
import ChatSlice from "./Reducer/ChatSlice";
import NumberingWizardSlice from "./Reducer/FormLayout/NumberingWizardSlice";
import StudentWizardSlice from "./Reducer/FormLayout/StudentWizardSlice";
import VerticalWizardSlice from "./Reducer/FormLayout/VerticalWizardSlice";

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
    letterBox:LetterBoxSlice,
    chat: ChatSlice,
    numberingWizard: NumberingWizardSlice,
    studentWizard: StudentWizardSlice,
    verticalWizard: VerticalWizardSlice,
  }
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
