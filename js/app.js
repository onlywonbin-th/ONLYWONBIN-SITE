const SHEET_API =
  'https://script.google.com/macros/s/AKfycbwJkM60dca_6fu5maXWNr8RM_h169VbcKT_FORvMs9fJRTdf0PjPctAeah4wme1PORB/exec';

let CFG = {
  calendar: 'https://calendar.google.com/calendar/embed?src=f9d003c20811df705235a70eb5029fe2d425a7c3218fd2ae1952e67a3b826fee%40group.calendar.google.com&ctz=Asia%2FBangkok&hl=th&mode=MONTH&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%23eef0ff',
  calendar2: 'https://script.google.com/macros/s/AKfycbwbPfKeaPVdgGP1NWB1bIOhbKbm343jF2jxPjiLKH_x47eVpyNXx0_UxkG3z7vKlsMJdw/exec',

  vote: [],
  pro: [],
  news: [],
  qa: [],
fromWonbin: {
  video: "video/from-wonbin.mp4",
  text: {
    th: "🎸 : ขอบคุณที่ทำให้ความฝันของผมเป็นจริงนะ!",
    en: "🎸 : Thank you for making my dream come true!"
  }
},
  game: {
    d: 'RIIZE AIR Certificate',
    u: 'https://riize-air.pages.dev/',
    img: ''
  },

  comment: {
    d: 'สุ่มคอมเมนต์',
    u: 'https://onlywonbin-th.github.io/ONLYWONBINTH/',
    img: ''
  },

  tracker: {
    d: 'ติดตามแคมเปญ',
    u: 'https://wonbin-dashboard.pages.dev/',
    img: ''
  },

  events: {
    d: 'Link Engagement',
    u: 'https://onlywonbin-th.github.io/ONLYWONBINTH-LINK/',
    img: ''
  },

  announce: {
    t: 'ประกาศ',
    img: '',
    b: ''
  },

  intro: {
  vote: {
  img: 'pics/brand.jpg',

  t: `Brand Reputation: Search 🔎
ปินพึ / บรีซจึ ทุกคนมาดันอันดับให้วอนบินกันค่ะ เพียงแค่กดเข้าลิงก์ด้านล่าง แล้วเลื่อนดูหน้า Page ของวอนบิน ~ 1-2 นาที`,
  links: [
    {
      title: 'Naver & Naver News',
      items: [
        {
          text: 'bit.ly/4moX3rP',
          url: 'https://t.co/QcADL5m5GI'
        },
        {
          text: 'bit.ly/4dXzWlJ',
          url: 'https://t.co/FJ0MmEmpGG'
        }
      ]
    },

    {
      title: 'Google kr',
      items: [
        {
          text: 'bit.ly/4v1rfNz',
          url: 'https://t.co/4KhnD9o7p4'
        }
      ]
    },

    {
      title: 'Youtube kr',
      items: [
        {
          text: 'bit.ly/4mfoHar',
          url: 'https://t.co/bXmzZJUMCW'
        }
      ]
    }
  ],

  note: '🔺 ต้องกดเข้าไปในลิงก์แล้วเลื่อนดูต่อสักนิดนึงก่อน ถึงจะถูกนับคะแนนนะคะ'
},

    news: {
      img: '',
      t: ''
    }
  }
};

const M = [
  ["vote","VOTE WONBIN","#ff6b81","6%","14%","0s","🗳️"],
  ["cal","CALENDAR","#4ea1ff","20%","58%","-1s","📅"],
  ["pro","WONBIN's⭐️","#ffb48a","85%","25%","-2s","🎸"],
  ["game","GAMING CENTER","#b28cff","8%","72%","-4s","🎮"],
  ["cmt","RANDOM COMMENT","#ffd24d","82%","65%","-5s","💬"],
  ["trk","CAMPAIGN TRACKER","#35d0c0","90%","48%","-1.5s","📊"],
  ["qa","Q&A","#ff9ad5","10%","40%","-1s","❓"],
  ["event","ALL EVENT LINK","#7ddf4a","78%","8%","-3s","🔗"],
  ["from","FROM WONBIN","#8ff9ff","22%","27%","-2.5s","💌"]
];


