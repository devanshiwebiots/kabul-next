import { FormValidationProp, TooltipValidationProp } from "@/Types/Forms";
import * as Yup from "yup";

export const BrowserStateList = ["U.K", "Thailand", "India", "U.S"];

export const BrowserRadioList = [
    {
        id: 1,
        text: "Visa",
    },
    {
        id: 2,
        text: "MasterCard",
    },
    {
        id: 3,
        defaultChecked: true,
        text: "Paypal",
    },
];

export const BrowserDefaultData = [
    {
        text: "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? Depending on your browser and OS,While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.",
    },
];

export const TooltipInitialValue: TooltipValidationProp = { firstname: "", lastname: "", username: "", city: "", state: "", zip: "" };

export const TooltipValidationSchema = Yup.object().shape({
    firstname: Yup.string().min(2).required(),
    lastname: Yup.string().min(2).required(),
    username: Yup.string().min(2).required(),
    city: Yup.string().min(2).required(),
    state: Yup.string().min(2).required(),
    zip: Yup.string().min(2).required(),
});

export const TooltipValidations = [
    {
        text: "If your form layout allows it, you can swap the ",
        code: "{valid|invalid}",
    },
    {
        text: "-feedback classes for",
        code: ".{valid|invalid}",
    },
    {
        text: "-tooltip classes to display validation feedback in a styled tooltip. Be sure to have a parent with ",
        code: "position: relative",
    },
    {
        text: " on it for tooltip positioning.",
    },
];

export const TooltipValidationStateList = ["U.K", "India", "Thailand", "Newyork"];

export const ValidationFormStateList = ["Choose...", "U.K", "India", "Thailand", "Newyork"];

export const ValidationStateList = ["Kabul", "Tivo", "Wingo"];

export const ValidationRadioList = [
    {
        id: 1,
        text: "MasterCard",
    },
    {
        id: 2,
        defaultChecked: true,
        text: "VISA",
    },
];

export const FormValidationSchema = Yup.object().shape({
    firstname: Yup.string().required("Please enter your valid name"),
    password: Yup.string().required("Please enter your valid password"),
    state: Yup.string().required("Please select a valid state."),
    city: Yup.string().required("Please provide a valid city."),
    zip: Yup.string().required("Please provide a valid zip."),
    payment: Yup.string().required(),
    theme: Yup.string().required("Invalid select feedback"),
    file: Yup.string().required("Invalid form file selected"),
    description: Yup.string().required("Please enter a message in the textarea."),
    terms: Yup.array().min(1),
});

export const ValidationFormData = [
    {
        text: "Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.Background icons for ",
        code: "<select>",
    },
    {
        text: " s are only available with ",
        code: "form-select",
    },
    {
        text: " and not ",
        code: ".form-control.",
    },
];

export const ValidationFormInitialValue: FormValidationProp = { firstname: "", password: "", state: "", city: "", zip: "", payment: "", theme: "", file: "", description: "", terms: [] };

export const FloatingSelectType = ["Open this select menu", "I", "II", "II"];

export const FloatingSelectTypeList = [
    {
        text: "Open this select menu",
    },
    {
        text: "One",
    },
    {
        text: "Two",
    },
    {
        text: "Three",
    },
];

export const FloatingInputData = [
    {
        text: "Give textual form controls like ",
        code: "<input>",
    },
    {
        text: "s and ",
        code: "<textarea>",
    },
    {
        text: "s an upgrade with custom styles, sizing, focus states, and more.",
    },
];

export const DataInputList = ["San Francisco", "New York", "Seattle", "Los Angeles", "Chicago", "India"];

export const BasicHtmlInputControlData = [
    {
        text: "Give textual form controls like ",
        code: "<input>",
    },
    {
        text: " s and ",
        code: "<textarea>",
    },
    {
        text: "s an upgrade with custom styles, sizing, focus states, and more.",
    },
];

export const EdgeDataList = ["Tivo", "Kabul", "Roxo", "Oslo", "Voxo", "Sheltos", "Petkart", "Zeta"];

export const EdgeInputStyleData = [
    {
        text: "Use the ",
        code: ".btn-pill ",
    },
    {
        text: "through defined 0px border-radius.",
    },
];

export const FileInputData = [
    {
        text: "For default file/multiple file/disabled file/small file/large file input for use ",
        code: "<input>",
    },
    {
        text: " with ",
        code: "(type='file').",
    },
];

export const FileInputDataList = [
    {
        label: "Default file input example",
    },
    {
        label: "Multiple files input example",
        multiple: true,
    },
    {
        label: "Disabled file input example",
        disabled: true,
    },
];

export const RaisedInputStyleData = [
    {
        text: "Use the ",
        code: "input-air-* ",
    },
    {
        text: "through defined bottom box-shadow.",
    },
];

export const RaisedDataList = ["Tivo", "Roxo", "Wingo", "Kabul", "Koho"];

export const RaisedColorDataList = ["Red", "Yellow", "Orange", "White", "Black", "Gray", "Brown", "Purple", "White"];

export const BasicFormData = [
    {
        text: "Use the ",
        code: ".form-label ",
    },
    {
        text: "and ",
        code: ".form-control ",
    },
    {
        text: "through create basic form.",
    },
];

export const FlatInputTypeData = [
    {
        text: "Use the ",
        code: ".btn-square ",
    },
    {
        text: "through defined 0px border-radius.",
    },
];

export const FlatInputStyleList = ["I", "II", "III", "IV", "V"];

export const FlateStyleDataList = ["Landscape", "Portrait", "Oil Painting", "Abstract art", "Acrylic"];

export const FloatingFormData = [
    {
        text: "Use the ",
        code: ".form-floating",
    },
    {
        text: " through create floating form.",
    },
];

export const FormControlSizingData = [
    {
        text: "Set heights using classes like ",
        code: ".form-control-lg",
    },
    {
        text: " and ",
        code: ".form-control-sm",
    },
];

export const SizingFormData = [
    {
        code: ".form-select",
    },
    {
        text: " to trigger the custom styles. You may also choose from small and large custom selects to match our similarly sized text inputs. class:- ",
        code: "[form-select-lg/form-select-sm].",
    },
];

export const SizingFormDataList = ["What's Your Hobbies", "Kho-kho", "Reading Books", "Creativity"];

export const InputMaskData = [
    {
        text: "Input Mask Used In Form-Validations,Forms,Card-Details,And Etc.",
    },

];
