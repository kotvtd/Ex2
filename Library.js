
process.stdin.setEncoding("utf-8");


import fs from 'fs'
import readline from 'node:readline';
const data = fs.readFileSync('Data.json','utf-8');
const dataLbr = JSON.parse(data);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});






// function SaveJson(){
//     fs.writeFileSync('Data.json',JSON.stringify(dataLbr, null, 2),'utf-8');
// }


// for(let i =0; i < dataLbr.book.length; i++){
//     if(dataLbr.book[i].id === "B3"){
//         dataLbr.book.splice(i,1);
//     }
// }
Menu();


function CheckBook(){
    let a;
    console.log("=== Bạn Muốn Tra Cứu Gì ? ====");
    console.log("==============================");
    console.log("1 => Tra cứu tất cả sách.");    
    console.log("2 => Tra cứu theo ID sách."); 
    console.log("3 => Tra cứu theo tên sách.");
    console.log("0 => Quay lại.");
    EndLine();
    rl.question("Bạn muốn làm gì?\n", function(name){
        a = parseInt(name);
        switch(a){
            case 0:
                CheckListMenu();
                break;
            case 1:
                for(let i = 0; i < dataLbr.book.length; i++){
                    console.log(dataLbr.book[i].name);
                }
                rl.question("Nhấn Enter để quay lại", function(name){
                        CheckBook();
                });
                break;
            case 2:
                rl.question("Nhập ID sách cần tìm: ", function(name){
                    a = name;
                    let found_2 = false;
                    for(let i = 0; i < dataLbr.book.length; i++){
                        if(a === dataLbr.book[i].id){
                            let found = true;
                            let tempcount = parseInt(dataLbr.book[i].total) - parseInt(dataLbr.book[i].count);
                            console.log("=====================================");
                            console.log("ID: " + dataLbr.book[i].id);
                            console.log("Tên Sách: " + dataLbr.book[i].name);
                            console.log("Số Lượng: " + dataLbr.book[i].total);
                            console.log("Còn Lại: " + dataLbr.book[i].count);
                            console.log("Đã Cho Mượn: " + tempcount.toString());
                            if(tempcount > 0){
                                let arrayHs = dataLbr.book[i].hBorrow;
                                console.log("Học Sinh Đã Mượn: " + tempcount.toString());
                                for(let j = 0; j < arrayHs.length; j++){
                                    console.log("=> Học Sinh: " + arrayHs[j].name + 
                                        " (Mã Thư Viện: " + arrayHs[j].id + ")");
                                }
                            }
                            console.log("=====================================");
                            break;
                        }
                    }
                    if(found_2 != true){
                        console.log("Không tìm thấy sách này!!!");
                    }
                    rl.question("Nhấn Enter để quay lại", function(name){
                            CheckBook();
                    });
                });
                break;
            case 3:
                let found_3 = false;
                rl.question("Nhập tên sách: ", function(name){
                    let nameBook = name.toLowerCase().normalize('NFD').
                        replace(/[\u0300-\u036f]/g,"").replace(/đ/g, "d").trim().replace(/\s/g, "");
                    for(let i = 0; i < dataLbr.book.length; i++){
                        let temp = dataLbr.book[i].name.toLowerCase().normalize('NFD').
                        replace(/[\u0300-\u036f]/g,"").replace(/đ/g, "d").trim().replace(/\s/g, "");
                        if(temp === nameBook){
                            found_3 = true;
                            let tempcount = parseInt(dataLbr.book[i].total) - parseInt(dataLbr.book[i].count);
                            console.log("=====================================");
                            console.log("ID: " + dataLbr.book[i].id);
                            console.log("Tên Sách: " + dataLbr.book[i].name);
                            console.log("Số Lượng: " + dataLbr.book[i].total);
                            console.log("Còn Lại: " + dataLbr.book[i].count);
                            console.log("Đã Cho Mượn: " + tempcount.toString());
                            if(tempcount > 0){
                                let arrayHs = dataLbr.book[i].hBorrow;
                                console.log("Học Sinh Đã Mượn: " + tempcount.toString());
                                for(let j = 0; j < arrayHs.length; j++){
                                    console.log("=> Học Sinh: " + arrayHs[j].name + 
                                        " (Mã Thư Viện: " + arrayHs[j].id + ")");
                                }
                            }
                            console.log("=====================================");
                        }
                    }
                    if(found_3 != true){
                        console.log("Không tìm thấy sách này!!!");
                    }
                    rl.question("Nhấn Enter để quay lại!", function(name){
                        CheckBook();
                    });
                })
                break;
            default:
                CheckBook();
                break;
        }
    });
}

