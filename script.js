const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const hijriMonths = [
  "محرم",
  "صفر",
  "ربیع الاول",
  "ربیع الثانی",
  "جمادی الاول",
  "جمادی الثانی",
  "رجب",
  "شعبان",
  "رمضان",
  "شوال",
  "ذی القعده",
  "ذی الحجه",
];

const gregorianMonths = [
  "ژانویه",
  "فوریه",
  "مارس",
  "آپریل",
  "مه",
  "ژوئن",
  "ژوئیه",
  "اوت",
  "سپتامبر",
  "اکتبر",
  "نوامبر",
  "دسامبر",
];

const gregorianMonthsEnglish = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const turkishMonths = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const turkishMonthsFarsi = [
  "ژانویه",
  "فوریه",
  "مارس",
  "آپریل",
  "مه",
  "ژوئن",
  "ژوئیه",
  "اوت",
  "سپتامبر",
  "اکتبر",
  "نوامبر",
  "دسامبر",
];

const chineseMonths = [
  "ماه اول",
  "ماه دوم",
  "ماه سوم",
  "ماه چهارم",
  "ماه پنجم",
  "ماه ششم",
  "ماه هفتم",
  "ماه هشتم",
  "ماه نهم",
  "ماه دهم",
  "ماه یازدهم",
  "ماه دوازدهم",
];

const hebrewMonths = [
  "تشرین",
  "حشوان",
  "کسلیو",
  "طوت",
  "شباط",
  "آدار اول",
  "آدار دوم",
  "نیسان",
  "ایار",
  "سیوان",
  "تموز",
  "آو",
  "ایلول",
];

const persianDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
];

let currentCalendar = "imperial";
const IMPERIAL_EPOCH_DIFFERENCE = 1180;

// Calendar descriptions
const calendarDescriptions = {
  imperial:
    "تقویم شاهنشاهی از سال ۵۵۹ پیش از میلاد (تأسیس امپراتوری هخامنشی توسط کوروش کبیر) آغاز می‌شود و حدود ۱۱۸۰ سال از تقویم خورشیدی پیشتر است.",
  persian:
    "تقویم خورشیدی یا شمسی از هجرت محمد از مکه به مدینه (۶۲۲ میلادی) آغاز می‌شود و بر اساس حرکت زمین به دور خورشید محاسبه می‌شود.",
  hijri:
    "تقویم هجری قمری از هجرت محمد از مکه به مدینه (۶۲۲ میلادی) آغاز می‌شود و بر اساس حرکت ماه محاسبه می‌شود.",
  gregorian:
    "تقویم میلادی از تولد مسیح آغاز می‌شود و امروزه رایج‌ترین تقویم جهان است که بر اساس حرکت زمین به دور خورشید محاسبه می‌شود.",
  turkish:
    "تقویم ترکی مدرن همان تقویم میلادی است که با نام‌های ماه و روز به زبان ترکی ارائه می‌شود و از سال ۱۹۲۶ در ترکیه استفاده می‌شود.",
  chinese:
    "تقویم چینی یک تقویم قمری-خورشیدی است که بر اساس چرخه‌های ماه و خورشید محاسبه می‌شود و سال‌ها با نام‌های حیوانی و عناصر مشخص می‌شوند.",
  hebrew:
    "تقویم عبری یک تقویم قمری-خورشیدی است که از زمان خلقت جهان (طبق سنت یهودی) محاسبه می‌شود و برای مناسبت‌های مذهبی یهودی استفاده می‌شود.",
  unix: "تایم‌استمپ یونیکس تعداد ثانیه‌های سپری شده از ۱ ژانویه ۱۹۷۰ را نشان می‌دهد.",
};

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Convert to Persian numerals
function toPersianNum(num) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
}

// Format numeric date
function formatNumericDate(date, calendar) {
  if (calendar === "unix") {
    return `ثانیه: ${toPersianNum(
      date.timestampSeconds
    )}<br>میلی‌ثانیه: ${toPersianNum(date.timestampMillis)}`;
  }
  const year = date.year.toString().padStart(4, "0");
  const month = date.month.toString().padStart(2, "0");
  const day = date.day.toString().padStart(2, "0");

  if (calendar === "persian" || calendar === "imperial") {
    return `${toPersianNum(year)}/${toPersianNum(month)}/${toPersianNum(day)}`;
  }
  return `${year}/${month}/${day}`;
}

