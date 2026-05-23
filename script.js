const ADMIN = "6285135666976";

function getValue(id){
    return document.getElementById(id).value;
}

function getChecked(name){
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : "-";
}

function getColors(){

    const checked = document.querySelectorAll('.checkbox-grid input:checked');

    let arr = [];

    checked.forEach((item)=>{
        arr.push(item.value);
    });

    return arr.join(", ");

}

function createMessage(){

    return `
Halo Admin SnDflowerboxponorogo

Nama : ${getValue('nama')}

Instagram : ${getValue('instagram')}

Ucapan :
${getValue('ucapan')}

Jenis :
${getChecked('jenis')}

Warna Tulisan :
${getValue('warna')}

Selendang :
${getChecked('selendang')}

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

function previewPesanan(){

    const message = createMessage();

    document.getElementById('previewContent').innerHTML = `
        <div class="preview-box">
            ${message.replace(/\n/g,"<br>")}
        </div>
    `;

    document.getElementById('modal').classList.add('active');

}

function closeModal(){

    document.getElementById('modal').classList.remove('active');

}

function sendWhatsApp(){

    const text = encodeURIComponent(createMessage());

    window.open(`https://wa.me/${ADMIN}?text=${text}`,'_blank');

}

function sendNow(){

    sendWhatsApp();

}
