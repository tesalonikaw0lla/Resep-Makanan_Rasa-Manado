document.addEventListener("DOMContentLoaded", function () {

    /* =======================================================
       SCROLL EVENT (optional)
    ======================================================= */
    if (typeof revealOnScroll === "function") {
        window.addEventListener("scroll", revealOnScroll);
    }


    /* =======================================================
       WHATSAPP FORM (UNTUK HALAMAN KONTAK.HTML)
    ======================================================= */
    const form = document.getElementById("formKontak");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value.trim();
            const email = document.getElementById("email").value.trim();
            const pesan = document.getElementById("pesan").value.trim();

            if (!nama || !email || !pesan) {
                alert("Harap isi semua data!");
                return;
            }

            const nomorWhatsApp = "628982361166";

            const text =
                `Halo, saya ${nama}\n` +
                `Email: ${email}\n` +
                `Pesan: ${pesan}`;

            const url = "https://wa.me/" + nomorWhatsApp + "?text=" + encodeURIComponent(text);

            window.open(url, "_blank");
        });
    }


    /* =======================================================
       WHATSAPP FUNCTION (OPSIONAL / SPA MODE)
    ======================================================= */
    window.kirimWA = function () {

        const nama = document.getElementById("nama")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const judul = document.getElementById("judul")?.value.trim();
        const pesan = document.getElementById("pesan")?.value.trim();

        if (!nama || !email || !pesan) {
            alert("Harap isi data dengan benar!");
            return;
        }

        const nomor = "628982361166";

        const text =
            `Halo, saya ${nama}\n` +
            `Email: ${email}\n` +
            `Judul: ${judul || "-"}\n` +
            `Pesan:\n${pesan}`;

        const url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);

        window.open(url, "_blank");
    };


    /* =======================================================
       SPA SYSTEM (NON-AKTIF UNTUK WEBSITE HTML KAMU)
       → sengaja dinonaktifkan agar tidak bentrok
    ======================================================= */

    const app = document.getElementById("app");

    if (!app) return; // STOP kalau bukan SPA

    function render(page) {

        if (page === "home") {
            app.innerHTML = `
                <section>
                    <h1>Selamat Datang di Rasa Manado</h1>
                    <p>Jelajahi kuliner khas Manado.</p>
                </section>
            `;
        }

        else if (page === "resep") {
            app.innerHTML = `
                <h2>Resep Kuliner Manado</h2>
            `;
        }

        else if (page === "tentang") {
            app.innerHTML = `
                <h2>Tentang Rasa Manado</h2>
            `;
        }

        else if (page === "kontak") {
            app.innerHTML = `
                <h2>Kontak</h2>
            `;
        }

        else {
            app.innerHTML = `<h2>Halaman tidak ditemukan</h2>`;
        }
    }


    function router() {
        const page = location.hash.replace("#", "") || "home";
        render(page);
    }

    window.addEventListener("hashchange", router);
    router();

});