function isNumber(str_id){
    var str_num = document.getElementById(str_id).value
    var id_label = "label_" + str_id
    var check = true
    var notice = ""

    for (var i = 0; i < str_num.length; i++){

        if (str_num.charAt(i) < "0" || str_num.charAt(i) > "9"){
            var label = document.getElementById(id_label).innerHTML
            notice = "Giá trị nhập ở ô " + label + " không phải là số"
            document.getElementById("notice").innerHTML = notice
            check = false
            return false
            break
        }
        
    }

    if (check){

        if (document.getElementById("notice").innerHTML.substring(0, 7) === "Giá trị"){
            document.getElementById("notice").innerHTML = ""
        }
        return true
    }
    
}

function isValid(str_num1, str_num2){

    if (str_num1 === "" || str_num2 === "" ){
        document.getElementById("notice").innerHTML = "Chưa điền đủ hai số hợp lệ"
        return false
    } else if (!isNumber("num1") || !isNumber("num2")){
        document.getElementById("notice").innerHTML = "Chưa điền đủ hai số hợp lệ"
        return false
    }

    return true
}


function calc2Num(){
    var num1 = document.getElementById("num1")
    var num2 = document.getElementById("num2")
    var checked = false;
    var pheptinh = document.getElementsByName("pheptinh");
    document.getElementById("notice").innerHTML = ""

    for(var i = 0; i < pheptinh.length; i++) {

        if(pheptinh[i].checked){

            if(isValid(num1.value, num2.value)){
                var value_num1 = parseFloat(num1.value)
                var value_num2 = parseFloat(num2.value)
                
                switch (pheptinh[i].value){
                    case "cong":
                        document.getElementById("result").value = value_num1 + value_num2
                        break
                    case "tru":
                        document.getElementById("result").value = value_num1 - value_num2
                        break
                    case "nhan":
                        document.getElementById("result").value = value_num1 * value_num2
                        break
                    case "chia":
                        document.getElementById("result").value = value_num1 / value_num2
                        break
                    default:
                }
        
                checked = true
                break
            } else{
                return
            }
            
        } 
    }

    if(!checked) document.getElementById("notice").innerHTML = "Chưa chọn phép tính"

}