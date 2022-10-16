export default function (props) {
 return (
    <div>
        <button onClick={props.tinhDiemTB}>Calc TB</button>
        <p>Result: {props.diemTB}</p>
    </div>
     )
}