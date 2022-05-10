function check() {
    let kg = document.getElementById('weight').value;
    let m = document.getElementById('height').value;
    let BMI = kg / (m ** 2);
    if (BMI < 18.5) {
        document.getElementById('result').innerHTML ='Chỉ số của ban là: ' + BMI + ' Tức là bạn gầy quá, không chơi cùng đâu';
    }
    else if (18.5 < BMI <25){
        document.getElementById('result').innerHTML = 'Bình thường. hihi';
    }
    else if (25< BMI < 30){
        document.getElementById('result').innerHTML = 'Sắp thành lợn rồi ăn ít thôi.';
    }
    else if (30<BMI){
        document.getElementById('result').innerHTML = 'Ối giời ơi, bới người ta có đứa thừa cân ở đây';
    }
    else {
        document.getElementById('result').innerHTML = 'Nhập vào đi bạn ơi';
    }
}