// ১. ইনপুট ফিল্ড শো/হাইড (৩ বনাম ৪ অক্ষরের রুট)
function showFields() {
    const option3 = document.getElementById("option3");
    const inputField3 = document.getElementById("lamkalima");
    const inputField4 = document.getElementById("lam2kalima");

    if (option3 && option3.checked) {
        inputField3.style.display = "inline-block";
        inputField4.style.display = "none";
    } else {
        inputField3.style.display = "inline-block";
        inputField4.style.display = "inline-block";
    }
}

// ২. প্রধান কনজুগেশন ফাংশন
function addNumbers() {
    const n1 = document.getElementById("fakalima").value;
    const n2 = document.getElementById("aynkalima").value;
    const n3 = document.getElementById("lamkalima").value;
    const n4 = document.getElementById("lam2kalima").value;
    const bab = document.getElementById("dropdown").value;

    let template = [];

    // --- টেমপ্লেট লাইব্রেরি ---
    if (bab == "au") {
        template = ["ٹَپَڑَ","ٹَاپِڑٌ","مَٹْپُوڑٌ","",
        "ٹَپَڑَ","ٹَپَڑَا","ٹَپَڑُوا","ٹَپَڑَتْ","ٹَپَڑَتَا","ٹَپَڑْنَ",
        "ٹَپَڑْتَ","ٹَپَڑْتُمَا","ٹَپَڑْتُمْ","ٹَپَڑْتِ","ٹَپَڑْتُمَا","ٹَپَڑْتُنَّ","ٹَپَڑْتُ","ٹَپَڑْنَا",
        "ٹُپِڑَ","ٹُپِڑَا","ٹُپِڑُوا","ٹُپِڑَتْ","ٹُپِڑَتَا","ٹُپِڑْنَ",
        "ٹُپِڑْتَ","ٹُپِڑْتُمَا","ٹُپِڑْتُمْ","ٹُپِڑْتِ","ٹُپِڑْتُمَا","ٹُپِڑْتُنَّ","ٹُپِڑْتُ","ٹُپِڑْنَا",
        "يَٹْپُڑُ","يَٹْپُڑَانِ","يَٹْپُڑُونَ","تَٹْپُڑُ","تَٹْپُڑَانِ","يَٹْپُڑْنَ",
        "تَٹْپُڑُ","تَٹْپُڑَانِ","تَٹْپُڑُونَ","تَٹْپُڑِيْنَ","تَٹْپُڑَانِ","تَٹْپُڑْنَ",
        "أَٹْپُڑُ","نَٹْپُڑُ",
        "يُٹْپَڑُ","يُٹْپَڑَانِ","يُٹْپَڑُونَ","تُٹْپَڑُ","تُٹْپَڑَانِ","يُٹْپَڑْنَ",
        "تُٹْپَڑُ","تُٹْپَڑَانِ","تُٹْپَڑُونَ","تُٹْپَڑِيْنَ","تُٹْپَڑَانِ","تُٹْپَڑْنَ",
        "أُٹْپَڑُ","نُٹْپَڑُ",
        "اُٹْپُڑْ","اُٹْپُڑَا","اُٹْپُڑُوا","اُٹْپُڑِي","اُٹْپُڑَا","اُٹْپُڑْنَ",
        "[ٹ پ ڑ]","مِٹْپَڑٌ","مَٹْپَڑٌ"];
    }

    if (template.length === 0) return;

    const finalData = template.map(item =>
        item.replace(/ٹ/g, n1).replace(/پ/g, n2).replace(/ڑ/g, n3).replace(/ژ/g, n4)
    );

    // --- টেবিল আপডেট ---
    const mapping = [
        4,5,6,7,8,9,10,11,12,13,14,15,16,17,
        18,19,20,21,22,23,24,25,26,27,28,29,30,31,
        32,33,34,35,36,37,38,39,40,41,42,43,44,45,
        46,47,48,49,50,51,52,53,54,55,56,57,58,59,
        60,61,62,63,64,65
    ];

    mapping.forEach((idx, i) => {
        const id = (i < 56) ? "fa-" + (i + 1) : "fa-" + (i - 56 + 63);
        const cell = document.getElementById(id);
        if (cell) cell.innerText = finalData[idx];
    });

    // ===== ONLY NEW PART: AUTO MASDAR =====
    let masdar = "";

    if (bab === "au" || bab === "aa" || bab === "ai") {
        masdar = n1 + "َ" + n2 + "ْ" + n3 + "ٌ";   // فَعْلٌ
    } 
    else if (bab === "ia" || bab === "ii") {
        masdar = n1 + "ِ" + n2 + "ْ" + n3 + "ٌ";   // فِعْلٌ
    } 
    else if (bab === "uu") {
        masdar = n1 + "ُ" + n2 + "ْ" + n3 + "ٌ";   // فُعْلٌ
    }

    // --- উপরের রেজাল্ট ---
    document.getElementById("main-fial").innerText = finalData[0];
    document.getElementById("file").innerText =
        (bab == "uu") ? "صِفة مُشبة: " + finalData[1] : "اسم فاعل: " + finalData[1];
    document.getElementById("maful").innerText = "اسم مَفعول: " + finalData[2];

    // ✅ replaced only this line
    document.getElementById("masdar").innerText = "مصدر: " + masdar;

    document.getElementById("mada").innerText = "مَادة: " + finalData[66];
    document.getElementById("ismala").innerText = "اسم آلة: " + finalData[67];
    document.getElementById("ismjarf").innerText = "اسم ظرف: " + finalData[68];

    const resultMsg = document.getElementById("result");
    if (resultMsg) resultMsg.innerText = "";
}

window.onload = showFields;
