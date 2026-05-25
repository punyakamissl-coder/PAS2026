// Data Initialization
const username = localStorage.getItem('username');
const currentSubject = localStorage.getItem('currentSubject');

console.log('Exam page loaded. Retrieved from localStorage:');
console.log('  username:', username);
console.log('  currentSubject:', currentSubject);

// Keamanan: Jika data login tidak ada, kembalikan ke halaman awal
if (!username || !currentSubject) {
    console.error('Security check failed on ujian.html:');
    alert("Sesi tidak ditemukan atau tidak sah. Silakan masuk melalui halaman pilihan mata pelajaran.");
    window.location.href = 'index.html'; // Redirect ke halaman awal
    throw new Error("Sesi tidak valid");
}
document.getElementById('userDisplay').innerText = username;
document.getElementById('mapelDisplay').innerText = currentSubject;

// Fullscreen Logic
function enterFullscreen() {
    const elem = document.documentElement;
    const requestMethod = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
    
    if (requestMethod) {
        requestMethod.call(elem).catch(err => {
            console.warn(`Gagal masuk fullscreen: ${err.message}`);
        });
    }
}

// Minta Fullscreen pada interaksi pertama (karena kebijakan browser)
document.addEventListener('click', function initFullscreen() {
    enterFullscreen();
    document.removeEventListener('click', initFullscreen);
}, { once: true });

// Timer Logic (90 Menit)
let timeLeft = 90 * 60;
const timerDisplay = document.getElementById('timer');
const countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert("Waktu Habis!");
        window.location.href = "index.html";
    }
    timeLeft--;
}, 1000);

// Security Features
let violationCount = 0;

function triggerViolation() {
    violationCount++;
    // Tampilkan modal re-token dan sembunyikan peringatan biasa
    const retokenModal = document.getElementById('retokenModal');
    if (retokenModal) retokenModal.classList.remove('hidden');
    
    // Sembunyikan alert peringatan jika ada
    const alertBox = document.getElementById('alertBox');
    if (alertBox) alertBox.classList.add('hidden');
}

// 1. Deteksi Tab Switching (Visibility API)
document.addEventListener("visibilitychange", () => {
    if (document.hidden) triggerViolation();
});

// 2. Deteksi Keluar Fullscreen
const handleFullscreenChange = () => {
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    const isRetokenModalHidden = document.getElementById('retokenModal').classList.contains('hidden');

    if (!isFullscreen && isRetokenModalHidden) triggerViolation();
};

document.addEventListener("fullscreenchange", handleFullscreenChange);
document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
document.addEventListener("mozfullscreenchange", handleFullscreenChange);
document.addEventListener("MSFullscreenChange", handleFullscreenChange);

// Handle verifikasi token ulang
const retokenForm = document.getElementById('retokenForm');
if (retokenForm) {
    retokenForm.onsubmit = (e) => {
        e.preventDefault();
        const subjectInfo = getSubjectInfo(currentSubject);
        const inputToken = document.getElementById('inputRetoken').value.trim().toUpperCase();

        if (subjectInfo && inputToken === subjectInfo.token.toUpperCase()) {
            // Berikan jeda sangat singkat agar browser memproses penutupan modal sebelum fullscreen
            setTimeout(() => {
                document.getElementById('retokenModal').classList.add('hidden');
                document.getElementById('inputRetoken').value = '';
                enterFullscreen(); 
                console.log("Token valid, mencoba masuk fullscreen kembali...");
            }, 100);
        } else {
            alert("Token Salah! Hubungi pengawas untuk mendapatkan token.");
        }
    };
}

function closeAlert() {
    const alertBox = document.getElementById('alertBox');
    if (alertBox) alertBox.classList.add('hidden');
}

// 3. Cegah Klik Kanan & Inspect
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
        (e.ctrlKey && e.key === "u")) {
        e.preventDefault();
    }
});

// 4. Konfirmasi Kembali
function confirmHome() {
    if (confirm("Apakah Anda yakin ingin keluar? Semua progress yang belum disimpan akan hilang.")) {
        window.location.href = 'index.html';
    }
}