/* =========================================================
   HELPERS
========================================================= */

const $ = s =>
  document.querySelector(s);

const st =
  $("#stage");

const dk =
  $("#dock");


const esc = s =>
  String(s ?? '').replace(
    /[&<>"]/g,
    c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    }[c])
  );


const card = (o, ic) => `
  <div class="card" style="--c:#555">

    <div
      class="th"
      ${
        o.img
          ? `style="background-image:url('${esc(o.img)}')"`
          : ""
      }
    >
      ${o.img ? "" : ic}
    </div>

    <div class="cb">

      <p>
        ${esc(o.d || "")}
      </p>

      <a
        class="btn"
        href="${esc(o.u)}"
        target="_blank"
        rel="noopener"
      >
        เปิดลิงก์ ↗
      </a>

    </div>

  </div>
`;

const V = {

  vote: () => `
    <div class="grid">

      ${CFG.vote.map(v => `
        <div class="card">

          <div class="cb">

            <b>
              ${esc(v.n)}
            </b>

            <p>
              ${esc(v.d)}
            </p>

            <a
              class="btn"
              href="${esc(v.u)}"
              target="_blank"
              rel="noopener"
            >
              โหวตเลย ↗
            </a>

          </div>

        </div>
      `).join("")}

    </div>
  `,


  cal: () => `
    <div class="cal">

      <div class="calh">

        <h2>
          <s>★</s>
          Wonbin Event Calendar
          <s>★</s>
        </h2>

        <small>
          BY ONLYWONBIN TH
        </small>

      </div>


      <div class="calw">

        <iframe
          src="${esc(CFG.calendar)}"
          loading="lazy"
          title="calendar"
        ></iframe>

      </div>


      <div class="calf">

        <span>
          📅 อัปเดตอัตโนมัติจาก Google Calendar
        </span>

        <a
          class="btn"
          href="${esc(CFG.calendar2)}"
          target="_blank"
          rel="noopener"
        >
          เปิดแบบเต็ม ↗
        </a>

      </div>

    </div>
  `,


  pro: () =>
    CFG.pro.length

      ? `
        <div class="pro-gallery">

          ${CFG.pro.map((p, i) => `

            <div
              class="pro-page ${i === 0 ? "cover" : ""}"
            >

              <img
                src="${esc(p)}"
                alt="WONBIN PROFILE ${i + 1}"
              >

              <span class="pro-num">
                ${String(i + 1).padStart(2, "0")}
              </span>

            </div>

          `).join("")}

        </div>
      `

      : `
        <p>
          ยังไม่มีรูป Profile
        </p>
      `,


  game: () => `
    <div class="game-embed">

      <iframe
        src="${esc(CFG.game.u)}"
        title="RIIZE AIR Certificate"
        loading="lazy"
        allow="fullscreen"
      ></iframe>

      <div class="game-actions">

        <span>
          🎮 RIIZE AIR Certificate
        </span>

        <a
          class="btn"
          href="${esc(CFG.game.u)}"
          target="_blank"
          rel="noopener"
        >
          เปิดเต็มจอ ↗
        </a>

      </div>

    </div>
  `,


  cmt: () => `
    <div class="site-embed">

      <iframe
        src="${esc(CFG.comment.u)}"
        title="Random Comment"
        loading="lazy"
        allow="clipboard-write"
      ></iframe>

      <div class="site-actions">

        <span>
          💬 Random Comment
        </span>

        <a
          class="btn"
          href="${esc(CFG.comment.u)}"
          target="_blank"
          rel="noopener"
        >
          เปิดแบบเต็ม ↗
        </a>

      </div>

    </div>
  `,


  trk: () => `
    <div class="site-embed">

      <iframe
        src="${esc(CFG.tracker.u)}"
        title="Campaign Tracker"
        loading="lazy"
      ></iframe>

      <div class="site-actions">

        <span>
          📊 Campaign Tracker
        </span>

        <a
          class="btn"
          href="${esc(CFG.tracker.u)}"
          target="_blank"
          rel="noopener"
        >
          เปิดแบบเต็ม ↗
        </a>

      </div>

    </div>
  `,


  event: () => `
    <div class="site-embed">

      <iframe
        src="${esc(CFG.events.u)}"
        title="All Event Link"
        loading="lazy"
        allow="clipboard-write"
      ></iframe>

      <div class="site-actions">

        <span>
          🔗 ALL EVENT LINK
        </span>

        <a
          class="btn"
          href="${esc(CFG.events.u)}"
          target="_blank"
          rel="noopener"
        >
          เปิดแบบเต็ม ↗
        </a>

      </div>

    </div>
  `,


  qa: () => {

    const q =
      CFG.qa;

    if (!q.length) {

      return `
        <p>
          ยังไม่มีรูป Q&A
        </p>
      `;
    }

    return `
      <div class="qa">

        <div class="qs">

          ${q.map((o, i) => `

            <button onclick="qa(${i})">

              ${
                o.img

                  ? `
                    <img
                      src="${esc(o.img)}"
                      alt=""
                    >
                  `

                  : i + 1
              }

            </button>

          `).join("")}

        </div>


        <div class="qm">

          <div class="qt">

            <button onclick="qa(QI - 1)">
              ‹
            </button>

            <b id="qn"></b>

            <button onclick="qa(QI + 1)">
              Next ›
            </button>

          </div>


          <div
            class="qv"
            id="qv"
          ></div>


          <p id="qc"></p>

        </div>

      </div>
    `;
  },
        from: () => `
        <div class="wonbin-video">

            <div class="wonbin-video-head">
            <span>💌</span>

            <div>
                <b>FROM WONBIN TO YOU</b>
                <div class="wonbin-video-sub">A MESSAGE FOR BRIIZE ♡</div>
            </div>
            </div>

            <div class="wonbin-video-player">
            <video
                id="fromWonbinVideo"
                controls
                playsinline
                preload="auto"
            >
                <source
                src="${esc(CFG.fromWonbin.video)}"
                type="video/mp4"
                >
            </video>
            </div>

            <div class="wonbin-message">
            ${esc(
                CFG.fromWonbin.text?.[currentLanguage] ||
                CFG.fromWonbin.text?.th ||
                ""
            )}
            </div>

        </div>
        `,
};

