const ADMIN_PHONE = "6285135666976";

/* AMBIL DATA FORM */

function getData() {

    const warnaBunga = [
        ...document.querySelectorAll('.color-option input:checked')
    ]
    .map(el => el.value)
    .join(', ');

    return {

        nama: document.getElementById('nama').value,

        instagram: document.getElementById('instagram').value,

        ucapan: document.getElementById('ucapan').value,

        jenis: document.querySelector('input[name="jenis"]:checked')?.value || '',

        warna: document.getElementById('warna').value,

        selendang: document.querySelector('input[name="selendang"]:checked')?.value || '',

        warnaBunga: warnaBunga,

        alamat: document.getElementById('alamat').value,

        whatsapp: document.getElementById('whatsapp').value

    };

}

/* RESET ERROR */

function resetError() {

    document.querySelectorAll('input, textarea').forEach(el => {

        el.classList.remove('error');

    });

}

/* VALIDASI */

function validateForm() {

    resetError();

    const data = getData();

    let valid = true;

    if (!data.nama) {

        document.getElementById('nama').classList.add('error');

        valid = false;

    }

    if (!data.ucapan) {

        document.getElementById('ucapan').classList.add('error');

        valid = false;

    }

    if (!data.jenis) {

        alert('Pilih jenis papan bunga');

        valid = false;

    }

    if (!data.warna) {

        document.getElementById('warna').classList.add('error');

        valid = false;

    }

    if (!data.alamat) {

        document.getElementById('alamat').classList.add('error');

        valid = false;

    }

    if (!data.whatsapp) {

        document.getElementById('whatsapp').classList.add('error');

        valid = false;

    }

    if (!valid) {

        alert("Lengkapi data terlebih dahulu");

        return false;

    }

    return true;

}

/* PREVIEW */

function previewPesanan() {

    if (!validateForm()) return;

    const data = getData();

    const html = `

    <div class="preview-item">
        <b>Nama:</b><br>${data.nama}
    </div>

    <div class="preview-item">
        <b>Instagram:</b><br>${data.instagram}
    </div>

    <div class="preview-item">
        <b>Ucapan:</b><br>${data.ucapan}
    </div>

    <div class="preview-item">
        <b>Jenis:</b><br>${data.jenis}
    </div>

    <div class="preview-item">
        <b>Warna Tulisan:</b><br>${data.warna}
    </div>

    <div class="preview-item">
        <b>Selendang:</b><br>${data.selendang}
    </div>

    <div class="preview-item">
        <b>Warna Bunga:</b><br>${data.warnaBunga}
    </div>

    <div class="preview-item">
        <b>Alamat:</b><br>${data.alamat}
    </div>

    <div class="preview-item">
        <b>WhatsApp:</b><br>${data.whatsapp}
    </div>

    `;

    document.getElementById('previewContent').innerHTML = html;

    document.getElementById('modal').classList.add('active');

}

/* TUTUP MODAL */

function closeModal() {

    document.getElementById('modal').classList.remove('active');

}

/* TOMBOL KIRIM WHATSAPP */

function sendWhatsApp() {

    previewPesanan();

}

/* KIRIM SEKARANG */

function sendNow() {

    const data = getData();

    let message = `Halo Admin SnDflowerboxponorogo,%0A%0A`;

    message += `Nama : ${data.nama}%0A`;
    message += `Instagram : ${data.instagram}%0A`;
    message += `Ucapan : ${data.ucapan}%0A`;
    message += `Jenis : ${data.jenis}%0A`;
    message += `Warna Tulisan : ${data.warna}%0A`;
    message += `Selendang : ${data.selendang}%0A`;
    message += `Warna Bunga : ${data.warnaBunga}%0A`;
    message += `Alamat : ${data.alamat}%0A`;
    message += `WhatsApp : ${data.whatsapp}`;

    const url = `https://wa.me/${ADMIN_PHONE}?text=${message}`;

    document.getElementById('successAlert').classList.add('show');

    setTimeout(() => {

        window.open(url, '_blank');

        document.getElementById('successAlert').classList.remove('show');

        closeModal();

    }, 1000);

}
