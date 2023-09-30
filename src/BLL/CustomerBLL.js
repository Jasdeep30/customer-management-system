 
export var cusArr=[];
export function addCustomer(idInput,nameInput,addressInput,mobileNoInput){
 var cus={id:idInput,name:nameInput,address:addressInput,mobileNo:mobileNoInput};
 cusArr.push(cus);
  
}
export function searchCustomer(id){
//    var cus=cusArr.find(e=>e.id==id);
for(var cus of cusArr){
    if(cus.id==id){
        return cus;
    }
}
}

// export function modifyCustomer(id,name,address,mobileNo){
// var cus=cusArr.find(e=>e.id==id);
// cus.name=name;
// cus.address=address;
// cus.mobileNo=mobileNo;
// }

 
export function deleteCustomer(id){
    for(let i=0;i<cusArr.length;i++){
        if(cusArr[i].id==id){
            cusArr.splice(i,1);
            return "customer deleted successfully"
        }
        return "id not found";
    }
}