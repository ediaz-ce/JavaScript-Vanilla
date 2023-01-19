let lcd1 = '', lcd2 = '', SelectOp = null;

let del = ()=>{
    lcd1 = '';
    lcd2 = '';
    SelectOp = null;
    
}
let delBtn=()=>{
    del();
    document.getElementById("guide").innerHTML='';
    document.getElementById("op").value='';
}

let put_number = (num) =>{
    if(SelectOp == null){
        lcd1 = lcd1 + num;
        document.getElementById("op").value=lcd1;
    }
    else if(SelectOp != null){
        lcd2 = lcd2 + num;
        document.getElementById("op").value=lcd2;
    }
    
}
let calculate =(simbol) =>{
    if(lcd1 != ''){
        if(SelectOp == null){
            SelectOp = simbol;
            document.getElementById("guide").innerHTML=lcd1;
            document.getElementById("op").value='';
    
        }
        else if(simbol != '='){
            if((lcd1 != '')&&(lcd2 != '')){
                operate();
                SelectOp = simbol;
                document.getElementById("guide").innerHTML=lcd1;
                document.getElementById("op").value='';
            }
            else{
                del();
                document.getElementById("op").value='Error';
            }
        }
        else if(simbol == '='){
            
            operate();
            document.getElementById("guide").innerHTML='';
            document.getElementById("op").value=lcd1;
            del();
    
        }
    }
    else{
        document.getElementById("op").value='Error';
        del();

    }
}
let operate = ()=>{
    lcd1 = parseFloat(lcd1);
    lcd2 = parseFloat(lcd2);
    switch(SelectOp){
        case('/'):lcd1 = lcd1 / lcd2;
        break;
        case('*'):lcd1 = lcd1 * lcd2;
        break;
        case('-'):lcd1 = lcd1 - lcd2;
        break;
        case('+'):lcd1 = lcd1 + lcd2;
        break;
    }
    lcd2 = '';
}