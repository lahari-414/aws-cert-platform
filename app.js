// ============================================
//   AWS CERTIFICATION PLATFORM - app.js
//   2 Modules | 10-Min Timer | Rotating Questions
// ============================================

const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";

// ============================================
// MODULE SCRIPTS (2 modules, 3 min each)
// ============================================
const videoScripts = {
  1: [
    "Welcome to Module 1 of the AWS Cloud Practitioner Course. In this module we will cover Cloud Computing fundamentals and all the AWS Core Services you need to know for your certification.",
    "Cloud computing is the on-demand delivery of computing services over the internet. These services include virtual servers, storage, databases, networking, software tools, and analytics platforms.",
    "Before cloud computing existed, every company had to purchase and maintain their own physical servers inside expensive data centers. This required huge upfront capital investment and dedicated IT teams.",
    "With cloud computing, you simply rent the resources you need from a provider like Amazon Web Services. You pay only for what you actually consume, just like how you pay for electricity at home.",
    "There are three main cloud deployment models. The first is Public Cloud, where services are delivered over the internet and shared securely among many users. AWS is the world's largest public cloud.",
    "The second model is Private Cloud, where cloud infrastructure is used exclusively by a single organization. This gives maximum control and is preferred in highly regulated industries like banking and healthcare.",
    "The third model is Hybrid Cloud, which connects your on-premises data center to a public cloud like AWS. This lets you move workloads between environments based on your business and compliance needs.",
    "The core benefits of cloud computing are: dramatically lower costs by eliminating hardware purchases, faster deployment since resources are available in minutes, and automatic global scale on demand.",
    "Additional benefits include built-in high reliability through redundant data centers, advanced security features that most companies could never afford on their own, and complete elasticity to handle any traffic spike.",
    "Amazon EC2 — Elastic Compute Cloud — is AWS's virtual server service. You choose from hundreds of instance types optimized for compute, memory, storage, or GPU workloads and pay by the second.",
    "Amazon S3 — Simple Storage Service — is AWS's object storage. It stores files of any type and size with eleven nines of durability. That means your data is incredibly safe and always available.",
    "S3 is used for backup and disaster recovery, hosting static websites, storing media files, archiving data cheaply using the Glacier storage class, and serving files directly to applications worldwide.",
    "AWS Lambda is the serverless compute service. You write your function code, upload it to Lambda, and it runs automatically whenever an event triggers it — such as a file upload, an API call, or a schedule.",
    "With Lambda you never provision or manage servers. It scales automatically from zero to thousands of concurrent executions in milliseconds. You are billed only for the milliseconds your code actually runs.",
    "Amazon RDS is the Relational Database Service. It makes it simple to set up and operate managed databases in the cloud, supporting MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora.",
    "RDS handles time-consuming database administration tasks automatically — including hardware provisioning, database setup, patching, automated backups, and point-in-time recovery if something goes wrong.",
    "Amazon DynamoDB is AWS's fully managed NoSQL database. It delivers single-digit millisecond performance at any scale, making it perfect for mobile apps, gaming leaderboards, and real-time data processing.",
    "Together, EC2, S3, Lambda, RDS, and DynamoDB form the powerful foundation of almost every application built on AWS. Excellent work — you have completed Module 1 of your AWS Cloud Practitioner Course!"
  ],
  2: [
    "Welcome to Module 2 of the AWS Cloud Practitioner Course. In this module we will cover AWS Security, Identity and Access Management, Pricing Models, and the AWS Global Infrastructure.",
    "Security is the number one priority at AWS. AWS provides dozens of security services and features to help you protect your workloads, data, and applications running in the cloud.",
    "AWS IAM stands for Identity and Access Management. IAM is the service that controls who is allowed to access your AWS resources and exactly what actions they are permitted to perform.",
    "With IAM, you create a unique user account for every person who needs AWS access. You must never share your root account credentials with anyone, not even your own team members.",
    "IAM Groups let you organize multiple users and apply the same permissions to the entire group at once. For example, create a Developers group with access to EC2 and S3 only.",
    "IAM Roles are similar to users but are designed to be assumed by AWS services, applications, or users from other accounts. Roles use temporary security credentials that automatically expire.",
    "IAM Policies are JSON documents that define exactly which actions are allowed or denied on which AWS resources. You attach policies to users, groups, or roles to grant permissions.",
    "The principle of least privilege is a critical security concept. It means you should only grant users and services the absolute minimum permissions needed to complete their specific task — nothing more.",
    "The AWS Shared Responsibility Model is fundamental to understanding cloud security. AWS is responsible for security of the cloud itself — the physical hardware, networking, and data center facilities.",
    "You, the customer, are responsible for security in the cloud — meaning your own data, the operating systems on your EC2 instances, your application code, your IAM configurations, and your firewall rules.",
    "AWS Shield is a managed Distributed Denial of Service protection service. Shield Standard is free for all AWS customers and protects against the most common network layer attacks automatically.",
    "AWS WAF is the Web Application Firewall. It filters incoming HTTP and HTTPS traffic to your applications and blocks common web exploits like SQL injection and cross-site scripting attacks.",
    "Amazon GuardDuty is an intelligent threat detection service powered by machine learning. It continuously monitors your AWS account activity and network traffic to identify malicious or unauthorized behavior.",
    "Always enable Multi-Factor Authentication on your AWS root account and all IAM users. MFA adds a second layer of security by requiring a one-time code from your phone in addition to your password.",
    "AWS pricing follows a simple pay-as-you-go model with no upfront costs and no termination fees. On-Demand instances are billed by the hour or second — perfect for short-term and unpredictable workloads.",
    "Reserved Instances offer discounts of up to 72 percent compared to On-Demand pricing when you commit to using AWS for one or three years. They are ideal for steady, predictable production workloads.",
    "An AWS Region is a physical geographic location in the world that contains multiple Availability Zones. AWS currently operates over 30 Regions globally including North America, Europe, and Asia Pacific.",
    "Each Availability Zone consists of one or more fully isolated data centers with independent power, cooling, and physical security. Deploying your application across multiple AZs protects you against any single failure. Congratulations — you have completed both modules and are now ready for your AWS certification exam!"
  ]
};

