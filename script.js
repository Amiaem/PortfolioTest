document.addEventListener("DOMContentLoaded", function() {
    // ส่วนที่ 1: การจัดการการคลิกใน Sidebar
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // ลบคลาส active จากลิงก์ทั้งหมด
            document.querySelectorAll('.sidebar a').forEach(link => {
                link.classList.remove('active');
            });

            // เพิ่มคลาส active ให้กับลิงก์ที่ถูกคลิก
            this.classList.add('active');

            // เลื่อนไปยังส่วนที่ต้องการ
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    // ส่วนที่ 2: การจัดการ Popup
    const popup = document.getElementById("popup");
    const openPopupBtn = document.getElementById("openPopupBtn");

    openPopupBtn.onclick = function() {
        popup.style.display = "block";
    };

    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
});
