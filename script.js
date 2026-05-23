/* NOMOR ADMIN */

const ADMIN = "6285135666976";

/* AMBIL DATA */

function getValue(id){

    return document.getElementById(id).value;

}

/* RADIO */

function getRadio(name){

    const radio = document.querySelector(`input[name="${name}"]:checked`);

    return radio ? radio.value : "-";

}

/* CHECKBOX */

function getColors(){

    const checked = document.querySelectorAll('.checkbox-grid input:checked');

    let result = [];

    checked.forEach(item => {

        result.push(item.value);

    });

    return result.join(", ");

}

/* BUAT PESAN */

function buildMessage(){

    return `
Halo Admin SnDflowerboxponorogo

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

/* PREVIEW */

function previewPesanan(){

    const message = buildMessage();

    document.getElementById('previewContent').innerHTML = `

        <div class="preview-box">

            ${message.replace(/\n/g,"<br>")}

        </div>

    `;

    document.getElementById('modal').classList.add('active');

}

/* CLOSE */

function closeModal(){

    document.getElementById('modal').classList.remove('active');

}

/* KIRIM WA */

function kirimWA(){

    const text = encodeURIComponent(buildMessage());

    const url = "https://wa.me/" + ADMIN + "?text=" + text;

    window.location.href = url;

}

/* BUTTON UTAMA */

function sendWhatsApp(){

    kirimWA();

}

/* BUTTON MODAL */

function sendNow(){

    kirimWA();

}
