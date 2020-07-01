import { number } from "yup"

export type FieldType= "text"|"email"| "password"| "tel"| "date" |
"number"|"radio"|"checkbox"|"chip"|"chipinput"|"select"|"range"
export type Validate = ""

export interface Field{
    id: string
    name:string
    label: string
    type: FieldType
    placeholder?: string
    colors?: string
    width: string
    validate?:string[]
}

export interface TextField extends Field{
    type: "text"|"email"| "password"| "tel" | "date"
}

export interface NumberField extends Field{
    type: "number"
    min?: 0
    max?:number 
    step?: number
}

interface Items{
id:string
value: string 
label?: string
}

export interface SelectField extends Field {
    type: |"radio"|"checkbox"|"chip"|"chipinput"|"select"
    items: Items[]
    multiSelect?: boolean
    min?:number
    max?: number
}

export type Fields = TextField | NumberField | SelectField
export interface Section{
    title?: string
    fields: Fields[]
}


export interface FormOption{
    id: string
    title?: string
    store?: any
    sections:Section[]
    validateSchema?: any
}
