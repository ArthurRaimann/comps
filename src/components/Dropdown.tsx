import { useState } from "react"
import { DropdownType, DropdownContent } from "../models/dropdownType"

function Dropdown({options, value, onChange}: DropdownType) {

    const [isOpen,setIsOpen] = useState(false)
    

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (selectedOption: DropdownContent) => {
        onChange(selectedOption)
        setIsOpen(false)
    }

    const optionsList = options.map((option, index) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={`${index}${option.value}`}>{option.label}</div>
        )
    })

    return (
        <div className="border">
            <div onClick={handleClick}>{ value?.label ||'Select...'}</div>
            {isOpen && (<div> {optionsList}</div>)}
        </div>
    )
}

export default Dropdown