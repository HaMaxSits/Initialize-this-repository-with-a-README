document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = loginForm.querySelector("[name='email']").value;
        const password = loginForm.querySelector("[name='password']").value;

        // Kiểm tra tên đăng nhập và mật khẩu
        if (email === "admin@1.com" && password === "1") {
            // Chuyển hướng người dùng sau khi đăng nhập thành công
            window.location.href = "bai/webta.html";
        } else {
            // Hiển thị thông báo lỗi
            errorMessage.classList.add("active");
            document.getElementById("login-status").textContent = "Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.";
        }
    });


    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = signupForm.querySelector("[name='name']").value;
        const email = signupForm.querySelector("[name='email']").value;
        const password = signupForm.querySelector("[name='password']").value;

        // Điều kiện đăng ký (có thể thay đổi)
        if (name && email && password) {
            // Xử lý đăng ký ở đây (có thể gửi dữ liệu đăng ký đến máy chủ)
            // Sau khi đăng ký thành công, bạn có thể thực hiện hướng dẫn tùy chỉnh
            console.log("Đăng ký thành công!");
        } else {
            // Hiển thị thông báo lỗi nếu dữ liệu đăng ký không hợp lệ
            errorMessage.classList.add("active");
            document.getElementById("login-status").textContent = "Vui lòng điền đầy đủ thông tin đăng ký.";
        }
    });
});

