
// Lấy tham chiếu đến các phần tử HTML
const originalImage = document.getElementById("originalImage");
const zoomedImage = document.getElementById("zoomedImage");
const zoomedImg = document.getElementById("zoomedImg");

// Thêm sự kiện click vào hình ảnh gốc
originalImage.addEventListener("click", function() {
    // Lấy đường dẫn của hình ảnh gốc và đặt cho hình ảnh phóng to
    const imageSource = this.getAttribute("src");
    zoomedImg.setAttribute("src", imageSource);

    // Hiển thị hình ảnh phóng to
    zoomedImage.style.display = "block";
});

// Đóng hình ảnh phóng to khi click vào nền đen
zoomedImage.addEventListener("click", function() {
    zoomedImage.style.display = "none";
});


function hienThiVanBan(btn) {
    // Tìm khung chứa văn bản tương ứng với nút được nhấn
    var khungChuaVanBan = btn.nextElementSibling;

    // Kiểm tra hiển thị và ẩn khung chứa văn bản
    if (khungChuaVanBan.style.display === "none" || khungChuaVanBan.style.display === "") {
        // Ẩn tất cả các khung chứa văn bản
        var tatCaKhungVanBan = document.querySelectorAll(".khungVanBan");
        for (var i = 0; i < tatCaKhungVanBan.length; i++) {
            tatCaKhungVanBan[i].style.display = "none";
        }
        // Hiển thị khung chứa văn bản tương ứng với nút
        khungChuaVanBan.style.display = "block";
    } else {
        // Ẩn khung chứa văn bản nếu đã hiển thị
        khungChuaVanBan.style.display = "none";
    }
};

// khung cho người dùng nhập 

// const content = document.getElementById("content");
// const saveButton = document.getElementById("save");

// saveButton.addEventListener("click", () => {
//   // Lấy nội dung người dùng vừa viết
//   const text = content.value;

//   // Lưu nội dung vào LocalStorage
//   localStorage.setItem("content", text);
// });

// // Khởi tạo nội dung nếu có
// if (localStorage.getItem("content")) {
//   content.value = localStorage.getItem("content");
// }


// nhạc nền
  // Lắng nghe sự kiện trước khi chuyển trang
  window.addEventListener('beforeunload', function () {
    // Dừng nhạc khi rời khỏi trang
    document.getElementById('backgroundMusic').pause();
  });

  document.getElementById('changeIconBtn').addEventListener('click', function() {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'newicon.png'; // Thay 'newicon.png' bằng đường dẫn đến icon mới của bạn
});
