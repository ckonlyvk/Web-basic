thong_bao = document.getElementById("thongbao");
thong_bao1 = document.getElementById("thongbao1");
function kiemtrasothuc(x, y) {
    count = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i] == ".") {
            count = count + 1;
        }
        if (count > 1) {
            thong_bao.innerHTML = "Thông báo:";
            thong_bao1.innerHTML = "Giá trị nhập ở ô ".fontcolor("red") + y.fontcolor("red").italics() + " không phải số thực".fontcolor("red");
            return false;
        }
        if (x[i] != "." && x[0] != "-" && count <= 1) {
            if (Number.isNaN(parseInt(x[i]))) {
                thong_bao.innerHTML = "Thông báo:";
                thong_bao1.innerHTML = "Giá trị nhập ở ô ".fontcolor("red") + y.fontcolor("red").italics() + " không phải số thực".fontcolor("red");
                return false;
            }
        }
    }
    thong_bao.innerHTML = "";
    thong_bao1.innerHTML = "";
    return true;
}

function thongbao() {
    thong_bao.innerHTML = "Thông báo:";
    thong_bao1.innerHTML = "Chưa chọn phép tính".fontcolor("red");
    return true;
}

function kiemtraduso() {
    if (document.getElementById("num1").value == "" || document.getElementById("num2").value == "") {
        thong_bao.innerHTML = "Thông báo:";
        thong_bao1.innerHTML = "Chưa điền đủ hai số để thực hiện phép tính".fontcolor("red");
        return false;
    }
    thong_bao.innerHTML = "";
    thong_bao1.innerHTML = "";
    return tinhtoan();
}

function tinhtoan() {
    dau = "";
    radioboxs = document.getElementsByName("pheptinh");

    for (i = 0; i < radioboxs.length; i++) {
        if (radioboxs[i].checked) {
            dau = radioboxs[i].value;
            break;
        }
    }

    if (dau == "") {
        thongbao();
        return false;
    }

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    kq = 0;
    if (dau == "+") {
        kq = num1 + num2;
    }
    else if (dau == "-") {
        kq = num1 - num2;
    }
    else if (dau == "*") {
        kq = num1 * num2;
    }
    else if (dau == "/") {
        if (num2 === 0) {
            kq = "Không hợp lệ"
        }
        else {
            kq = num1 / num2;
        }
    }
    document.getElementById("ketqua").value = kq;
    return true;
}