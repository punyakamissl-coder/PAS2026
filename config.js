const subjectsData = [
    { name: "Matematika", token: "MTK2024", pdf: "matematika.pdf" },
    { name: "B. Indonesia", token: "BIN2024", pdf: "bahasa_indonesia.pdf" },
    { name: "B. Inggris", token: "BIG2024", pdf: "bahasa_inggris.pdf" },
    { name: "Fisika", token: "FIS2024", pdf: "fisika.pdf" },
    { name: "Kimia", token: "KIM2024", pdf: "kimia.pdf" },
    { name: "Biologi", token: "BIO2024", pdf: "biologi.pdf" },
    { name: "Sejarah", token: "SEJ2024", pdf: "sejarah.pdf" },
    { name: "Geografi", token: "GEO2024", pdf: "geografi.pdf" },
    { name: "Ekonomi", token: "EKO2024", pdf: "ekonomi.pdf" },
    { name: "Sosiologi", token: "SOS2024", pdf: "sosiologi.pdf" },
    { name: "PAI", token: "PAI2024", pdf: "pai.pdf" },
    { name: "PPKN", token: "PKN2024", pdf: "ppkn.pdf" },
    { name: "Seni Budaya", token: "SNB2024", pdf: "seni_budaya.pdf" },
    { name: "PJOK", token: "PJK2024", pdf: "pjok.pdf" },
    { name: "TIK", token: "TIK2024", pdf: "tik.pdf" },
    { name: "B. Arab", token: "ARB2024", pdf: "bahasa_arab.pdf" },
    { name: "B. Jepang", token: "JPN2024", pdf: "bahasa_jepang.pdf" },
    { name: "B. Mandarin", token: "MAN2024", pdf: "bahasa_mandarin.pdf" },
    { name: "B. Jerman", token: "JER2024", pdf: "bahasa_jerman.pdf" },
    { name: "Prakarya", token: "PRA2024", pdf: "prakarya.pdf" },
    { name: "Antropologi", token: "ANT2024", pdf: "antropologi.pdf" },
    { name: "Filsafat", token: "FIL2024", pdf: "filsafat.pdf" }
];

// Helper untuk mencari data mapel berdasarkan nama
const getSubjectInfo = (name) => subjectsData.find(s => s.name === name);