document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('subjectGrid');
    if (!grid) return;

    // Render Cards
    subjectsData.forEach(subject => {
        const card = document.createElement('div');
        card.className = "bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl hover:shadow-blue-500/10 hover:border-blue-500 hover:-translate-y-1 transition-all cursor-pointer group";
        card.innerHTML = `
            <div class="w-12 h-12 bg-slate-800 text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h4 class="font-bold text-slate-100">${subject.name}</h4>
            <p class="text-xs text-slate-500 mt-1 uppercase tracking-widest font-bold">Ujian Tersedia</p>
        `;
        card.onclick = () => openModal(subject.name);
        grid.appendChild(card);
    });
});

function openModal(subjectName) {
    localStorage.setItem('currentSubject', subjectName);
    document.getElementById('modalTitle').innerText = subjectName;
    document.getElementById('loginModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('loginModal').classList.add('hidden');
}

document.getElementById('formLogin').onsubmit = (e) => {
    e.preventDefault();
    const selectedSubject = localStorage.getItem('currentSubject');
    const subjectInfo = getSubjectInfo(selectedSubject);
    // Menghapus spasi di awal/akhir dan mengubah ke huruf besar agar cocok dengan config.js
    const tokenInput = document.getElementById('token').value.trim().toUpperCase();

    if(subjectInfo && tokenInput === subjectInfo.token.toUpperCase()) {
        localStorage.setItem('username', document.getElementById('nama').value);
        localStorage.setItem('examNo', document.getElementById('nomor').value);
        console.log("Login Berhasil:", { subject: selectedSubject, user: document.getElementById('nama').value });
        window.location.href = 'ujian.html';
    } else {
        alert(`Token untuk ${selectedSubject || 'Mata Pelajaran'} salah! Periksa kembali kode token Anda.`);
    }
};