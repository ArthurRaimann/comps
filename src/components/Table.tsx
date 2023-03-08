
interface Config{
    label: string
}

function Table({data, config}: any) {

    const dataHeader = config.map((column: Config)  => {
        return(
            <th key={column.label}>{column.label}</th>
        )
    })

    const wholeTable= data.map((obj: any, index: number) => {
            const singleRow = config.map((column: any, index: number) => {
                return(
                    <td className="p-2" key={index}>{column.render(obj)}</td>
                )
        })

        return (<tr key={index} className="border-b">{singleRow}</tr>)  
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                {dataHeader}
                </tr>
            </thead>
            <tbody>{wholeTable}</tbody>
        </table>
    )
}

export default Table