// ============================================
// THREE QUESTION BANKS — rotated per attempt
// ============================================
const questionBanks = [
  // BANK A
  [
    {question:"What is cloud computing?",options:["Storing data locally on hard drives","Delivering computing services over the internet","Installing software on USB drives","Using personal computers only"],correctIndex:1},
    {question:"Which is a Public Cloud deployment model?",options:["Your own company's private servers","AWS, Azure or Google Cloud shared by many users","A mix of private and public cloud","Community-owned servers"],correctIndex:1},
    {question:"What does Amazon EC2 provide?",options:["Object storage for files","Scalable virtual servers in the cloud","A Content Delivery Network","Email services"],correctIndex:1},
    {question:"Amazon S3 is primarily used for?",options:["Running virtual machines","Sending emails","Object storage for any type of data","Managing databases"],correctIndex:2},
    {question:"What does IAM stand for in AWS?",options:["Internet Access Management","Integrated Application Module","Identity and Access Management","Internal AWS Module"],correctIndex:2},
    {question:"In the Shared Responsibility Model, who patches the EC2 guest OS?",options:["AWS is fully responsible","The customer is responsible","Both equally","A third party"],correctIndex:1},
    {question:"Which pricing model offers up to 90% discount using spare AWS capacity?",options:["On-Demand","Reserved Instances","Spot Instances","Savings Plans"],correctIndex:2},
    {question:"Which pricing model requires a 1 or 3-year commitment for big discounts?",options:["On-Demand","Reserved Instances","Spot Instances","Free Tier"],correctIndex:1},
    {question:"What is an AWS Availability Zone?",options:["A global CDN node","One or more data centers in a region with redundant power and networking","A pricing tier","A type of EC2 instance"],correctIndex:1},
    {question:"What does Amazon CloudFront use Edge Locations for?",options:["Running EC2 instances worldwide","Storing RDS backups","Caching and delivering content to users with low latency","Managing IAM policies globally"],correctIndex:2}
  ],
  // BANK B
  [
    {question:"What is the AWS Free Tier?",options:["A paid enterprise support plan","Allows exploring AWS services free up to certain limits","A type of EC2 instance","A serverless database service"],correctIndex:1},
    {question:"Which service is serverless and runs code in response to events?",options:["EC2","RDS","AWS Lambda","S3"],correctIndex:2},
    {question:"What does S3 stand for?",options:["Secure Storage Service","Simple Storage Service","Structured Storage System","Server Storage Solution"],correctIndex:1},
    {question:"Which AWS service provides managed relational databases?",options:["DynamoDB","S3","AWS Lambda","Amazon RDS"],correctIndex:3},
    {question:"What does MFA stand for in AWS security?",options:["Multi-Function Application","Multi-Factor Authentication","Managed Firewall Access","Main Framework Authorization"],correctIndex:1},
    {question:"AWS Shield protects against which type of attack?",options:["SQL Injection","Phishing","DDoS attacks","Ransomware"],correctIndex:2},
    {question:"How many Availability Zones does each AWS Region contain at minimum?",options:["1","2","3","5"],correctIndex:2},
    {question:"Which tool helps you estimate your monthly AWS bill before deploying?",options:["AWS Budgets","AWS Cost Explorer","AWS Pricing Calculator","AWS Trusted Advisor"],correctIndex:2},
    {question:"What is the principle of least privilege?",options:["Giving all users admin access","Giving users only minimum permissions they need","Denying all access by default","Sharing passwords securely"],correctIndex:1},
    {question:"What does Amazon GuardDuty do?",options:["Manages DNS records","Provides intelligent threat detection","Stores encryption keys","Monitors billing costs"],correctIndex:1}
  ],
  // BANK C
  [
    {question:"Which cloud model gives organizations the most infrastructure control?",options:["Public Cloud","Community Cloud","Private Cloud","Hybrid Cloud"],correctIndex:2},
    {question:"What is the maximum object size you can store in Amazon S3?",options:["500 MB","5 GB","5 TB","50 TB"],correctIndex:2},
    {question:"Which AWS service provides a web application firewall?",options:["AWS Shield","AWS WAF","Amazon GuardDuty","AWS Inspector"],correctIndex:1},
    {question:"What is an IAM Role primarily used for?",options:["Creating billing alerts","Allowing AWS services to access other services securely","Storing passwords","Monitoring network traffic"],correctIndex:1},
    {question:"Which EC2 pricing model is best for short-term unpredictable workloads?",options:["Reserved Instances","Spot Instances","On-Demand Instances","Dedicated Hosts"],correctIndex:2},
    {question:"What is Amazon CloudFront?",options:["A database service","A serverless computing platform","A Content Delivery Network","An identity management service"],correctIndex:2},
    {question:"Which AWS tool lets you visualize and manage your costs over time?",options:["AWS Config","AWS Cost Explorer","AWS CloudTrail","AWS Inspector"],correctIndex:1},
    {question:"What are AWS Regions?",options:["Individual data centers","Edge cache locations","Geographic areas containing multiple Availability Zones","Pricing tiers for compute"],correctIndex:2},
    {question:"Which AWS support plan is completely free?",options:["Developer","Business","Basic","Enterprise"],correctIndex:2},
    {question:"In the Shared Responsibility Model, who secures the physical data center hardware?",options:["The customer","AWS","Both equally","Third-party auditors"],correctIndex:1}
  ]
];

