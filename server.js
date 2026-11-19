const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'SMART KNOWLEDGE server is running' });
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SMART KNOWLEDGE | منصة المعرفة الذكية</title>
  <style>
    :root {
      --bg: #07080d;
      --card: #101320;
      --gold: #f5b942;
      --purple: #8b5cf6;
      --blue: #38bdf8;
      --text: #f8fafc;
      --muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at top right, rgba(139,92,246,0.18), transparent 45%),
                  radial-gradient(circle at bottom left, rgba(56,189,248,0.15), transparent 45%),
                  var(--bg);
      color: var(--text);
      min-height: 100vh;
      line-height: 1.7;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 24px;
      border-bottom: 1px solid rgba(245,185,66,0.2);
      background: rgba(16,19,32,0.85);
      backdrop-filter: blur(10px);
      position: sticky;
      top: 0;
      z-index: 10;
    }
    .brand {
      font-weight: 800;
      font-size: 1.15rem;
      color: var(--gold);
      text-shadow: 0 0 18px rgba(245,185,66,0.35);
    }
    .badge {
      font-size: 0.8rem;
      padding: 4px 12px;
      border-radius: 999px;
      border: 1px solid rgba(56,189,248,0.5);
      color: var(--blue);
      box-shadow: 0 0 12px rgba(56,189,248,0.2);
    }
    .hero {
      max-width: 960px;
      margin: 36px auto 24px;
      padding: 0 20px;
      text-align: center;
    }
    .hero h1 {
      font-size: clamp(1.8rem, 4vw, 2.7rem);
      margin-bottom: 12px;
      background: linear-gradient(90deg, var(--gold), var(--blue), var(--purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero p {
      color: var(--muted);
      max-width: 680px;
      margin: 0 auto 24px;
    }
    .actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn {
      padding: 11px 22px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-weight: 700;
      font-size: 0.95rem;
      transition: transform 0.15s ease, box-shadow 0.2s ease;
    }
    .btn:active { transform: scale(0.98); }
    .btn-gold {
      background: var(--gold);
      color: #090b10;
      box-shadow: 0 0 20px rgba(245,185,66,0.35);
    }
    .btn-blue {
      background: rgba(56,189,248,0.14);
      color: var(--blue);
      border: 1px solid rgba(56,189,248,0.5);
    }
    .grid {
      max-width: 960px;
      margin: 24px auto 48px;
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
    }
    .card {
      background: var(--card);
      border: 1px solid rgba(139,92,246,0.25);
      border-radius: 16px;
      padding: 22px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    }
    .card h2 {
      font-size: 1.15rem;
      margin-bottom: 8px;
      color: var(--gold);
    }
    .card p { color: var(--muted); font-size: 0.92rem; }
    .panel {
      max-width: 960px;
      margin: 0 auto 48px;
      padding: 0 20px;
    }
    .box {
      background: var(--card);
      border: 1px solid rgba(56,189,248,0.3);
      border-radius: 16px;
      padding: 20px;
    }
    input, textarea {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 12px;
      padding: 12px;
      border-radius: 10px;
      border: 1px solid rgba(148,163,184,0.25);
      background: #090b12;
      color: var(--text);
      font-family: inherit;
    }
    .output {
      margin-top: 12px;
      padding: 14px;
      border-radius: 10px;
      background: rgba(56,189,248,0.08);
      border-right: 3px solid var(--blue);
      color: var(--text);
      white-space: pre-line;
      font-size: 0.92rem;
    }
  </style>
</head>
<body>
  <header>
    <div class="brand">SMART KNOWLEDGE | المعرفة الذكية</div>
    <div class="badge" id="server-status">جاري التحقق من الخادم...</div>
  </header>

  <section class="hero">
    <h1>مرحباً بك في منصة المعرفة الذكية</h1>
    <p>منصة تعليمية تفاعلية تجمع بين مكتبة الروايات والكتب، والمعلم الذكي، وتجربة قراءة وتعلم متكاملة مباشرة عبر الرابط.</p>
    <div class="actions">
      <button class="btn btn-gold" onclick="document.getElementById('library-section').scrollIntoView({behavior:'smooth'})">استكشف المكتبة</button>
      <button class="btn btn-blue" onclick="document.getElementById('tutor-section').scrollIntoView({behavior:'smooth'})">المعلم الذكي</button>
    </div>
  </section>

  <section class="grid" id="library-section">
    <div class="card">
      <h2>مكتبة الروايات والكتب</h2>
      <p>قصص تشويق وغموض وأدب تعليمي للأطفال مع بحث سريع وقراءة مباشرة داخل المنصة.</p>
      <input type="text" id="search-input" placeholder="ابحث عن قصة أو تصنيف (مثال: غموض، أطفال، مغامرة)..." oninput="filterStories()" />
      <div id="stories-list" class="output">1. ظل المرآة القديمة (غموض وتشويق)
2. رحلة نجم في مدينة الأرقام (أدب أطفال تعليمي)
3. سر الساعة المفقودة (مغامرة وذكاء)</div>
    </div>

    <div class="card">
      <h2>بيئة تعلم منظمة</h2>
      <p>متابعة الدروس، قراءة النصوص بوضوح، وتجربة واجهة سريعة تعمل على الهاتف والكمبيوتر.</p>
    </div>
  </section>

  <section class="panel" id="tutor-section">
    <div class="box">
      <h2 style="color: var(--gold); margin-bottom: 6px;">المعلم الذكي</h2>
      <p style="color: var(--muted); font-size: 0.92rem;">اكتب سؤالاً أو موضوعاً لبدء شرح مبسط وتفاعلي.</p>
      <textarea id="question-input" rows="3" placeholder="مثال: اشرح لي فكرة قصة بأسلوب مشوق أو لخص درساً..."></textarea>
      <button class="btn btn-gold" onclick="askTutor()">إرسال للمعلم الذكي</button>
      <div id="tutor-reply" class="output">أهلاً بك! اسألني عن أي قصة أو فكرة تعليمية وسأساعدك بشرح واضح ومنظم.</div>
    </div>
  </section>

  <script>
    const stories = [
      'ظل المرآة القديمة — غموض وتشويق',
      'رحلة نجم في مدينة الأرقام — أدب أطفال تعليمي',
      'سر الساعة المفقودة — مغامرة وذكاء'
    ];

    function filterStories() {
      const q = document.getElementById('search-input').value.trim();
      const listEl = document.getElementById('stories-list');
      const filtered = q ? stories.filter(s => s.includes(q)) : stories;
      listEl.textContent = filtered.length ? filtered.map((s, i) => (i + 1) + '. ' + s).join('\\n') : 'لا توجد نتائج مطابقة لبحثك حالياً.';
    }

    function askTutor() {
      const q = document.getElementById('question-input').value.trim();
      const replyEl = document.getElementById('tutor-reply');
      if (!q) {
        replyEl.textContent = 'من فضلك اكتب سؤالك أو موضوعك أولاً.';
        return;
      }
      replyEl.textContent = 'تم استلام سؤالك: "' + q + '"\n\nالخطوة الأولى لفهم الموضوع هي تقسيمه إلى فكرة رئيسية، ثم أمثلة عملية، ثم مراجعة سريعة. يمكنك ربط مفتاح الذكاء الاصطناعي في الخادم لتفعيل الردود الحية الكاملة.';
    }

    fetch('/api/status')
      .then(r => r.json())
      .then(d => {
        document.getElementById('server-status').textContent = d.status === 'ok' ? 'الخادم متصل ونشط' : 'حالة الخادم غير مؤكدة';
      })
      .catch(() => {
        document.getElementById('server-status').textContent = 'جاري تحديث النشر...';
      });
  </script>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
