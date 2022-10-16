import './App.css';
// import Form from './components/input-form/Form';
import { useState } from 'react';
import InputForm from './components/intput-1610/InputForm';
import Result from './components/result/Result'

function App() {
  
  const [sv, setSv] = useState({
    name: '',
    diemVan: '',
    diemToan: '',
    diemAnh: ''
  })

  const [TB, setTB] = useState(0)

  const handleSvChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setSv({
      ...sv,
      [name]: value
    })
  }

  

  const tinhDiemTB = () => {
    setTB((Number(sv.diemVan) + Number(sv.diemToan) + Number(sv.diemAnh)) /3);
  }

  return (
    <div className="App">
      <InputForm handleSvChange={handleSvChange} objSv={sv} />
      <Result tinhDiemTB={tinhDiemTB} diemTB={TB}/>
    </div>
  );
}

export default App;