// ============================================
// GLOBAL STATE
// ============================================
let videosWatched      = [false, false];
let currentVideoId     = 0;
let videoPlaying       = false;
let speechSynthesis    = window.speechSynthesis;
let currentUtterance   = null;
let scriptIndex        = 0;
let videoTimerInterval = null;
let videoSeconds       = 0;
const VIDEO_DURATION   = 180; // 3 min per module

let userName  = "";
let userEmail = "";
let userQual  = "";

let questions    = [];
let currentQ     = 0;
let score        = 0;
let answeredQ    = false;
let attemptCount = 0; // rotates question bank A→B→C→A…

// ── Quiz 10-minute countdown ──
let quizTimerInterval = null;
let quizSecondsLeft   = 600; // 10 minutes
const QUIZ_DURATION   = 600;

const videoTitles = ["",
  "Module 1 — Cloud Computing & AWS Core Services",
  "Module 2 — Security, Pricing & Global Infrastructure"
];
const videoIcons = ["","☁️","🔐"];

// ============================================
// OPEN VIDEO
// ============================================
function openVideo(id) {
  if (id > 1 && !videosWatched[id-2]) {
    alert("Please complete Module 1 first!");
    return;
  }
  currentVideoId = id;
  videoSeconds   = 0;
  videoPlaying   = false;
  scriptIndex    = 0;
  clearInterval(videoTimerInterval);
  stopSpeech();

  document.getElementById("vpopupTitle").textContent      = videoTitles[id];
  document.getElementById("fakeScreenIcon").textContent   = videoIcons[id];
  document.getElementById("fakeScreenTitle").textContent  = videoTitles[id].replace(/Module \d — /,"");
  document.getElementById("fakeScreenStatus").textContent = "Press ▶ Play to start";
  document.getElementById("playPauseBtn").textContent     = "▶ Play";
  document.getElementById("playPauseBtn").disabled        = false;
  document.getElementById("fakeProgFill").style.width     = "0%";
  document.getElementById("fakeTimer").textContent        = "0:00 / 3:00";
  document.getElementById("waveWrap").style.display       = "none";
  document.getElementById("subtitleBar").style.display    = "none";
  document.getElementById("subtitleText").textContent     = "";
  document.getElementById("vcompleteArea").style.display  = "none";
  document.getElementById("videoPopup").style.display     = "flex";
}