function renderFolders() {

  /*
   * กันกรณี init ซ้ำ
   * ลบ folder เก่าก่อน
   */
  st
    .querySelectorAll(".f")
    .forEach(el =>
      el.remove()
    );


  /*
   * clear dock
   */
  dk.innerHTML = "";


  /*
   * ค่อยสร้าง folder
   */
  M.forEach(
    ([k,n,c,x,y,d,ic]) => {

      /* Desktop folder */

      const b =
        document.createElement(
          "button"
        );

      b.className =
        "f";

      b.style.cssText =
        `--c:${c};--x:${x};--y:${y};--d:${d}`;

      b.innerHTML = `
        <i></i>
        <span>${n}</span>
      `;

      b.onclick =
        () => open(k,n);

      st.appendChild(b);


      /* Dock */

      const q =
        document.createElement(
          "button"
        );

      q.style.setProperty(
        "--c",
        c
      );

      q.textContent =
        ic;

      q.title =
        n;

      q.onclick =
        () => open(k,n);

      dk.appendChild(q);
    }
  );
}

const intro = k => {

  const i =
    CFG.intro?.[k];

  if (!i) {
    return "";
  }


  const linksHTML =
    Array.isArray(i.links)

      ? i.links.map(group => `

          <div class="intro-link-group">

            <b class="intro-link-title">
              ${esc(group.title || "")}
            </b>

            <div class="intro-link-list">

              ${
                (group.items || [])
                  .map(link => `

                    <a
                      class="intro-link"
                      href="${esc(link.url)}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>🔗</span>
                      ${esc(link.text)}
                    </a>

                  `)
                  .join("")
              }

            </div>

          </div>

        `).join("")

      : "";


  return `
    <div class="intro">

      ${
        i.img

          ? `
            <img
              src="${esc(i.img)}"
              alt=""
            >
          `

          : `
            <div class="ph"></div>
          `
      }


      <div class="intro-content">

        ${
          i.t

            ? `
              <p class="intro-text">
                ${esc(i.t)}
              </p>
            `

            : ""
        }


        ${
          linksHTML

            ? `
              <div class="intro-links">
                ${linksHTML}
              </div>
            `

            : ""
        }


        ${
          i.note

            ? `
              <div class="intro-note">
                ${esc(i.note)}
              </div>
            `

            : ""
        }

      </div>

    </div>
  `;
};

