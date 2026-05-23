const ADMIN_PHONE = "6285135666976";

function getData(){

return {

nama: document.getElementById('nama').value,
ucapan: document.getElementById('ucapan').value,
jenis: document.querySelector('input[name="jenis"]:checked')?.value || '',
alamat: document.getElementById('alamat').value,
whatsapp: document.getElementById('whatsapp').value

};

}

function resetError(){

const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(el=>{
    el.classList.remove('error');
});

}

function validateForm(){

resetError();

const data = getData();

let valid = true;

if(!data.nama){
    document.getElementById('nama').classList.add('error');
    valid = false;
}

if(!data.ucapan){
    document.getElementById('ucapan').classList.add('error');
    valid = false;
}

if(!data.jenis){
    valid = false;
}

if(!data.alamat){
    document.getElementById('alamat').classList.add('error');
    valid = false;
}

if(!data.whatsapp){
    document.getElementById('whatsapp').classList.add('error');
    valid = false;
}

if(!valid){
    alert('Lengkapi data terlebih dahulu');
    return false;
}