function closeVideo() {
  stopSpeech();
  clearInterval(videoTimerInterval);
  videoPlaying = false;
  document.getElementById("videoPopup").style.display = "none";
}

function stopSpeech() {
  if (speechSynthesis.speaking) speechSynthesis.cancel();
  currentUtterance = null;
}

function togglePlay() {
  if (videoPlaying) pauseVideo(); else playVideo();
}

function playVideo() {
  videoPlaying = true;
  document.getElementById("playPauseBtn").textContent     = "⏸ Pause";
  document.getElementById("fakeScreenStatus").textContent = "▶ Playing...";
  document.getElementById("waveWrap").style.display       = "flex";
  document.getElementById("subtitleBar").style.display    = "flex";

  videoTimerInterval = setInterval(() => {
    videoSeconds++;
    const pct = Math.min((videoSeconds / VIDEO_DURATION) * 100, 100);
    document.getElementById("fakeProgFill").style.width = pct + "%";
    const m = Math.floor(videoSeconds/60), s = videoSeconds % 60;
    document.getElementById("fakeTimer").textContent = m+":"+(s<10?"0":"")+s+" / 3:00";
    if (videoSeconds >= VIDEO_DURATION) { clearInterval(videoTimerInterval); videoCompleted(); }
  }, 1000);

  speakNextLine();
}

function pauseVideo() {
  videoPlaying = false;
  clearInterval(videoTimerInterval);
  stopSpeech();
  document.getElementById("playPauseBtn").textContent     = "▶ Play";
  document.getElementById("fakeScreenStatus").textContent = "Paused — press Play to continue";
  document.getElementById("waveWrap").style.display       = "none";
}

function speakNextLine() {
  if (!videoPlaying) return;
  const script = videoScripts[currentVideoId];
  if (scriptIndex >= script.length) {
    document.getElementById("subtitleText").textContent = "✅ Module narration complete!";
    return;
  }
  const line = script[scriptIndex++];
  document.getElementById("subtitleText").textContent = line;

  const utterance   = new SpeechSynthesisUtterance(line);
  utterance.rate    = 0.92;
  utterance.pitch   = 1.0;
  utterance.volume  = 1.0;

  const voices    = speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    (v.name.includes("Google") || v.name.includes("Microsoft") ||
     v.name.includes("David")  || v.name.includes("Zira")) &&
    v.lang.startsWith("en")
  );
  if (preferred) utterance.voice = preferred;

  utterance.onend   = () => { if (videoPlaying) speakNextLine(); };
  utterance.onerror = () => { if (videoPlaying) speakNextLine(); };
  currentUtterance  = utterance;
  speechSynthesis.speak(utterance);
}