// Format current time and day
function formatCurrentTimeAndDay() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const dayIndex = now.getDay();
  const dayName = persianDays[dayIndex];
  return `زمان کنونی: ${toPersianNum(hours)}:${toPersianNum(
    minutes
  )}:${toPersianNum(seconds)} | روز: ${dayName}`;
}

// Update time display
function updateTimeDisplay() {
  document.getElementById("timeInfo").textContent = formatCurrentTimeAndDay();
}

// Calculate time difference
function calculateTimeDifference(targetDate) {
  const now = new Date();
  const target = new Date(
    targetDate.year,
    targetDate.month - 1,
    targetDate.day
  );

  const diffTime = target.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const isFuture = diffDays > 0;
  const absDays = Math.abs(diffDays);

  const years = Math.floor(absDays / 365);
  const months = Math.floor((absDays % 365) / 30);
  const days = absDays % 30;
  const hours = Math.floor(Math.abs(diffTime) / (1000 * 60 * 60)) % 24;

  return {
    years,
    months,
    days,
    hours,
    isFuture,
    totalDays: absDays,
  };
}

// Leap year calculations
function isGregorianLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function isPersianLeapYear(year) {
  // Persian calendar leap year based on 33-year cycle
  const cycle = (((year - 474) % 2820) + 2820) % 33;
  return [1, 5, 9, 13, 17, 21, 25, 29].includes(cycle);
}

// Calendar conversion functions
function gregorianToPersian(gYear, gMonth, gDay) {
  // Convert Gregorian to Julian Day Number (JDN)
  const a = Math.floor((14 - gMonth) / 12);
  const y = gYear + 4800 - a;
  const m = gMonth + 12 * a - 3;
  const jd =
    gDay +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;

  // Persian epoch (March 19, 622 CE) in JDN
  const persianEpochJD = 1948321; // Adjusted to midnight
  const daysSinceEpoch = jd - persianEpochJD;

  // Calculate Persian year
  let pYear = Math.floor((daysSinceEpoch + 0.5) / 365.242198581) + 1;
  let remainingDays = daysSinceEpoch - Math.floor((pYear - 1) * 365.242198581);

  // Adjust for leap years
  const monthDays = [
    31,
    31,
    31,
    31,
    31,
    31,
    30,
    30,
    30,
    30,
    30,
    isPersianLeapYear(pYear) ? 30 : 29,
  ];
  let pMonth = 0;
  let pDay = Math.floor(remainingDays) + 1;

  for (let i = 0; i < 12; i++) {
    if (pDay <= monthDays[i]) {
      pMonth = i + 1;
      break;
    }
    pDay -= monthDays[i];
  }

  return { year: pYear, month: pMonth, day: pDay };
}

function persianToGregorian(pYear, pMonth, pDay) {
  // Persian epoch (March 19, 622 CE) in JDN
  const persianEpochJD = 1948321; // Adjusted to midnight
  let days = Math.floor((pYear - 1) * 365.242198581);

  // Add days for months
  const monthDays = [
    31,
    31,
    31,
    31,
    31,
    31,
    30,
    30,
    30,
    30,
    30,
    isPersianLeapYear(pYear) ? 30 : 29,
  ];
  for (let i = 0; i < pMonth - 1; i++) {
    days += monthDays[i];
  }
  days += pDay;

  // Convert to JDN
  const jd = persianEpochJD + days;

  // Convert JDN to Gregorian
  const l = Math.floor(jd + 68569);
  const n = Math.floor((4 * l) / 146097);
  const l2 = l - Math.floor((146097 * n + 3) / 4);
  const i = Math.floor((4000 * (l2 + 1)) / 1461001);
  const l3 = l2 - Math.floor((1461 * i) / 4) + 31;
  const j = Math.floor((80 * l3) / 2447);
  const gDay = l3 - Math.floor((2447 * j) / 80);
  const l4 = Math.floor(j / 11);
  const gMonth = j + 2 - 12 * l4;
  const gYear = 100 * (n - 49) + i + l4;

  return { year: gYear, month: gMonth, day: gDay };
}

