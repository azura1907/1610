// prop là object
//objSv
//handlesvChange

export default function (props) {
    return (
        <div>
            <input  onChange={props.handleSvChange} name="name" value={props.objSv.name}/><br />
            <input  onChange={props.handleSvChange} name="diemVan" value={props.objSv.diemVan}/><br />
            <input  onChange={props.handleSvChange} name="diemToan" value={props.objSv.diemToan}/><br />
            <input  onChange={props.handleSvChange} name="diemAnh" value={props.objSv.diemAnh}/><br />
        </div>
    )
}