function videoCompleted() {
  stopSpeech();
  videoPlaying = false;
  document.getElementById("playPauseBtn").textContent     = "✓ Done";
  document.getElementById("playPauseBtn").disabled        = true;
  document.getElementById("fakeScreenStatus").textContent = "✅ Module completed!";
  document.getElementById("fakeProgFill").style.width     = "100%";
  document.getElementById("fakeTimer").textContent        = "3:00 / 3:00";
  document.getElementById("waveWrap").style.display       = "none";
  document.getElementById("subtitleText").textContent     = "🎉 Well done! 3 minutes done. Click below to mark complete.";
  document.getElementById("vcompleteArea").style.display  = "block";
}

function markVideoDone() {
  const id = currentVideoId;
  videosWatched[id-1] = true;

  const card = document.getElementById("vcard-"+id);
  card.classList.remove("video-locked");
  card.classList.add("video-done");
  document.getElementById("vstatus-"+id).innerHTML = '<span class="dot dot-done"></span> ✅ Completed';
  const btn = document.getElementById("vbtn-"+id);
  btn.textContent = "✓ Watched";
  btn.className   = "vbtn vbtn-done";
  btn.disabled    = true;

  if (id < 2) {
    const nid   = id + 1;
    const ncard = document.getElementById("vcard-"+nid);
    const nbtn  = document.getElementById("vbtn-"+nid);
    const nstat = document.getElementById("vstatus-"+nid);
    ncard.classList.remove("video-locked");
    ncard.classList.add("video-unlocked");
    nbtn.textContent = "▶ Watch Now";
    nbtn.className   = "vbtn";
    nbtn.disabled    = false;
    nbtn.onclick     = () => openVideo(nid);
    nstat.innerHTML  = '<span class="dot dot-active"></span> Ready to watch';
    const nthumb = ncard.querySelector(".vthumb");
    nthumb.onclick = () => openVideo(nid);
    const lockC = nthumb.querySelector(".play-circle");
    lockC.className   = "play-circle";
    lockC.textContent = "▶";
  }

  updateProgress();
  closeVideo();
  if (videosWatched.every(Boolean)) enableStartTest();
}

function updateProgress() {
  const done = videosWatched.filter(Boolean).length;
  document.getElementById("progressFill").style.width      = (done/2*100)+"%";
  document.getElementById("videoProgressText").textContent = done+" / 2 modules watched";
}

function enableStartTest() {
  document.getElementById("allDoneMsg").style.display = "block";
  const btn = document.getElementById("startTestBtn");
  btn.disabled    = false;
  btn.className   = "start-test-btn unlocked";
  btn.textContent = "🎯 Start Certification Test";
  document.getElementById("startHint").textContent = "All modules done! Click to begin your exam.";
}

// ============================================
// REGISTRATION FORM
// ============================================
function goToForm() {
  document.getElementById("screen-course").style.display = "none";
  document.getElementById("screen-form").style.display   = "block";
  window.scrollTo(0,0);
}

function submitForm() {
  const name   = document.getElementById("inp-name").value.trim();
  const qual   = document.getElementById("inp-qual").value;
  const email  = document.getElementById("inp-email").value.trim();
  const errBox = document.getElementById("formError");

  if (!name || !qual || !email) {
    errBox.style.display = "block";
    errBox.textContent   = "⚠️ Please fill in all fields before submitting.";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    errBox.style.display = "block";
    errBox.textContent   = "⚠️ Please enter a valid email address.";
    return;
  }

  userName  = name;
  userEmail = email;
  userQual  = qual;
  errBox.style.display = "none";

  document.getElementById("screen-form").style.display = "none";
  document.getElementById("screen-quiz").style.display = "block";
  window.scrollTo(0,0);

  buildQDots();
  loadQuestions();
}

// ============================================
// BUILD QUESTION DOTS
// ============================================
function buildQDots() {
  const c = document.getElementById("qDotsRow");
  c.innerHTML = "";
  for (let i=1; i<=10; i++) {
    const d = document.createElement("div");
    d.className   = "q-dot" + (i===1?" dot-current":"");
    d.id          = "qdot-"+i;
    d.textContent = i;
    c.appendChild(d);
  }
}

