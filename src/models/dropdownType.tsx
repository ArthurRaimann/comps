export interface DropdownType {
    options: DropdownContent[],
    value: DropdownContent | null,
    onChange: Function
}

export interface DropdownContent {
    label: string,
    value: string
}