function persianToImperial(pYear, pMonth, pDay) {
  return {
    year: pYear + IMPERIAL_EPOCH_DIFFERENCE,
    month: pMonth,
    day: pDay,
  };
}

function imperialToPersian(iYear, iMonth, iDay) {
  return {
    year: iYear - IMPERIAL_EPOCH_DIFFERENCE,
    month: iMonth,
    day: iDay,
  };
}

function gregorianToImperial(gYear, gMonth, gDay) {
  const persian = gregorianToPersian(gYear, gMonth, gDay);
  return persianToImperial(persian.year, persian.month, persian.day);
}

function imperialToGregorian(iYear, iMonth, iDay) {
  const persian = imperialToPersian(iYear, iMonth, iDay);
  return persianToGregorian(persian.year, persian.month, persian.day);
}

function gregorianToHijri(gYear, gMonth, gDay) {
  const date = new Date(gYear, gMonth - 1, gDay);
  const jd = Math.floor(date.getTime() / (1000 * 60 * 60 * 24) + 2440587.5);
  const z = Math.floor(jd - 1948440 + 10632);
  const n = Math.floor((z - 1) / 10631);
  const z2 = z - 10631 * n;
  const a = Math.floor((z2 - 1) / 354);
  const b = z2 - 354 * a;
  const hYear = n * 30 + a + 1;
  const c = Math.floor((b + 28.5) / 29.5);
  const hMonth = Math.min(c, 12);
  const hDay = b - Math.floor(29.5 * (c - 1)) + 1;

  return { year: hYear, month: hMonth, day: hDay };
}

function hijriToGregorian(hYear, hMonth, hDay) {
  const n = hYear - 1;
  const a = Math.floor(n / 30);
  const b = n - 30 * a;
  const c = Math.floor((b * 354 + hMonth * 29.5 + hDay - 29) / 365.2422);
  const days = Math.floor(
    (n * 10631) / 30 + b * 354 + Math.floor(hMonth * 29.5) + hDay - 29
  );
  const jd = days + 1948440 - 1;
  const date = new Date((jd - 2440587.5) * 1000 * 60 * 60 * 24);

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
}

function gregorianToTurkish(gYear, gMonth, gDay) {
  return { year: gYear, month: gMonth, day: gDay };
}

function turkishToGregorian(tYear, tMonth, tDay) {
  return { year: tYear, month: tMonth, day: tDay };
}

function gregorianToChinese(gYear, gMonth, gDay) {
  const lunarEpoch = new Date(-2637, 1, 15);
  const daysSinceEpoch = Math.floor(
    (new Date(gYear, gMonth - 1, gDay) - lunarEpoch) / (1000 * 60 * 60 * 24)
  );
  const lunarYear = Math.floor(daysSinceEpoch / 354.367) + 2637;
  const remainingDays = daysSinceEpoch % 354.367;
  let cMonth = Math.floor(remainingDays / 29.53) + 1;
  let cDay = Math.floor(remainingDays % 29.53) + 1;

  const stems = [
    "جیا",
    "یی",
    "بینگ",
    "دینگ",
    "وو",
    "جی",
    "گنگ",
    "شین",
    "رن",
    "گوی",
  ];
  const branches = [
    "زی",
    "چو",
    "یین",
    "مائو",
    "چن",
    "سی",
    "وو",
    "وی",
    "شن",
    "یو",
    "شو",
    "های",
  ];
  const zodiacs = [
    "موش",
    "گاو",
    "ببر",
    "خرگوش",
    "اژدها",
    "مار",
    "اسب",
    "بز",
    "میمون",
    "خروس",
    "سگ",
    "خوک",
  ];
  const yearIndex = (lunarYear - 4) % 60;
  const stemBranch = `${stems[yearIndex % 10]}-${branches[yearIndex % 12]}`;
  const zodiac = zodiacs[yearIndex % 12];

  return {
    year: lunarYear,
    month: Math.min(cMonth, 12),
    day: Math.min(cDay, 30),
    stemBranch,
    zodiac,
  };
}

