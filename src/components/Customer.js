import React, { useState } from 'react'
import { addCustomer } from '../BLL/CustomerBLL';
import DisplayCustomer from './DisplayCustomer';
import { cusArr } from '../BLL/CustomerBLL';
import { searchCustomer } from '../BLL/CustomerBLL';
import { deleteCustomer  } from '../BLL/CustomerBLL';
var cur_index=0;

const Customer= ()=> {
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[address,setAddress]=useState("");
    const[mobileNo,setMobileNo]=useState("");
const[customers,setCustomers]=useState([]);

    function id_change(e){
      setId(e.target.value);
    }
    function name_change(e){
      setName(e.target.value);
    }
    function address_change(e){
      setAddress(e.target.value);
    }
    function mobileNo_change(e){
      setMobileNo(e.target.value);
    }
    function showCustomer(index){
      var cus=cusArr[index];
      setId(cus.id);
      setName(cus.name);
      setAddress(cus.address);
      setMobileNo(cus.mobileNo);
    }
    function first_Click(){
      cur_index=0;
      showCustomer(cur_index);
    }
    function next_Click(e){
      if(cur_index<cusArr.length-1){
        cur_index++;
      }
      
      showCustomer(cur_index);
    }

    function previous_Click(e){
      if(cur_index>0){
        cur_index--;
      }
      
      showCustomer(cur_index);
    }

    function last_Click(e){
       cur_index=cusArr.length-1;
      
      
      showCustomer(cur_index);
    }


    function add_Click(e){
        addCustomer(id,name,address,mobileNo);
        setCustomers([...cusArr]);
        alert("customer added successfully");
    }
    function search_Click(e){
      var cus= searchCustomer(id); 
      if(cus){
        setName(cus.name);
        setAddress(cus.address);
        setMobileNo(cus.mobileNo);
      }
      else{
        alert("id not found ")
      }
    }
   
    function delete_Customer(e){
      var msg=deleteCustomer(id);
      alert(msg);
      setCustomers([...cusArr]);
    }

  return (
    <>
       <div className="main">
        <h1 className="heading"> Customer <br /> Management System</h1>
        <div className="input-element">
          <label htmlFor="txtid">ID:</label>
          <input onChange={id_change} type="text"  id="txtid" value={id} />
          <label htmlFor="txtname">Name:</label>
          <input onChange={name_change}type="text"  id="txtname" value={name} />
          <label htmlFor="txtaddress">Address:</label>
          <textarea onChange={address_change}  id="txtaddress" cols={30} rows={10}  value={address} />
          <label htmlFor="txtmobno">Mob.No:</label>
          <input onChange={mobileNo_change} type="text"  id="txtmobno" value={mobileNo}/>
        </div>
       
       
        <div className="input-btn">
          <input type="button" onClick={add_Click} defaultValue="Add" />
          <input type="button" onClick={search_Click} defaultValue="Search" />
          <input type="button"  defaultValue="Modify" />
          <input type="button" onClick={delete_Customer} defaultValue="Delete" />
        </div>
       
       
        <div className="input-btn">
          <input type="button" onClick={first_Click} defaultValue="First" />
          <input type="button" onClick={previous_Click} defaultValue="Previous" />
          <input type="button" onClick={next_Click} defaultValue="Next" />
          <input type="button" onClick={last_Click} defaultValue="Last" />
        </div>
        <DisplayCustomer customers={customers}/>
      </div>
    </>
  )
}

export default Customer
