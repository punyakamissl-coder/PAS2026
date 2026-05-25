const subjectsData = [
    { name: "Matematika", token: "qweasd", jpg: "matematika/matematika" },
    { name: "B. Indonesia", token: "cxzjiop", jpg: "bindo/bindo" },
    { name: "B. Inggris", token: "rtgcvb", jpg: "bing/bing" },
    { name: "Fisika", token: "jsdpwe", jpg: "fisika/fisika" },
    { name: "Kimia", token: "lkdpp", jpg: "kimia/kimia" },
    { name: "Biologi", token: "fghjkl", jpg: "bio/bio" },
    { name: "Sejarah", token: "asqwxvb", jpg: "sej/sej" },
    { name: "Geografi", token: "poijkop", jpg: "geo/geo" },
    { name: "Ekonomi", token: "jdksnfgg", jpg: "eko/eko" },
    { name: "Sosiologi", token: "sskkjjhh", jpg: "sosio/sosio" },
    { name: "Alquran Hadist", token: "wedesn", jpg: "AH/AH" },
    { name: "P. Pancasila", token: "jshdksop", jpg: "ppkn/ppkn" },
    { name: "Seni Budaya", token: "werdrty", jpg: "seni/seni" },
    { name: "PJOK", token: "pjokpjok", jpg: "pjok/pjok" },
    { name: "Informatika", token: "tikidfg", jpg: "tik/tik" },
    { name: "B. Arab", token: "strewsd", jpg: "ba/ba" },
    { name: "Akidah Akhlak", token: "nvmcbdf", jpg: "aa/aa" },
    { name: "Fiqih", token: "utyrosj", jpg: "fiqih/fiqih" },
    { name: "SKI", token: "wsdfcvbn", jpg: "ski/ski" },
    { name: "BMR", token: "ytrioep", jpg: "bmr/bmr" },

];

// Helper untuk mencari data mapel berdasarkan nama
const getSubjectInfo = (name) => subjectsData.find(s => s.name === name);