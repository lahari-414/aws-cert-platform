// ============================================
//   SERVER.JS — AWS Certification Platform
//   Runs on: http://localhost:3000
//   Uses: Google Gemini FREE API
// ============================================

const express = require('express');
const cors    = require('cors');
const https   = require('https');   // built into Node — no install needed
const path    = require('path');    // built into Node — no install needed

const app  = express();
const PORT = 3000;

// -----------------------------------------------
// PASTE YOUR FREE GEMINI API KEY BELOW
// Get it free at: https://aistudio.google.com/apikey
// -----------------------------------------------
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";

// Middleware
app.use(cors());
app.use(express.json());

// -----------------------------------------------
// SERVE ALL FRONTEND FILES (index.html, style.css, app.js)
// When you open localhost:3000 it serves index.html automatically
// -----------------------------------------------
app.use(express.static(path.join(__dirname)));

// -----------------------------------------------
// ROOT ROUTE — serves index.html
// -----------------------------------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// -----------------------------------------------
// API ROUTE — calls Gemini AI to generate questions
// Called by app.js when user submits the form
// -----------------------------------------------
app.post('/api/generate-questions', (req, res) => {

  const prompt = `Generate exactly 10 AWS Cloud Practitioner exam multiple choice questions.

Cover these topics (2 questions each):
1. Cloud Computing basics and deployment models
2. AWS Core Services (EC2, S3, Lambda, RDS)
3. AWS Security and IAM
4. AWS Pricing models (On-Demand, Reserved, Spot)
5. AWS Global Infrastructure (Regions, AZs, Edge Locations)

Rules:
- Exactly 4 options per question
- Only ONE correct answer
- correctIndex is 0-based (0=first option)
- Return ONLY raw JSON array, no markdown, no backticks

[{"question":"...","options":["A","B","C","D"],"correctIndex":1}]`;

  const requestBody = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.8, maxOutputTokens: 3000 }
  });

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(requestBody)
    }
  };

  const apiReq = https.request(options, (apiRes) => {
    let data = '';
    apiRes.on('data', chunk => data += chunk);
    apiRes.on('end', () => {
      try {
        const parsed   = JSON.parse(data);
        let   aiText   = parsed.candidates[0].content.parts[0].text;
        aiText = aiText.replace(/```json/g, '').replace(/```/g, '').trim();
        const questions = JSON.parse(aiText);
        res.json({ success: true, questions });
      } catch (err) {
        console.error('Parse error:', err.message);
        res.json({ success: false, error: err.message });
      }
    });
  });

  apiReq.on('error', (err) => {
    console.error('API error:', err.message);
    res.json({ success: false, error: err.message });
  });

  apiReq.write(requestBody);
  apiReq.end();
});

// -----------------------------------------------
// START SERVER
// -----------------------------------------------
app.listen(PORT, () => {
  console.log('');
  console.log('========================================');
  console.log('  AWS Certification Platform - SERVER');
  console.log('========================================');
  console.log('');
  console.log('  Status : ✅ Running');
  console.log(`  URL    : http://localhost:${PORT}`);
  console.log('');
  console.log('  Open your browser and go to:');
  console.log(`  http://localhost:${PORT}`);
  console.log('');
  console.log('  Press Ctrl+C to stop the server');
  console.log('========================================');
});
