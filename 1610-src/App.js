import './App.css';
// import Form from './components/input-form/Form';
import { useState } from 'react';
import InputForm from './components/intput-1610/InputForm';
import Result from './components/result/Result'
import SinhVien from './components/sinhvien/SinhVien';


function App() {
  const [listSv, setListSv] = useState([
    {name: 'khanh', lop: 'a1', xeploai: 'ngu', id: 'id -' + (Math.random()) * 9999},
    {name: 'dai', lop: 'a1', xeploai: 'kha',id: 'id -' + (Math.random()) * 9999},
    {name: 'son', lop: 'a1', xeploai: 'gioi',id: 'id -' + (Math.random()) * 9999}
  ])

  const [newSv, setNewSv] = useState('')
  const [lop, setLop] = useState('')
  const [xepLoai, setXepLoai] = useState('')

  const handleAddNewSv =  () => {
    const svObj = {
      name: newSv,
      lop: lop,
      xeploai: xepLoai
    }

    const newSvList = [...listSv, svObj]
    setListSv(newSvList);

  }

  const handleDeleteSv = (sinhVienObj) => {
    const newListSv = [...listSv].filter(svElement => {
      return svElement.id !== sinhVienObj.id})
    
      setListSv(newListSv);
    }
  

  return (
    <div className="App">
      <input onChange={(event) => setNewSv(event.target.value)} name="tenSV" value={newSv} placeholder="Ten"/>
      <input onChange={(event) => setLop(event.target.value)} name="lop" value={lop} placeholder="Lop"/>
      <input onChange={(event) => setXepLoai(event.target.value)} name="xepLoai" value={xepLoai} placeholder="Xep Loai"/>
      <button onClick={handleAddNewSv}>Add New Sv </button>

      {
        listSv.map((sv) => {
          return <SinhVien handleDeleteSv={handleDeleteSv} sv={sv}/>
        })
      }
    </div>
  );
}

export default App;