function chineseToGregorian(cYear, cMonth, cDay) {
  const lunarEpoch = new Date(-2637, 1, 15);
  const totalDays =
    (cYear - 2637) * 354.367 + (cMonth - 1) * 29.53 + (cDay - 1);
  const gDate = new Date(
    lunarEpoch.getTime() + totalDays * 24 * 60 * 60 * 1000
  );
  return {
    year: gDate.getFullYear(),
    month: gDate.getMonth() + 1,
    day: gDate.getDate(),
  };
}

function gregorianToHebrew(gYear, gMonth, gDay) {
  const date = new Date(gYear, gMonth - 1, gDay);
  const jd = Math.floor(date.getTime() / (1000 * 60 * 60 * 24) + 2440587.5);
  const daysSinceEpoch = jd - 347998;
  const hYear = Math.floor(daysSinceEpoch / 354.367) + 3761;
  const remainingDays = daysSinceEpoch % 354.367;
  let hMonth = Math.floor(remainingDays / 29.53) + 1;
  let hDay = Math.floor(remainingDays % 29.53) + 1;

  return {
    year: hYear,
    month: Math.min(hMonth, 13),
    day: Math.min(hDay, 30),
  };
}

function hebrewToGregorian(hYear, hMonth, hDay) {
  const daysSinceEpoch =
    (hYear - 3761) * 354.367 + (hMonth - 1) * 29.53 + (hDay - 1);
  const jd = daysSinceEpoch + 347998;
  const date = new Date((jd - 2440587.5) * 1000 * 60 * 60 * 24);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
}

function unixToGregorian(timestamp) {
  const date = new Date(timestamp * 1000);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
}

function gregorianToUnix(gYear, gMonth, gDay) {
  const date = new Date(gYear, gMonth - 1, gDay);
  return Math.floor(date.getTime() / 1000);
}

function getCurrentDate() {
  const now = new Date();
  const gDate = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
  const timestampSeconds = Math.floor(now.getTime() / 1000);
  const timestampMillis = now.getTime();

  const pDate = gregorianToPersian(gDate.year, gDate.month, gDate.day);
  const iDate = persianToImperial(pDate.year, pDate.month, pDate.day);
  const hDate = gregorianToHijri(gDate.year, gDate.month, gDate.day);
  const tDate = gregorianToTurkish(gDate.year, gDate.month, gDate.day);
  const cDate = gregorianToChinese(gDate.year, gDate.month, gDate.day);
  const heDate = gregorianToHebrew(gDate.year, gDate.month, gDate.day);

  return {
    gregorian: gDate,
    persian: pDate,
    imperial: iDate,
    hijri: hDate,
    turkish: tDate,
    chinese: cDate,
    hebrew: heDate,
    unix: { timestampSeconds, timestampMillis },
  };
}

function formatDate(date, calendar) {
  if (calendar === "unix") {
    return `${toPersianNum(date.timestampSeconds)} ثانیه`;
  }
  if (calendar === "chinese") {
    return `${toPersianNum(date.day)} ${
      chineseMonths[date.month - 1]
    } ${toPersianNum(date.year)} (${date.stemBranch}, ${date.zodiac})`;
  }
  const months =
    calendar === "persian" || calendar === "imperial"
      ? persianMonths
      : calendar === "hijri"
      ? hijriMonths
      : calendar === "hebrew"
      ? hebrewMonths
      : calendar === "chinese"
      ? chineseMonths
      : calendar === "turkish"
      ? turkishMonths
      : gregorianMonths;

  let monthDisplay = months[date.month - 1];
  if (calendar === "gregorian") {
    monthDisplay = `${months[date.month - 1]} (${
      gregorianMonthsEnglish[date.month - 1]
    })`;
  } else if (calendar === "turkish") {
    monthDisplay = `${turkishMonths[date.month - 1]} (${
      turkishMonthsFarsi[date.month - 1]
    })`;
  }

  return `${toPersianNum(date.day)} ${monthDisplay} ${toPersianNum(date.year)}`;
}