function open(k,n) {

  $("#ttl").textContent =
    n;

  $("#bd").innerHTML =
    intro(k) +
    V[k]();

if (k === "from") {
  const video = document.querySelector("#fromWonbinVideo");

  if (video) {
    video.currentTime = 0;

    video.play().catch(error => {
      console.log("Video autoplay blocked:", error);
    });
  }
}

  if (
    k === "qa" &&
    CFG.qa.length
  ) {

    qa(0);
  }


  $("#ov")
    .classList
    .add("on");
}

let QI = 0;


function qa(i) {

  const q =
    CFG.qa;


  if (!q.length) {
    return;
  }


  i =
    (i + q.length) %
    q.length;


  QI =
    i;


  const o =
    q[i];


  $("#qn").textContent =
    "Q&A " +
    (i + 1) +
    " / " +
    q.length;


  $("#qv").innerHTML =
    o.img

      ? `
        <img
          src="${esc(o.img)}"
          alt=""
        >
      `

      : `
        <div style="font-size:60px">
          ❓
        </div>
      `;


  $("#qc").textContent =
    o.c || "";


  document
    .querySelectorAll(".qs button")
    .forEach(
      (b,j) =>
        b.classList.toggle(
          "on",
          j === i
        )
    );
}


/* =========================================================
   CLOSE WINDOW
========================================================= */

const close = () => {

      /* หยุด video ก่อน */
  $("#bd")
    .querySelectorAll("video")
    .forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

  $("#ov")
    .classList
    .remove("on");

  $("#bd").innerHTML =
    "";
};


$("#x").onclick =
  close;


$("#ov").onclick =
  e => {

    if (
      e.target.id === "ov"
    ) {

      close();
    }
  };


addEventListener(
  "keydown",
  e => {

    if (
      e.key === "Escape"
    ) {

      close();

      $("#ann")
        .classList
        .remove("on");
    }
  }
);

function renderAnnouncementText(text) {
  const linkRegex =
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

  let result = "";
  let lastIndex = 0;
  const source = String(text ?? "");

  for (const match of source.matchAll(linkRegex)) {
    const index = match.index;

    // ข้อความก่อนลิงก์
    result += esc(source.slice(lastIndex, index))
      .replace(/\r?\n/g, "<br>");

    // ลิงก์
    const label = esc(match[1]);
    const url = esc(match[2]);

    result += `<a
      href="${url}"
      target="_blank"
      rel="noopener noreferrer"
      class="announcement-link"
    >${label}</a>`;

    lastIndex = index + match[0].length;
  }

  // ข้อความหลังลิงก์
  result += esc(source.slice(lastIndex))
    .replace(/\r?\n/g, "<br>");

  return result;
}

