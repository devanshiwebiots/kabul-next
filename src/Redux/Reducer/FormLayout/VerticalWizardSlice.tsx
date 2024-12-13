import ShowError from "@/CommonComponents/ShowError";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  netBankingFormValues: { bankName: "", feedBack: "" },
  open: "",
};

const VerticalWizardSlice = createSlice({
  name: "VerticalWizard",
  initialState,
  reducers: {
    setNetBankingForm: (state, action) => {
      state.netBankingFormValues = action.payload;
    },
    bankingNextHandler: (state) => {
      if (state.netBankingFormValues.bankName !== "" && state.netBankingFormValues.feedBack !== "") {
        toast("Form successfully submitted");
      } else {
        ShowError();
      }
    },
  },
});

export const { setNetBankingForm, bankingNextHandler } = VerticalWizardSlice.actions;

export default VerticalWizardSlice.reducer;
