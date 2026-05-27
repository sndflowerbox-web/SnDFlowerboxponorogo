/* =========================
   ADMIN WHATSAPP
========================= */

const ADMIN = "6285135666976";

/* =========================
   HELPER
========================= */

function getValue(id){

    const el = document.getElementById(id);

    return el ? el.value.trim() : "";

}

/* =========================
   RADIO
========================= */

function getRadio(name){

    const radio = document.querySelector(`input[name="${name}"]:checked`);

    return radio ? radio.value : "-";

}

/* =========================
   CHECKBOX
========================= */

function getColors(){

    const checked = document.querySelectorAll('.checkbox-grid input:checked');

    let values = [];

    checked.forEach(item => {

        values.push(item.value);

    });

    return values.length ? values.join(", ") : "-";

}
const selendang =
document.querySelector('input[name="selendang"]:checked')?.value || "-";

/* =========================
   VALIDASI
========================= */

function validateForm(){

    let valid = true;

    const required = [

        "nama",
        "ucapan",
        "warna",
        "alamat",
        "whatsapp"

    ];

    required.forEach(id => {

        const field = document.getElementById(id);

        if(field.value.trim() === ""){

            field.style.border = "2px solid red";

            valid = false;

        }else{

            field.style.border = "1px solid #ddd";

        }

    });

    if(!document.querySelector('input[name="jenis"]:checked')){

        alert("Pilih jenis papan bunga");

        valid = false;

    }

    return valid;

}

/* =========================
   FORMAT PESAN
========================= */

function buildMessage(){

    return `Halo Admin SnDflowerboxponorogo

Nama : ${getValue('nama')}

Instagram : ${getValue('instagram')}

Ucapan :
${getValue('ucapan')}

Jenis :
${getRadio('jenis')}

Warna Tulisan :
${getValue('warna')}

Selendang :
${getRadio('selendang')}

Warna Bunga :
${getColors()}

Tanggal :
${getValue('tanggal')}

Waktu :
${getValue('waktu')}

Alamat :
${getValue('alamat')}

WhatsApp :
${getValue('whatsapp')}

Emoji :
${getValue('emoji')}
`;

}

/* =========================
   PREVIEW
========================= */

function previewPesanan(){

    if(!validateForm()) return;

    const modal = document.getElementById("modal");

    const preview = document.getElementById("previewContent");

    preview.innerHTML = `

        <div class="preview-box">

            ${buildMessage().replace(/\n/g, "<br>")}

        </div>

    `;

    modal.classList.add("active");

}

/* =========================
   TUTUP MODAL
========================= */

function closeModal(){

    document.getElementById("modal").classList.remove("active");

}

/* =========================
   KIRIM WHATSAPP
========================= */

function sendWhatsApp(){

    if(!validateForm()) return;

    const text = encodeURIComponent(buildMessage());

    const url = `https://wa.me/${ADMIN}?text=${text}`;

    window.open(url, "_blank");

}

/* =========================
   KIRIM DARI MODAL
========================= */

function sendNow(){

    sendWhatsApp();

}

/* =========================
   TUTUP MODAL SAAT KLIK LUAR
========================= */

window.addEventListener("click", function(e){

    const modal = document.getElementById("modal");

    if(e.target === modal){

        closeModal();

    }

});

/* =========================
   AUTO HAPUS BORDER MERAH
========================= */

document.addEventListener("input", function(e){

    if(

        e.target.tagName === "INPUT" ||

        e.target.tagName === "TEXTAREA"

    ){

        if(e.target.value.trim() !== ""){

            e.target.style.border = "1px solid #ddd";

        }

    }

});

/* =========================
   PREVENT FORM RELOAD
========================= */

document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("orderForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

        });

    }

});