function updateDisplay() {
  try {
    const dates = getCurrentDate();
    const currentDateData = dates[currentCalendar];

    document.getElementById("currentDate").textContent = formatDate(
      currentDateData,
      currentCalendar
    );
    document.getElementById("dateNumeric").innerHTML = formatNumericDate(
      currentDateData,
      currentCalendar
    );

    const calendarNames = {
      imperial: "تقویم شاهنشاهی",
      persian: "تقویم خورشیدی",
      hijri: "تقویم هجری قمری",
      gregorian: "تقویم میلادی",
      turkish: "تقویم ترکی",
      chinese: "تقویم چینی",
      hebrew: "تقویم عبری",
      unix: "تایم‌استمپ یونیکس",
    };

    document.getElementById("dateInfo").textContent =
      calendarNames[currentCalendar];
    document.getElementById("calendarDescription").textContent =
      calendarDescriptions[currentCalendar];

    const statusIcons = {
      imperial: "👑",
      persian: "☀️",
      hijri: "🌙",
      gregorian: "🌍",
      turkish: "🇹🇷",
      chinese: "🐉",
      hebrew: "✡️",
      unix: "⏱️",
    };
    document.getElementById(
      "statusText"
    ).textContent = `${statusIcons[currentCalendar]} ${calendarNames[currentCalendar]}`;
  } catch (error) {
    console.error("Error updating display:", error);
    document.getElementById("currentDate").textContent = "خطا در نمایش تاریخ";
  }
}

function switchCalendar(calendar) {
  currentCalendar = calendar;

  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  updateDisplay();
}

function toggleInputFields() {
  const calendarType = document.getElementById("inputCalendar").value;
  const yearField = document.getElementById("yearField");
  const monthField = document.getElementById("monthField");
  const dayField = document.getElementById("dayField");
  const timestampField = document.getElementById("timestampField");

  if (calendarType === "unix") {
    yearField.style.display = "none";
    monthField.style.display = "none";
    dayField.style.display = "none";
    timestampField.style.display = "block";
  } else {
    yearField.style.display = "block";
    monthField.style.display = "block";
    dayField.style.display = "block";
    timestampField.style.display = "none";
  }
}

