var heyear = "";
var heyear2;
var num = 0;
var engmouth;
var hebrewmouth;
const month2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const hebmouth = ["תשרי", "חשון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
const hechar = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב", "יג", "יד", "טו", "טז", "יז", "יח", "יט", "כ", "כא", "כב", "כג", "כד", "כה", "כו", "כז", "כח", "כט", "ל"];

function hebyear(year) {
//2022=תשפ"ב=5782
    heyear2 = year + 3760;
    heyear = Gematria(heyear2)
    return heyear.replace("ה'", "");
}

function heday(day) {
    //כא=21 22-1
    return hechar[day];
}

function hemouth(mouth) {
    //חודש לועזי לעברי
    engmouth = month2[mouth];

    if (engmouth == "September") {
        hebrewmouth = "תשרי"
    }
    if (engmouth == "October") {
        hebrewmouth = "חשון"
    }
    if (engmouth == "November") {
        hebrewmouth = "כסלו"
    }
    if (engmouth == "December") {
        hebrewmouth = "טבת"
    }
    if (engmouth == "January") {
        hebrewmouth = "שבט"
    }
    if (engmouth == "February") {
        hebrewmouth = "אדר"
    }
    /*optinal
        if (engmouth=="February"){
        hebrewmouth="אדר ב"
    }
     */
    if (engmouth == "March") {
        hebrewmouth = "ניסן"
    }
    if (engmouth == "April") {
        hebrewmouth = "אייר"
    }
    if (engmouth == "May") {
        hebrewmouth = "סיון"
    }
    if (engmouth == "June") {
        hebrewmouth = "תמוז"
    }
    if (engmouth == "July") {
        hebrewmouth = "אב"
    }
    if (engmouth == "August") {
        hebrewmouth = "אלול"
    }
    return hebrewmouth;
}

function hedate(year, month, day) {
    document.getElementById("day").textContent = day;
    document.getElementById("mouth").textContent = month + "/";
    document.getElementById("year").textContent = year + "/";
    year = hebyear(year);
    day = heday(day - 2);
    month = hemouth(month);
    console.log(year);
    console.log(day);
    console.log(month);
    document.getElementById("hebyear").textContent = " " + year;
    document.getElementById("hebmouth").textContent = "ב" + month;
    document.getElementById("hebday").textContent = day + " ";
}

function Gematria(num, flag = 0) {
    num = Math.floor(num);

    if (num >= 1000)
        return Gematria(Math.floor(num / 1000)) + "'" + Gematria(num % 1000, 1);

    var s1 = ["", "ק", "ר", "ש", "ת", "תק", "תר", "תש", "תת", "תתק"];
    var s2 = ["", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"];
    var s3 = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];

    var Gim = s1[Math.floor(num / 100)] +
        s2[Math.floor((num % 100) / 10)] +
        s3[num % 10];

    Gim = String(Gim).replace(/יה/g, 'טו').replace(/יו/g, 'טז');

    if (Gim.length > 1)
        Gim = Gim.slice(0, -1) + '"' + Gim.slice(-1);
    if ((Gim.length == 0 || Gim == "Na\"N") && flag == 0)
        Gim = (num == 0) ? "אפס" : "לא ניתן לחישוב"

    return Gim;
}


const y = new Date();
hedate(y.getFullYear(), y.getMonth() - 1, y.getDate());
