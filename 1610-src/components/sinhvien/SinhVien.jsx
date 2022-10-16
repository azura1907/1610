export default function (props) {
    return (
        <div>
            <h1>{props.sv.name}</h1>
            <p>{props.sv.lop}</p>
            <p>{props.sv.xeploai}</p>
            <p>{props.sv.id}</p>
            <button onClick={() => {
                props.handleDeleteSv(props.sv)
            }}>Delete Sv </button>
        </div>
    )
}