function CheckHS(){
    let a;

    console.log("=== Bạn Muốn Tra Cứu Gì ? ====");
    console.log("==============================");
    console.log("1 => Tra cứu tất cả học sinh.");    
    console.log("2 => Tra cứu theo ID thư viện."); 
    console.log("3 => Tra cứu theo tên học sinh.");
    console.log("0 => Quay lại.");
    EndLine();
    rl.question("Bạn muốn làm gì?\n", function(name){
        a = parseInt(name);
        switch(a){
            case 0: 
                CheckListMenu();
                break;
            case 1: 
                for(let i =0; i < dataLbr.hBorrow.length; i++){
                    console.log("Học sinh: " + dataLbr.hBorrow[i].name + " (Mã thư viện: " + dataLbr.hBorrow[i].id + ")");
                }
                rl.question("Nhấn Enter để quay lại", function(name){
                    if(true){
                        CheckBook();
                    }
                });
                break;
            case 2:
                let found_2 = false;
                rl.question("Nhập ID thư viện của học sinh cần tìm: ", function(name){
                    a = name;
                    for(let i = 0; i < dataLbr.hBorrow.length; i++){
                        if(a === dataLbr.hBorrow[i].id){
                            found_2 = true;
                            console.log("===================================");
                            console.log("Học sinh:" + dataLbr.hBorrow[i].name);
                            console.log("Mã thư viện:" + dataLbr.hBorrow[i].id);
                            console.log("Số sách đã mượn: " + dataLbr.hBorrow[i].total);
                            if(parseInt(dataLbr.hBorrow[i].total) > 0){
                                for(let j = 0; j < dataLbr.hBorrow[j].bBorrow.length; j++){
                                    console.log("   => " + dataLbr.hBorrow[i].bBorrow[j]);
                                }
                            }
                            console.log("===================================");
                            break;
                        }
                    }
                    if(found_2 != true){
                        console.log("Không có học sinh nào có ID này!!!")
                    }
                    rl.question("Nhấn Enter để quay lại!", function(name){
                            CheckHS();
                    });
                });
                break;
            case 3:
                let found_3 = false;
                rl.question("Nhập tên của học sinh cần tìm: ", function(name){
                    let nameHS = name.toLowerCase().normalize('NFD').
                        replace(/[\u0300-\u036f]/g,"").replace(/đ/g, "d").trim().replace(/\s/g, "");
                    for(let i = 0; i < dataLbr.hBorrow.length; i++){
                        let temp = dataLbr.hBorrow[i].name.toLowerCase().normalize('NFD').
                        replace(/[\u0300-\u036f]/g,"").replace(/đ/g, "d").trim().replace(/\s/g, "");
                        if(temp === nameHS){
                            found_3 = true;
                            console.log("===================================");
                            console.log("Học sinh: " + dataLbr.hBorrow[i].name);
                            console.log("Mã thư viện: " + dataLbr.hBorrow[i].id);
                            console.log("Số sách đã mượn: " + dataLbr.hBorrow[i].total);
                            if(parseInt(dataLbr.hBorrow[i].total) > 0){
                                for(let j = 0; j < dataLbr.hBorrow[j].bBorrow.length; j++){
                                    console.log("   => " + dataLbr.hBorrow[i].bBorrow[j]);
                                }
                            }
                            console.log("===================================");
                        }
                    }
                    if(found_3 != true){
                        console.log("Không có học sinh nào có ID này!!!")
                    }
                    rl.question("Nhấn Enter để quay lại!", function(name){
                            CheckHS();
                    });
                });
                break;
            default:
                CheckHS();
                break;
        }
    })
}

function CheckListMenu(){
    let a;
    console.log("=== Bạn Muốn Tra Cứu Gì ? ====");
    console.log("==============================");
    console.log("1 => Tra cứu sách.");    
    console.log("2 => Tra cứu người mượn sách."); 
    console.log("0 => Quay lại Menu.");   
    EndLine();
    rl.question("Ban Muon Lam Gi? \n", function(name){
        a = parseInt(name);
        switch(a){
            case 1:
                CheckBook();
                break;
            case 2:
                CheckHS();
                break;
            case 0:
                Menu();   
                break;
            default :
                CheckListMenu();
                break;
        }
    });
}

function EndLine(){
    console.log("==============================");
    console.log("Bạn hãy nhập lựa chọn phù hợp:");
}

function Menu(){
    let a;
    for(let i = 0; i> dataLbr.book.length; i++){
                    console.log(dataLbr.book[i].name);
    }
    console.log("=== Chào Mừng Bạn Đến Với Thư Viện ====");
    console.log("         Bạn Muốn Làm Gì ?             ");
    console.log("1 => Tra cứu.");    
    console.log("2 => Tra cứu người mượn sách.");    
    console.log("3 => Thêm sách vào thư viện.");    
    console.log("4 => Thêm thông tin mượn sách.");    
    EndLine();    
    rl.question("Ban muon lam gi? \n", function(name){
        a = parseInt(name);
        console.log(a);
        switch(a){
            case 0:
                rl.close();
                break;
            case 1:
                CheckListMenu();
                break;
            case 2:
                rl.close();
                break;
            default:
                Menu();
                break;
        }
    });

}