function convertDate() {
  const year = parseInt(document.getElementById("inputYear").value);
  const month = parseInt(document.getElementById("inputMonth").value);
  const day = parseInt(document.getElementById("inputDay").value);
  const timestamp = parseInt(document.getElementById("inputTimestamp").value);
  const inputCalendar = document.getElementById("inputCalendar").value;

  if (inputCalendar === "unix" && !timestamp) {
    alert("لطفاً تایم‌استمپ را وارد کنید");
    return;
  } else if (inputCalendar !== "unix" && (!year || !month || !day)) {
    alert("لطفاً تمام فیلدهای تاریخ را پر کنید");
    return;
  }

  try {
    let results = {};
    let gregorianDate = null;

    if (inputCalendar === "unix") {
      const gDate = unixToGregorian(timestamp);
      const pDate = gregorianToPersian(gDate.year, gDate.month, gDate.day);
      const iDate = persianToImperial(pDate.year, pDate.month, pDate.day);
      const hDate = gregorianToHijri(gDate.year, gDate.month, gDate.day);
      const tDate = gregorianToTurkish(gDate.year, gDate.month, gDate.day);
      const cDate = gregorianToChinese(gDate.year, gDate.month, gDate.day);
      const heDate = gregorianToHebrew(gDate.year, gDate.month, gDate.day);
      results = {
        unix: {
          timestampSeconds: timestamp,
          timestampMillis: timestamp * 1000,
        },
        gregorian: gDate,
        persian: pDate,
        imperial: iDate,
        hijri: hDate,
        turkish: tDate,
        chinese: cDate,
        hebrew: heDate,
      };
      gregorianDate = gDate;
    } else if (inputCalendar === "imperial") {
      const pDate = imperialToPersian(year, month, day);
      const gDate = persianToGregorian(pDate.year, pDate.month, pDate.day);
      const hDate = gregorianToHijri(gDate.year, gDate.month, gDate.day);
      const tDate = gregorianToTurkish(gDate.year, gDate.month, gDate.day);
      const cDate = gregorianToChinese(gDate.year, gDate.month, gDate.day);
      const heDate = gregorianToHebrew(gDate.year, gDate.month, gDate.day);
      const unixTimestamp = gregorianToUnix(gDate.year, gDate.month, gDate.day);
      results = {
        imperial: { year, month, day },
        persian: pDate,
        gregorian: gDate,
        hijri: hDate,
        turkish: tDate,
        chinese: cDate,
        hebrew: heDate,
        unix: {
          timestampSeconds: unixTimestamp,
          timestampMillis: unixTimestamp * 1000,
        },
      };
      gregorianDate = gDate;
    } else if (inputCalendar === "persian") {
      const iDate = persianToImperial(year, month, day);
      const gDate = persianToGregorian(year, month, day);
      const hDate = gregorianToHijri(gDate.year, gDate.month, gDate.day);
      const tDate = gregorianToTurkish(gDate.year, gDate.month, gDate.day);
      const cDate = gregorianToChinese(gDate.year, gDate.month, gDate.day);
      const heDate = gregorianToHebrew(gDate.year, gDate.month, gDate.day);
      const unixTimestamp = gregorianToUnix(gDate.year, gDate.month, gDate.day);
      results = {
        persian: { year, month, day },
        imperial: iDate,
        gregorian: gDate,
        hijri: hDate,
        turkish: tDate,
        chinese: cDate,
        hebrew: heDate,
        unix: {
          timestampSeconds: unixTimestamp,
          timestampMillis: unixTimestamp * 1000,
        },
      };
      gregorianDate = gDate;
    } else if (inputCalendar === "hijri") {
      const gDate = hijriToGregorian(year, month, day);
      const pDate = gregorianToPersian(gDate.year, gDate.month, gDate.day);
      const iDate = persianToImperial(pDate.year, pDate.month, pDate.day);
      const tDate = gregorianToTurkish(gDate.year, gDate.month, gDate.day);
      const cDate = gregorianToChinese(gDate.year, gDate.month, gDate.day);
      const heDate = gregorianToHebrew(gDate.year, gDate.month, gDate.day);
      const unixTimestamp = gregorianToUnix(gDate.year, gDate.month, gDate.day);
      results = {
        hijri: { year, month, day },
        gregorian: gDate,
        persian: pDate,
        imperial: iDate,
        turkish: tDate,
        chinese: cDate,
        hebrew: heDate,
        unix: {
          timestampSeconds: unixTimestamp,
          timestampMillis: unixTimestamp * 1000,
        },
      };
      gregorianDate = gDate;
    } else if (inputCalendar === "turkish") {
      const gDate = turkishToGregorian(year, month, day);
      const pDate = gregorianToPersian(gDate.year, gDate.month, gDate.day);
      const iDate = persianToImperial(pDate.year, pDate.month, pDate.day);
      const hDate = gregorianToHijri(gDate.year, gDate.month, gDate.day);
      const cDate = gregorianToChinese(gDate.year, gDate.month, gDate.day);
      const heDate = gregorianToHebrew(gDate.year, gDate.month, gDate.day);
      const unixTimestamp = gregorianToUnix(gDate.year, gDate.month, gDate.day);
      results = {
        turkish: { year, month, day },
        gregorian: gDate,
        persian: pDate,
        imperial: iDate,
        hijri: hDate,
        chinese: cDate,
        hebrew: heDate,
        unix: {
          timestampSeconds: unixTimestamp,
          timestampMillis: unixTimestamp * 1000,
        },
      };
      gregorianDate = gDate;
    } else if (inputCalendar === "chinese") {
      const gDate = chineseToGregorian(year, month, day);
      const pDate = gregorianToPersian(gDate.year, gDate.month, gDate.day);
      const iDate = persianToImperial(pDate.year, pDate.month, pDate.day);
      const hDate = gregorianToHijri(gDate.year, gDate.month, gDate.day);
      const tDate = gregorianToTurkish(gDate.year, gDate.month, gDate.day);
      const cDate = gregorianToChinese(gDate.year, gDate.month, gDate.day);
      const heDate = gregorianToHebrew(gDate.year, gDate.month, gDate.day);
      const unixTimestamp = gregorianToUnix(gDate.year, gDate.month, gDate.day);
      results = {
        chinese: cDate,
        gregorian: gDate,
        persian: pDate,
        imperial: iDate,
        hijri: hDate,
        turkish: tDate,
        hebrew: heDate,
        unix: {
          timestampSeconds: unixTimestamp,
          timestampMillis: unixTimestamp * 1000,
        },
      };
      gregorianDate = gDate;
    } else if (inputCalendar === "hebrew") {
      const gDate = hebrewToGregorian(year, month, day);
      const pDate = gregorianToPersian(gDate.year, gDate.month, gDate.day);
      const iDate = persianToImperial(pDate.year, pDate.month, pDate.day);
      const hDate = gregorianToHijri(gDate.year, gDate.month, gDate.day);
      const tDate = gregorianToTurkish(gDate.year, gDate.month, gDate.day);
      const cDate = gregorianToChinese(gDate.year, gDate.month, gDate.day);
      const unixTimestamp = gregorianToUnix(gDate.year, gDate.month, gDate.day);
      results = {
        hebrew: { year, month, day },
        gregorian: gDate,
        persian: pDate,
        imperial: iDate,
        hijri: hDate,
        turkish: tDate,
        chinese: cDate,
        unix: {
          timestampSeconds: unixTimestamp,
          timestampMillis: unixTimestamp * 1000,
        },
      };
      gregorianDate = gDate;
    } else {
      const pDate = gregorianToPersian(year, month, day);
      const iDate = persianToImperial(pDate.year, pDate.month, pDate.day);
      const hDate = gregorianToHijri(year, month, day);
      const tDate = gregorianToTurkish(year, month, day);
      const cDate = gregorianToChinese(year, month, day);
      const heDate = gregorianToHebrew(year, month, day);
      const unixTimestamp = gregorianToUnix(year, month, day);
      results = {
        gregorian: { year, month, day },
        persian: pDate,
        imperial: iDate,
        hijri: hDate,
        turkish: tDate,
        chinese: cDate,
        hebrew: heDate,
        unix: {
          timestampSeconds: unixTimestamp,
          timestampMillis: unixTimestamp * 1000,
        },
      };
      gregorianDate = { year, month, day };
    }

    displayResults(results);
    displayTimeDifference(gregorianDate);
  } catch (error) {
    alert("خطا در تبدیل تاریخ");
    console.error("Conversion error:", error);
  }
}

