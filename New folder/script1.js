 // Efek muncul tiap scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          sec.classList.add("show");
        }
      });
    });

    // Efek glow saat klik gambar
    const allImages = document.querySelectorAll("img");
    allImages.forEach(img => {
      img.addEventListener("click", () => {
        img.classList.add("glow");
        setTimeout(() => img.classList.remove("glow"), 600);
      });
    });
    // Filter Gallery
    function filterGallery(category) {
      const items = document.querySelectorAll(".gallery-item");
      const buttons = document.querySelectorAll(".filter-btn");

      items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      // Ganti status tombol aktif
      buttons.forEach(btn => btn.classList.remove("active"));
      event.target.classList.add("active");
    }

    function typeEffect() {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 120);
      } else {
        setTimeout(() => {
          typingText.textContent = "";
          i = 0;
          typeEffect();
        }, 1500);
      }
    }
    typingText.textContent = "";
    typeEffect();

    // Smooth Scroll ke tiap section
    document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      });
    });

    // Efek klik tombol (animasi kecil)
    const buttons = document.querySelectorAll("button, .btn, .btn-view");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.9)";
        setTimeout(() => btn.style.transform = "scale(1)", 150);
      });
    });

    // Dark / Light Mode Toggle
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "🌙 Mode";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.bottom = "20px";
    toggleBtn.style.right = "20px";
    toggleBtn.style.padding = "10px 15px";
    toggleBtn.style.border = "none";
    toggleBtn.style.borderRadius = "8px";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.background = "#38f9d7";
    toggleBtn.style.color = "#000";
    toggleBtn.style.fontWeight = "bold";
    document.body.appendChild(toggleBtn);

    let dark = true;
    toggleBtn.addEventListener("click", () => {
      if (dark) {
        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#111";
        toggleBtn.innerText = "☀️ Mode";
        dark = false;
      } else {
        document.body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
        document.body.style.color = "#fff";
        toggleBtn.innerText = "🌙 Mode";
        dark = true;
      }
    });
       function showPage(pageNumber) {
      const pages = document.querySelectorAll('.project-container.page');
      const paginationLinks = document.querySelectorAll('.pagination a');

      // Sembunyiin semua page dengan animasi fade out
      pages.forEach(page => {
        page.classList.remove('active');
      });

      // Hapus status active di semua pagination
      paginationLinks.forEach(link => link.classList.remove('active'));

      // Tampilkan page yang dipilih
      const targetPage = document.getElementById(`page${pageNumber}`);
      if (targetPage) {
        // kasih delay biar transisi jalan
        setTimeout(() => {
          targetPage.classList.add('active');
        }, 100);
      }

      // kasih highlight ke tombol pagination aktif
      const activeLink = document.querySelector(`.pagination a[onclick="showPage(${pageNumber})"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }

      // auto scroll ke atas project section
      document.querySelector("#project").scrollIntoView({ behavior: "smooth" });
    }

    // Load default page 1
    document.addEventListener("DOMContentLoaded", () => {
      showPage(1);
    })
    const scriptURL = "PASTE_URL_WEB_APP_DISINI"; // ganti dengan URL Apps Script kamu

    document.getElementById("contactForm").addEventListener("submit", e => {
      e.preventDefault();
      const form = e.target;
      const data = {
        nama: form.nama.value,
        email: form.email.value,
        pesan: form.pesan.value
      };

      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(() => {
        document.getElementById("formMessage").innerText = "Pesan berhasil dikirim ✅";
        form.reset();
      })
      .catch(() => {
        document.getElementById("formMessage").innerText = "Terjadi error, coba lagi!";
      });
    });

    // Pagination Project dengan transisi
    function showPage(page) {
      const pages = document.querySelectorAll('.project-container.page');
      const links = document.querySelectorAll('.pagination a');

      pages.forEach((p, i) => {
        if (i === page - 1) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });

      links.forEach(l => l.classList.remove('active'));
      links[page - 1].classList.add('active');
    }

    // Default page
        document.addEventListener("DOMContentLoaded", () => {
          showPage(1);
        });
        function showGallery() {
        const gallery = document.querySelector(".gallery-container");
        
        // toggle aktif
        if (gallery.classList.contains("active")) {
          gallery.classList.remove("active");
          setTimeout(() => {
            gallery.style.display = "none";
          }, 600); // sesuai durasi transition
        } else {
          gallery.style.display = "grid";
          setTimeout(() => {
            gallery.classList.add("active");
          }, 15); // biar animasi jalan
        }
      }
        function filterGallery(category) {
        let galleries = document.querySelectorAll(".gallery");
        let buttons = document.querySelectorAll(".filter-btn");

        // reset tombol aktif
        buttons.forEach(btn => btn.classList.remove("active"));

        // aktifkan tombol yg dipilih
        event.target.classList.add("active");

        galleries.forEach(gallery => {
          gallery.classList.remove("active"); // sembunyikan dulu
          if (category === "all") {
            gallery.style.display = "flex";
            setTimeout(() => gallery.classList.add("active"), 50);
          } else if (gallery.querySelector("." + category)) {
            gallery.style.display = "flex";
            setTimeout(() => gallery.classList.add("active"), 50);
          } else {
            gallery.style.display = "none";
          }
        });
      }

      // default tampil pertama "Me"
      window.onload = () => {
        filterGallery("me");
      }
