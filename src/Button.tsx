import { ButtonPropsType } from "./models/buttonModel"


function Button({children, primary, secondary, success, warning, danger, outline, rounded}: ButtonPropsType) {
    
    const count: number = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
    console.log(count)

    try {
        if(count > 1) {
            throw new Error('Only one of primary, secondary, success, warning, danger can be true')
        }
    } catch (error: any) {
        console.log('ERROR: ', error.message)
    }
 
    return <button className="text-blue-500">{children}</button>
}

export default Button