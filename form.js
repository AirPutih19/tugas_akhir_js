function buat_login(){
    var elem = document.getElementById("X");
    elem.parentElement.removeChild(elem);

    var p = document.createElement("P");
    p.className = "tulisan_login";
    p.innerHTML = "Silahkan mendaftar";
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p)
    var form = document.createElement("FORM");
    element.appendChild(form);
    var label = document.createElement("label");
    label.innerHTML="Nama User";
    form.appendChild(label);
    var input_username = document.createElement("input");
    input_username.type = "text";
    input_username.name = "username";
    input_username.className = "form_login";
    input_username.placeholder = "Nama User..";
    form.appendChild(input_username);

    var label1 = document.createElement("label");
    label1.innerHTML="Nomor Handphone";
    form.appendChild(label1);
    var input_nomorhandphone = document.createElement("input");
    input_nomorhandphone.type = "tel";
    input_nomorhandphone.name = "username";
    input_nomorhandphone.className = "form_login";
    input_nomorhandphone.placeholder = "Nomor Handphone.";
    form.appendChild(input_nomorhandphone);

    var label2 = document.createElement("label");
    label2.innerHTML="Username";
    form.appendChild(label2);
    var input_useremail = document.createElement("input");
    input_useremail.type = "text";
    input_useremail.name = "username";
    input_useremail.className = "form_login";
    input_useremail.placeholder = "Username atau email..";
    form.appendChild(input_useremail);

    
    var label3 = document.createElement("label");
    label3.innerHTML="Password";
    form.appendChild(label3);
    var input_password = document.createElement("input");
    input_password.type = "password";
    input_password.name = "password";
    input_password.className = "form_login";
    input_password.placeholder = "Password..";
    form.appendChild(input_password);


    var tombol = document.createElement("input");
    tombol.value = "DAFTAR SEKARANG"
    tombol.type = "submit";
    tombol.className = "tombol_login";
    form.appendChild(tombol);
}