function displayResults(results) {
  const container = document.getElementById("conversionResults");
  container.innerHTML = "";

  const titles = {
    imperial: "شاهنشاهی",
    persian: "خورشیدی",
    hijri: "هجری قمری",
    gregorian: "میلادی",
    turkish: "ترکی",
    chinese: "چینی",
    hebrew: "عبری",
    unix: "یونیکس تایم‌استمپ",
  };

  Object.keys(results).forEach((calendar) => {
    const card = document.createElement("div");
    card.className = "result-card";

    card.innerHTML = `
                <div class="result-title">${titles[calendar]}</div>
                <div class="result-date persian-num">${formatDate(
                  results[calendar],
                  calendar
                )}</div>
                <div class="result-numeric">${formatNumericDate(
                  results[calendar],
                  calendar
                )}</div>
            `;

    container.appendChild(card);
  });
}

function displayTimeDifference(gregorianDate) {
  const timeDiff = calculateTimeDifference(gregorianDate);
  const container = document.getElementById("timeDifference");

  let timeText = "";
  if (timeDiff.years > 0) timeText += `${toPersianNum(timeDiff.years)} سال، `;
  if (timeDiff.months > 0) timeText += `${toPersianNum(timeDiff.months)} ماه، `;
  if (timeDiff.days > 0) timeText += `${toPersianNum(timeDiff.days)} روز، `;
  timeText += `${toPersianNum(timeDiff.hours)} ساعت`;

  const statusText = timeDiff.isFuture ? "آینده" : "گذشته";
  const statusClass = timeDiff.isFuture ? "time-diff-future" : "time-diff-past";

  container.innerHTML = `
            <div class="time-diff-title">⏰ فاصله زمانی تا امروز</div>
            <div class="time-diff-content">
                <span class="${statusClass}">${timeText}</span>
                <br>
                <strong class="${statusClass}">${statusText}</strong>
            </div>
        `;

  container.style.display = "block";
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  updateDisplay();
  updateTimeDisplay();
  toggleInputFields();
  setInterval(updateDisplay, 1000);
  setInterval(updateTimeDisplay, 1000);
});

setTimeout(updateDisplay, 100);