function renderAnnouncement() {
  $("#at").textContent =
    CFG.announce?.t || "";

  $("#ab").innerHTML =
    renderAnnouncementText(CFG.announce?.b || "");

  if (CFG.announce?.img) {
    $("#ai").src = CFG.announce.img;
    $("#ai").style.display = "block";
  } else {
    $("#ai").removeAttribute("src");
    $("#ai").style.display = "none";
  }
}

function initSite() {
  /* สร้าง folder หลัง CFG พร้อม */
  renderFolders();
  /* render ประกาศหลัง CFG พร้อม */
  renderAnnouncement();
}

/* =========================================================
   LOAD GOOGLE SHEET
========================================================= */

async function loadCFG() {

  try {

    const response =
      await fetch(
        `${SHEET_API}?t=${Date.now()}`,
        {
          cache: "no-store"
        }
      );

    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}`
      );
    }

    const data =
      await response.json();

    CFG = {
      ...CFG,
      ...data,

      announce: {
        ...CFG.announce,
        ...(data.announce || {})
      },

      intro: {
        ...CFG.intro,
        ...(data.intro || {})
      },

      game: {
        ...CFG.game,
        ...(data.game || {})
      },

      comment: {
        ...CFG.comment,
        ...(data.comment || {})
      },

      tracker: {
        ...CFG.tracker,
        ...(data.tracker || {})
      },

      events: {
        ...CFG.events,
        ...(data.events || {})
      }
    };
  } catch(error) {

    console.error(
      "Google Sheet load failed:",
      error
    );
  }
initSite();

hideSiteLoading();
}

const callScreen =
  document.querySelector('#callScreen');

const callStatus =
  document.querySelector('#callStatus');

const callText =
  document.querySelector('#callText');

const incomingActions =
  document.querySelector('#incomingActions');

const activeCallActions =
  document.querySelector('#activeCallActions');

const acceptCall =
  document.querySelector('#acceptCall');

const declineCall =
  document.querySelector('#declineCall');

const endCall =
  document.querySelector('#endCall');

const callRingtone =
  document.querySelector('#callRingtone');

const wonbinVoice =
  document.querySelector('#wonbinVoice');
const callMessage =
  document.querySelector('#callMessage');
const wonbinToast =
  document.querySelector('#wonbinToast');

const wonbinToastText =
  document.querySelector('#wonbinToastText');

const wonbinBye =
  document.querySelector('#wonbinBye');

let wonbinToastTimer = null;

const CALL_MESSAGES = {
  th: `🎸 : ฮัลโหล? อยู่ไหนน? อยู่ในใจผมหรอ? อา อะไรกันเนี่ย~ ผมกำลังเข้าไปในใจของทุกคนนะ คลาดกันซะแล้ว เดี๋ยวผมจะรีบไปหาตอนนี้เลย ไว้เจอกันในใจบรีซนะ~ ♡`,
  en: `🎸 : Hello? Where are you? Are you in my heart? Ah, what am I saying~? I'm actually on my way into everyone's hearts right now. Looks like we just missed each other. I'll hurry over to see you right away. See you in BRIIZE's heart~ ♡`
};
const BYE_MESSAGES = {
  th: `รักนะ เด็กน้อยของผม ♡`,
  en: `My baby girl, I love you ♡`
};

/*
 * ตอนนี้ใช้ภาษาไทย
 * อนาคตเปลี่ยนเป็น 'en' ได้
 */
let currentLanguage = 'th';

let wonbinCallTimer = null;
let callDurationTimer = null;
let callStartedAt = null;
let wonbinCallScheduled = false;

function scheduleWonbinCall() {

  if (wonbinCallScheduled) {
    return;
  }

  wonbinCallScheduled = true;

  clearTimeout(
    wonbinCallTimer
  );

const delay =
  10000 +
  Math.random() * 10000;

  wonbinCallTimer =
    setTimeout(() => {

      showWonbinCall();

    }, delay);
}

function showWonbinCall() {

  callStatus.textContent =
    'INCOMING CALL...';

  callText.textContent =
    'WONBIN is calling you... ♡';
 /* ยังไม่แสดงข้อความ */
  callMessage.textContent = '';

  callMessage.classList.remove(
    'show'
  );


  incomingActions.style.display =
    'flex';

  activeCallActions.style.display =
    'none';


  callScreen
    .classList
    .add('show');

  callRingtone.currentTime =
    0;


  callRingtone
    .play()
    .catch(error => {

    });
}

acceptCall.addEventListener(
  'click',
  async () => {
    callRingtone.pause();

    callRingtone.currentTime =
      0;

    callStatus.textContent =
      'CONNECTED ♡';

    callText.textContent =
      '00:00';
 /* แสดงข้อความ WONBIN */

    callMessage.textContent =
      CALL_MESSAGES[currentLanguage];

    callMessage.classList.add(
      'show'
    );

    incomingActions.style.display =
      'none';

    activeCallActions.style.display =
      'flex';

    callStartedAt =
      Date.now();

    startCallDuration();
    wonbinVoice.currentTime =
      0;

    try {

      await wonbinVoice.play();

    } catch(error) {

    }
  }
);

declineCall.addEventListener(
  'click',
  async () => {
    callRingtone.pause();
    callRingtone.currentTime = 0;
    callScreen.classList.remove(
      'show'
    );
    showWonbinToast();
    wonbinBye.currentTime = 0;
    try {
      await wonbinBye.play();
    } catch(error) {
    }
  }
);

endCall.addEventListener(
  'click',
  () => {

    closeWonbinCall();

  }
);
function showWonbinToast() {

  clearTimeout(
    wonbinToastTimer
  );

  wonbinToastText.textContent =
    BYE_MESSAGES[currentLanguage];

  wonbinToast.classList.add(
    'show'
  );


  /* แสดง 5 วินาที */
  wonbinToastTimer =
    setTimeout(() => {

      wonbinToast.classList.remove(
        'show'
      );

    }, 5000);
}
function startCallDuration() {

  clearInterval(
    callDurationTimer
  );


  callDurationTimer =
    setInterval(() => {

      if (!callStartedAt) {
        return;
      }


      const seconds =
        Math.floor(
          (
            Date.now() -
            callStartedAt
          ) / 1000
        );


      const min =
        Math.floor(
          seconds / 60
        );


      const sec =
        seconds % 60;


      callText.textContent =
        `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

    }, 1000);
}


/* ---------- close call ---------- */

function closeWonbinCall() {

  /*
   * ringtone
   */
  callRingtone.pause();

  callRingtone.currentTime =
    0;


  /*
   * WONBIN voice
   */
  wonbinVoice.pause();

  wonbinVoice.currentTime =
    0;

  clearInterval(
    callDurationTimer
  );

  callStartedAt =
    null;

  callScreen
    .classList
    .remove('show');
}

wonbinVoice.addEventListener(
  'ended',
  () => {
    clearInterval(
      callDurationTimer
    );
    callStatus.textContent =
      'CALL ENDED';
    callText.textContent =
      'WONBIN ♡';
    setTimeout(() => {
      closeWonbinCall();
    }, 1500);
  }
);

function hideSiteLoading() {
  const loading =
    document.querySelector(
      '#siteLoading'
    );

  if (!loading) {
    return;
  }

  loading.classList.add(
    'hide'
  );

  setTimeout(() => {

    loading.remove();

  }, 700);
}

$("#ok").onclick = () => {
  $("#ann")
    .classList
    .remove("on");
  scheduleWonbinCall();
};


$("#ax").onclick = () => {
  $("#ann")
    .classList
    .remove("on");
  scheduleWonbinCall();
};

loadCFG();
