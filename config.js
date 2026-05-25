const subjectsData = [
    { name: "Matematika", token: "qweasd", pdf: "matematika.pdf" },
    { name: "B. Indonesia", token: "cxzjiop", pdf: "bindo.pdf" },
    { name: "B. Inggris", token: "rtgcvb", pdf: "bing.pdf" },
    { name: "Fisika", token: "jsdpwe", pdf: "fisika.pdf" },
    { name: "Kimia", token: "lkdpp", pdf: "kimia.pdf" },
    { name: "Biologi", token: "fghjkl", pdf: "bio.pdf" },
    { name: "Sejarah", token: "asqwxvb", pdf: "sej.pdf" },
    { name: "Geografi", token: "poijkop", pdf: "geo.pdf" },
    { name: "Ekonomi", token: "jdksnfgg", pdf: "eko.pdf" },
    { name: "Sosiologi", token: "sskkjjhh", pdf: "sosio.pdf" },
    { name: "Alquran Hadist", token: "wedesn", pdf: "AH.pdf" },
    { name: "P. Pancasila", token: "jshdksop", pdf: "ppkn.pdf" },
    { name: "Seni Budaya", token: "werdrty", pdf: "seni.pdf" },
    { name: "PJOK", token: "pjokpjok", pdf: "pjok.pdf" },
    { name: "Informatika", token: "tikidfg", pdf: "tik.pdf" },
    { name: "B. Arab", token: "strewsd", pdf: "ba.pdf" },
    { name: "Akidah Akhlak", token: "nvmcbdf", pdf: "aa.pdf" },
    { name: "Fiqih", token: "utyrosj", pdf: "fiqih.pdf" },
    { name: "SKI", token: "wsdfcvbn", pdf: "ski.pdf" },
    { name: "BMR", token: "ytrioep", pdf: "bmr.pdf" },

];

// Helper untuk mencari data mapel berdasarkan nama
const getSubjectInfo = (name) => subjectsData.find(s => s.name === name);
