import classNames from "classnames"
import { ReactNode } from "react"
import useNavigation from "../hooks/useNavigation"

interface LinkType{
    to: string,
    children: ReactNode
}

function Link({to, children}: LinkType){
    const {navigate} = useNavigation()

    const classes = classNames('text-blue-500')

    const handleClick = (event: any) => {
        if (event.metaKey || event.ctrlKey){
            return
        }
        event.preventDefault()

        navigate(to);
    }
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link