import { number } from "yup"

export type FieldType = "text" | "email" | "password" | "tel" | "date" |
    "number" | "radio" | "checkbox" | "chip" | "chipinput" | "select" | "range"

export interface Field {
    id: string
    name: string
    label: string
    type?: FieldType
    placeholder?: string
    hint?: string
    colors?: string[] //bg, focus, blur
    width?: string
    height?: string
    min?: number
    max?: number
    step?: number
    variant?: "outlined" | "standard" | "normal"
    validate?: string[]
    leadingIcon?: boolean
    trailingIcon?: boolean
    validators?: any[]
    onChange?: null
    onFocus?: null
    onBlur?: null
    wrapperClass?: string
    inputClass?: string
    labelClass?: string
    hintClass?: string
    iconsClass?: string
    leadingIconClass?: string
    trailingIconClass?: string
}

export interface TextField extends Field {
    type: "text" | "email" | "password" | "tel" | "date"
}

export interface NumberField extends Field {
    type: "number"
    min?: 0
    max?: number
    step?: number
}

interface Items {
    id: string
    value: string
    label?: string
}

export interface SelectField extends Field {
    type: | "radio" | "checkbox" | "chip" | "chipinput" | "select"
    items: Items[]
    multiSelect?: boolean
    min?: number
    max?: number
}

export type Fields = TextField | NumberField | SelectField
export interface Row{
    class?: string
    fields: Field[]
}
export interface Section {
    title: string
    class?: string
    rows: Row[]
}


export interface FormOption {
    id: string
    sections: Section[]
    store?: any
    validateSchema?: any
}
