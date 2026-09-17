function login(username, password) {
    return username === "admin" && password === "123";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    if (login(username, password)) {
        result.textContent = "Đăng nhập thành công!";
    } else {
        result.textContent = "Sai tài khoản hoặc mật khẩu!";
    }
});

module.exports = login;
