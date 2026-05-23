const ADMIN = "6285135666976";

/* AMBIL RADIO */

function getRadio(name){

    const radio = document.querySelector(`input[name="${name}"]:checked`);

    return radio ? radio.value : "-";

}

/* AMBIL CHECKBOX */

function getCheckboxValues(){

    const checked = document.querySelectorAll('.checkbox-grid input:checked');

    let values = [];

    checked.forEach(item => {
        values.push(item.value);
    });

    return values.join(", ");

}

/* BUAT PESAN */

function createMessage(){

    return `Halo Admin SnDflowerboxponorogo

Nama : ${document.getElementById('nama').value}

Instagram : ${document.getElementById('instagram').value}

Ucapan :
${document.getElementById('ucapan').value}

Jenis :
${getRadio('jenis')}

Warna Tulisan :
${document.getElementById('warna').value}

Selendang :
${getRadio('selendang')}

Warna Bunga :
${getCheckboxValues()}

Tanggal :
${document.getElementById('tanggal').value}

Waktu :
${document.getElementById('waktu').value}

Alamat :
${document.getElementById('alamat').value}

WhatsApp :
${document.getElementById('whatsapp').value}

Emoji :
${document.getElementById('emoji').value}
`;

}

/* PREVIEW */

function previewPesanan(){

    const text = createMessage();

    document.getElementById('previewContent').innerHTML = `

        <div class="preview-box">

            ${text.replace(/\n/g,"<br>")}

        </div>

    `;

    document.getElementById('modal').classList.add('active');

}

/* CLOSE MODAL */

function closeModal(){

    document.getElementById('modal').classList.remove('active');

}

/* KIRIM WA */

function sendWhatsApp(){

    const text = encodeURIComponent(createMessage());

    const url = `https://wa.me/${ADMIN}?text=${text}`;

    window.open(url, '_blank');

}

/* KIRIM DARI MODAL */

function sendNow(){

    sendWhatsApp();

}
