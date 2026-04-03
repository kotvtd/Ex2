


import fs from 'fs'
const data = fs.readFileSync('Data.json','utf-8');
const dataLbr = JSON.parse(data);
import readline from 'node:readline';

process.stdin.setEncoding("utf-8");





const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ban muon lam gi? \n", function(name){
    console.log(name+"2323421");
    rl.close();
});
// function SaveJson(){
//     fs.writeFileSync('Data.json',JSON.stringify(dataLbr, null, 2),'utf-8');
// }


// for(let i =0; i < dataLbr.book.length; i++){
//     if(dataLbr.book[i].id === "B3"){
//         dataLbr.book.splice(i,1);
//     }
// }
//Menu();
function Menu(){
    console.log("=== Chào Mừng Bạn Đến Với Thư Viện ====");
    console.log("         Bạn Muốn Làm Gì ?             ");
    console.log("1 => Tra cứu sách.");    
    console.log("2 => Tra cứu người mượn sách.");    
    console.log("3 => Thêm sách vào thư viện.");    
    console.log("4 => Thêm thông tin mượn sách.");    
    console.log("Bạn hãy nhập lựa chọn phù hợp:");    

}
