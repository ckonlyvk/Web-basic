function CheckNum() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var notify = document.getElementById("notify");
    if (isNaN(num1.value) || isNaN(num2.value)) {
        notify.innerHTML = "Số không hợp lệ";
        return false;
    }
    return true;
}

function Calculate() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var notify = document.getElementById("notify");
    if (num1.value == "" || num2.value == "") {
        notify.innerHTML = "Hãy điền vào ô trống";
        return false;
    }

    var checkbox = document.getElementsByName("calculation");
    var calculation = ""
    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            calculation = checkbox[i].value;
            break;
        }
    }
    if (calculation == "") {
        notify.innerHTML = "Hãy chọn phép tính";
        return false;
    }
    var answer = document.getElementById("answer");
    if (calculation == "sum") {
        answer.value = parseFloat(num1.value) + parseFloat(num2.value);
    } else if (calculation == "subtract") {
        answer.value = parseFloat(num1.value) - parseFloat(num2.value);
    } else if (calculation == "multiple") {
        answer.value = parseFloat(num1.value) * parseFloat(num2.value);
    } else {
        answer.value = parseFloat(num1.value) / parseFloat(num2.value);
    }
    return true;
}

function Reset() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var notify = document.getElementById("notify");
    var answer = document.getElementById("answer");
    num1.value = num2.value = notify.innerHTML = answer.value = "";

}