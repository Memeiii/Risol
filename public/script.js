document.addEventListener("DOMContentLoaded", function () {
  //  fungsi untuk animasi saat scroll
  const wowElements = document.querySelectorAll(".wow");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          entry.target.style.visibility = "visible";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  wowElements.forEach((el) => {
    observer.observe(el);
  });

  // fungsi untuk menu mobile
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  //   fungsi untuk modal kontak
  const contactBtn = document.getElementById("contact-btn");
  const contactBtnMobile = document.getElementById("contact-btn-mobile");
  const contactModal = document.getElementById("contact-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const pesanBtns = document.querySelectorAll(".pesan-btn");

  function openModal() {
    contactModal.classList.remove("hidden");
  }

  function closeModal() {
    contactModal.classList.add("hidden");
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", openModal);
  }
  if (contactBtnMobile) {
    contactBtnMobile.addEventListener("click", openModal);
  }
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  pesanBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  // close modal when clicking outside of it
  if (contactModal) {
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        closeModal();
      }
    });
  }
});
