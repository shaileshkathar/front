import React, { useEffect, useState } from 'react'
import Datatable from "react-data-table-component"
import axios from "axios"


export default function Countriestable() {
    const [countries, setcountries] = useState([])

    const getcountries=async()=>{
        try {
            const response=await axios.get("https://restcountries.com/v2/all")
      setcountries(response.data)
      console.log(response.data);
        } catch (error) {
           console.log(error); 
        }
    }
    const columes=[
        {
        name:"country name",
        selector:(row)=>row.name,
        sortable:true,
    },
        {
        name:"country native name",
        selector:(row)=>row.nativeName
    },
        {
        name:"country capital",
        selector:(row)=>row.capital
    },
        {
        name:"country flag",
        selector:(row)=><img width={50}height={50} src={row.flag} alt="" />
    },{
        name:"action",
            cell:row=><button className='btn btn-primary'onClick={()=>alert(row.alpha2Code)}>edit</button>
    }
]
    useEffect(()=>{
        getcountries()
    },[])
  return <Datatable columns={columes}data={countries}pagination fixedHeader  fixedHeaderScrollHeight='450px' selectableRows selectableRowsHighlight actions={
      <button className='btn btn-sm-btn info'>export</button>
  }
  subHeader
  subHeaderComponent={<input type="text" placeholder='search here' className='form-control w-25' ></input>} /> 
  
  
}
