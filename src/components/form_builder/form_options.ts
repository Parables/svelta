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
    items?: Items[]
    multiSelect?: boolean
    readonly?: boolean
    variant?: "outlined" | "material" | "default"
    validate?: string[]
    leadingIcon?: boolean
    trailingIcon?: boolean
    validators?: any[]
    onInput?: null
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


interface Items {
    id: string
    value: string
    label?: string
}

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
    class?: string
    store?: any
    validateSchema?: any
}
