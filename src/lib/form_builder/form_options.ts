import { number } from "yup"

export type FieldType = "text" | "email" | "password" | "tel" | "date" | "number" |
"typeahead" | "radio" | "checkbox" | "chip" | "chipinput" | "select" | "range"

export interface Field {
    id: string
    name: string
    label: string
    type?: FieldType
    placeholder?: string
    colors?: any 
    width?: string
    height?: string
    margin?: string
    min?: number
    max?: number
    step?: number
    items?: Items[] | []
    passwordChar?: string
    multiSelect?: boolean
    readonly?: boolean
    variant?: "outlined" | "material" | "default"
    mask?: Mask
    validate?: string[]
    startIcon?: boolean
    endIcon?: boolean
    validators?: any[]
   
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
    title?: string
    class?: string
    rows?: Row[]
}

export interface Mask{
    prefix?: string
    mask?: "phone"|"email"|"money"|"date"
    delimiters:[] //['.', '.', '-'],
    blocks: [] //[3, 3, 3, 2],
    pattern: string
    placeholder?: string
    suffix?: string
}

export interface FormOption {
    id: string
    sections: Section[]
    class?: string
    store?: any
    validateSchema?: any
}