// ============================================
// LOAD QUESTIONS — rotates bank per attempt
// ============================================
function loadQuestions() {
  document.getElementById("aiLoader").style.display    = "block";
  document.getElementById("quizContent").style.display = "none";
  document.getElementById("timerDisplay").textContent  = "10:00";
  document.getElementById("timerBarFill").style.width  = "100%";
  document.getElementById("timerBarFill").classList.remove("timer-warning","timer-danger");

  // Pick bank based on attempt count (A→B→C→A…) then shuffle
  const bankIndex = attemptCount % 3;
  questions = shuffleArray([...questionBanks[bankIndex]]);

  // Also shuffle options within each question so even same bank feels fresh
  questions = questions.map(q => {
    const shuffled = shuffleOptions(q);
    return shuffled;
  });

  setTimeout(() => {
    document.getElementById("aiLoader").style.display    = "none";
    document.getElementById("quizContent").style.display = "block";
    currentQ  = 0;
    score     = 0;
    answeredQ = false;
    displayQuestion(0);
    startQuizTimer();
  }, 1200);
}

function shuffleArray(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleOptions(q) {
  // Pair each option with whether it is correct
  const paired = q.options.map((opt, i) => ({ opt, correct: i === q.correctIndex }));
  for (let i = paired.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [paired[i], paired[j]] = [paired[j], paired[i]];
  }
  return {
    question: q.question,
    options: paired.map(p => p.opt),
    correctIndex: paired.findIndex(p => p.correct)
  };
}

// ============================================
// ⏱️ QUIZ TIMER — 10 minutes
// ============================================
function startQuizTimer() {
  clearInterval(quizTimerInterval);
  quizSecondsLeft = QUIZ_DURATION;
  updateTimerDisplay();

  quizTimerInterval = setInterval(() => {
    quizSecondsLeft--;
    updateTimerDisplay();

    if (quizSecondsLeft <= 0) {
      clearInterval(quizTimerInterval);
      timeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m   = Math.floor(quizSecondsLeft / 60);
  const s   = quizSecondsLeft % 60;
  const pct = (quizSecondsLeft / QUIZ_DURATION) * 100;

  document.getElementById("timerDisplay").textContent = m+":"+(s<10?"0":"")+s;
  document.getElementById("timerBarFill").style.width = pct+"%";

  const fill = document.getElementById("timerBarFill");
  fill.classList.remove("timer-warning","timer-danger");
  if (quizSecondsLeft <= 60)       fill.classList.add("timer-danger");
  else if (quizSecondsLeft <= 180) fill.classList.add("timer-warning");
}

function timeUp() {
  // Auto-submit with current score
  document.getElementById("timeUpScoreTxt").textContent = "Score: "+score+" / 10";
  document.getElementById("timeUpPopup").style.display  = "flex";
}

function closeTimeUpPopup() {
  document.getElementById("timeUpPopup").style.display = "none";
  showResult();
}

function stopQuizTimer() {
  clearInterval(quizTimerInterval);
}

// ============================================
// DISPLAY QUESTION
// ============================================
function displayQuestion(idx) {
  answeredQ = false;
  const q   = questions[idx];

  document.getElementById("qCounterTxt").textContent  = "Question "+(idx+1)+" of 10";
  document.getElementById("quizTopRight").textContent = "Exam — Question "+(idx+1)+" of 10";
  document.getElementById("qNumLabel").textContent    = idx+1;
  document.getElementById("qScoreTxt").textContent    = "Score: "+score+" / "+idx;
  document.getElementById("qText").textContent        = q.question;
  document.getElementById("aiEvalRow").style.display  = "none";
  document.getElementById("nextBtn").style.display    = "none";

  const opts = document.getElementById("qOptions");
  opts.innerHTML = "";
  ["A","B","C","D"].forEach((letter, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.innerHTML = `<div class="opt-letter">${letter}</div><span>${q.options[i]}</span>`;
    btn.onclick   = () => selectAnswer(i, btn, idx);
    opts.appendChild(btn);
  });

  document.querySelectorAll(".q-dot").forEach((d,i) => {
    d.classList.remove("dot-current");
    if (i===idx) d.classList.add("dot-current");
  });
}

// ============================================
// SELECT ANSWER
// ============================================
function selectAnswer(selectedIdx, clickedBtn, qIdx) {
  if (answeredQ) return;
  answeredQ = true;

  document.querySelectorAll(".opt-btn").forEach(b => b.style.pointerEvents="none");
  document.getElementById("aiEvalRow").style.display = "flex";

  setTimeout(() => {
    document.getElementById("aiEvalRow").style.display = "none";
    const correct = questions[qIdx].correctIndex;
    const allBtns = document.querySelectorAll(".opt-btn");

    allBtns[correct].classList.add("opt-correct");
    if (selectedIdx !== correct) {
      clickedBtn.classList.add("opt-wrong");
      document.getElementById("qdot-"+(qIdx+1)).className = "q-dot dot-wrong";
    } else {
      score++;
      document.getElementById("qdot-"+(qIdx+1)).className = "q-dot dot-correct";
    }

    document.getElementById("qScoreTxt").textContent = "Score: "+score+" / "+(qIdx+1);

    const nb = document.getElementById("nextBtn");
    nb.style.display = "inline-block";
    nb.textContent   = qIdx===9 ? "📊 See My Results →" : "Next Question →";
  }, 1500);
}

function nextQuestion() {
  currentQ++;
  if (currentQ < 10) displayQuestion(currentQ);
  else { stopQuizTimer(); showResult(); }
}

// ============================================
// SHOW RESULT
// ============================================
function showResult() {
  stopQuizTimer();
  document.getElementById("screen-quiz").style.display   = "none";
  document.getElementById("screen-result").style.display = "block";
  window.scrollTo(0,0);

  const passed = score >= 8;
  const rscore = document.getElementById("resultScore");
  rscore.textContent = score+" / 10";
  rscore.className   = "result-score "+(passed?"pass":"fail");

  if (passed) {
    document.getElementById("resultEmoji").textContent = "🏆";
    document.getElementById("resultTitle").textContent = "Congratulations, "+userName+"!";
    document.getElementById("resultMsg").textContent   =
      "You scored "+score+" out of 10 and have passed the AWS Cloud Practitioner Certification Exam! Your certificate is ready.";
    document.getElementById("certDlBtn").style.display = "inline-block";
    document.getElementById("retryBtn").style.display  = "none";

    document.getElementById("successPopupMsg").textContent = "Well done, "+userName+"! You are now AWS Cloud Practitioner Certified!";
    document.getElementById("successScoreTxt").textContent = "Score: "+score+" / 10";
    setTimeout(() => { document.getElementById("successPopup").style.display = "flex"; }, 700);

  } else {
    document.getElementById("resultEmoji").textContent = "😔";
    document.getElementById("resultTitle").textContent = "Not Qualified — "+userName;
    document.getElementById("resultMsg").textContent   =
      "You scored "+score+" out of 10. You need 8 or more correct answers to pass. Review the modules and try again!";
    document.getElementById("certDlBtn").style.display = "none";
    document.getElementById("retryBtn").style.display  = "inline-block";

    document.getElementById("failPopupMsg").textContent = "Don't give up, "+userName+"! Study the course modules and try again.";
    document.getElementById("failScoreTxt").textContent = "Score: "+score+" / 10";
    setTimeout(() => { document.getElementById("failPopup").style.display = "flex"; }, 700);
  }
}

function closeSuccessAndDownload() {
  document.getElementById("successPopup").style.display = "none";
  downloadCertificate();
}

function closeFailPopup() {
  document.getElementById("failPopup").style.display = "none";
}

function retryExam() {
  attemptCount++; // next attempt → different question bank
  currentQ    = 0;
  score       = 0;
  answeredQ   = false;
  questions   = [];

  document.getElementById("screen-result").style.display = "none";
  document.getElementById("screen-quiz").style.display   = "block";
  window.scrollTo(0,0);

  buildQDots();
  loadQuestions();
}

// ============================================
// DOWNLOAD CERTIFICATE
// ============================================
function downloadCertificate() {
  const today   = new Date();
  const dateStr = today.toLocaleDateString("en-IN", {day:"2-digit",month:"long",year:"numeric"});

  const certHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Great+Vibes&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#021b5a;display:flex;justify-content:center;align-items:center;min-height:100vh;font-family:'Poppins',sans-serif;padding:20px;}
.certificate{width:1100px;height:700px;background:#fff;position:relative;overflow:hidden;border:14px solid #082567;box-shadow:0 0 20px rgba(0,0,0,0.3);}
.top-design{position:absolute;top:0;left:0;width:100%;height:60px;background:linear-gradient(90deg,#082567 40%,#0aa8e8 70%,#082567 100%);}
.top-design::after{content:'';position:absolute;right:180px;top:0;width:120px;height:60px;background:#f5a623;transform:skewX(-40deg);}
.top-design::before{content:'';position:absolute;right:130px;top:0;width:40px;height:60px;background:#082567;transform:skewX(-40deg);}
.bottom-design{position:absolute;bottom:0;left:0;width:100%;height:60px;background:linear-gradient(90deg,#082567 40%,#0aa8e8 70%,#082567 100%);}
.bottom-design::after{content:'';position:absolute;left:180px;bottom:0;width:120px;height:60px;background:#f5a623;transform:skewX(-40deg);}
.bottom-design::before{content:'';position:absolute;left:130px;bottom:0;width:40px;height:60px;background:#082567;transform:skewX(-40deg);}
.content{position:relative;z-index:2;text-align:center;padding:70px 80px 40px;}
.brand{font-size:46px;font-weight:700;margin-bottom:10px;}
.brand span:first-child{color:#f5a623;}.brand span:last-child{color:#0b5eb7;}
.line{width:70%;height:2px;background:#ddd;margin:10px auto;}
.title{font-size:36px;color:#0b1d68;font-family:'Times New Roman',serif;margin-bottom:8px;font-weight:bold;}
.name{font-family:'Great Vibes',cursive;font-size:58px;color:#1d63d8;margin-top:10px;}
.underline{width:60%;border-bottom:3px dotted #555;margin:0 auto 14px;}
.text{font-size:20px;color:#555;margin-bottom:10px;}
.course{font-size:26px;color:#081d6b;font-weight:700;margin-bottom:14px;}
.description{width:80%;margin:0 auto;font-size:18px;color:#444;line-height:1.6;}
.date-issued{font-size:14px;color:#888;margin-top:8px;}
.verified{position:absolute;bottom:110px;right:255px;width:190px;height:190px;border:6px solid rgba(135,206,235,0.4);border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:46px;font-weight:bold;color:rgba(135,206,235,0.4);transform:rotate(-20deg);}
.signature{position:absolute;right:80px;bottom:90px;text-align:center;}
.signature .sign{font-size:68px;font-family:'Great Vibes',cursive;color:#000;}
.signature .name-sign{font-size:26px;font-weight:600;margin-top:-10px;}
.signature .role{font-size:22px;color:#555;}
@media print{body{background:white;}@page{size:A4 landscape;margin:0;}}
</style>
</head>
<body>
<div class="certificate">
  <div class="top-design"></div>
  <div class="bottom-design"></div>
  <div class="content">
    <h1 class="brand"><span>Amivel</span> <span>Tech</span></h1>
    <div class="line"></div>
    <h2 class="title">CERTIFICATE OF COMPLETION</h2>
    <div class="line"></div>
    <h1 class="name">${userName}</h1>
    <div class="underline"></div>
    <p class="text">has successfully completed the online course:</p>
    <h3 class="course">AWS CLOUD PRACTITIONER ESSENTIAL</h3>
    <p class="description">This professional has demonstrated initiative and a commitment to deepening their skills and advancing their career. Well done!</p>
    <p class="date-issued">Date of Completion: ${dateStr}</p>
  </div>
  <div class="verified">VERIFIED</div>
  <div class="signature">
    <div class="sign">J</div>
    <div class="name-sign">Jyothi</div>
    <div class="role">CEO, Amivel Tech</div>
  </div>
</div>
</body>
</html>`;

  const win = window.open("","_blank","width=1200,height=800");
  win.document.write(certHTML);
  win.document.close();
  win.onload = function() { setTimeout(() => { win.focus(); win.print(); }, 1500); };
}

// ============================================
// INIT
// ============================================
window.onload = function() {
  updateProgress();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }
};
