// EDIT HERE: all site content lives in this file. Empty strings = "not supplied yet" (UI shows a placeholder, never a dead link).
export const profile = {
  name: 'Prity Singh', location: 'Pune, Maharashtra, India',
  email: 'pritysingh.skncoe.comp@gmail.com',
  links: { github: 'https://github.com/PritySingh303132', linkedin: 'https://www.linkedin.com/in/prity-singh-582040289', leetcode: 'https://leetcode.com/u/prity5060/', codechef: '' },
  portrait: '/assets/portrait.webp', // drop your photo here
}
export const about = [
  "I'm a Computer Engineering undergraduate at SPPU (class of 2027), passionate about building intelligent, scalable systems. I work in Java and Python, with strong foundations in DSA, OOP and full-stack development.",
  "I've built and deployed HealthRoot on my own and worked on AI/ML integration, REST API design and end-to-end product development."]
export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'JavaScript', 'SQL'] },
  { group: 'Core CS', items: ['Data Structures and Algorithms', 'OOP', 'DBMS', 'Operating Systems'] },
  { group: 'AI / ML', items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow/Keras', 'NLP', 'LSTM', 'Sentiment analysis', 'Groq API (Llama 3.3)', 'Vision AI', 'Computer vision'] },
  { group: 'Web and backend', items: ['HTML', 'CSS', 'React.js', 'Vite', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'JWT authentication'] },
  { group: 'Databases', items: ['MongoDB Atlas', 'Supabase', 'SQL'] },
  { group: 'Data analytics', items: ['EDA', 'Data cleaning', 'Matplotlib'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Linux', 'Vercel', 'Pytest'] },
  { group: 'Soft skills', items: ['Leadership', 'Public speaking', 'Communication', 'Community engagement', 'Event management', 'Content creation'] }]
export const education = {
  college: 'Smt. Kashibai Navale College of Engineering (Sinhgad Institutes), Pune', university: 'Savitribai Phule Pune University (SPPU)',
  degree: 'Computer Engineering', status: 'Graduating 2027', graduation: 'B.E. 2023-2027',
  cgpa: '9.20', cgpaNote: 'B.E. Computer Engineering, SPPU',
  earlier: [
    { level: 'Class XII (PCM, CBSE)', school: 'Scottish Central School, Lalganj Tetari, Sasaram, Bihar', years: '2020-2022', result: '78.8%' },
    { level: 'Class X (CBSE)', school: 'BL Indo Anglian Public School, Aurangabad, Bihar', years: '2018-2020', result: '88.2%' }] }
export const currentLearning = 'AI/ML integration and full-stack development, plus DSA and competitive programming in Java.'
// Projects: add a new object to add a project. Fields starting with TODO are hidden on the site.
export const projects = [
  { id: 'healthroot', title: 'HealthRoot', category: 'AI health-tech platform (solo project)', featured: true,
    summary: 'Disease diet guidance, an AI diet assistant, an AI food scanner, doctor booking and a health products shop in one place. Live on Vercel with MongoDB Atlas.',
    problem: '77 million Indians have diabetes and 220 million have hypertension, yet no single platform combines disease-specific diet guidance, doctor access and genuine health products.',
    contribution: 'Built it solo: React frontend (10+ pages) and a Node/Express backend with 3 models, 3 controllers, 3 route files and JWT auth middleware.',
    tech: ['React.js', 'Vite', 'CSS Modules', 'React Router', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Groq API (Llama 3.3)', 'Groq Vision AI', 'Vercel'],
    implemented: ['Disease diet guide with eat/avoid lists for 8+ chronic conditions (diabetes, BP, thyroid, PCOS, kidney, cholesterol, uric acid, anemia)',
      '7-day personalised meal planner with a swap feature', 'AI diet assistant that answers diet questions in real time',
      'AI food scanner: upload a food photo and check if it suits your condition', 'Doctor listing, profiles, appointment booking and a doctor self-registration portal (admin verification)',
      'Health products shop filtered by disease, with Amazon affiliate links', 'Secure login and signup with JWT'],
    planned: ['Business model: affiliate commissions, doctor listing fees, premium meal-planner subscriptions, 15-25% commission per booking'],
    challenges: 'TODO', github: '', demo: 'https://healthroot.vercel.app', shots: ['healthroot-1.webp', 'healthroot-2.webp'] },
  { id: 'civic-samadhan', title: 'Civic Samadhan', category: 'AI/ML service for a civic-problem platform', featured: true,
    summary: 'A platform connecting Citizens (report problems), Universities (build solutions), Industry partners (fund and mentor) and Government (verify results).',
    problem: 'Most complaint portals only log the complaint and nothing happens after. People report the same issue repeatedly and nobody can tell what is urgent.',
    contribution: 'I built the AI/ML service: a separate Python FastAPI service that any backend can call, with 33 automated tests.',
    tech: ['Python', 'FastAPI', 'Sentence Transformers', 'MiniLM', 'BLIP', 'OCR', 'HDBSCAN', 'XGBoost', 'scikit-learn', 'React', 'Node.js', 'Supabase'],
    pipeline: ['Report', 'AI triage', 'University solution', 'Industry support', 'Government verification'],
    implemented: ['Pipeline 1 (understand the problem): reads a text or photo report, finds the category, gives a priority score from 0 to 10, finds duplicates and groups similar problems',
      'Pipeline 2 (rank the solutions): scores each solution on fit, cost, time, past experience and profit, and shows the best first with reasons'],
    planned: [], challenges: 'TODO', github: '', demo: '', shots: ['civic-1.webp', 'civic-2.webp'] },
  { id: 'predictx', title: 'PredictX', category: 'AI-powered stock trading platform (solo project)', featured: true,
    summary: 'Inspired by Zerodha. An LSTM model predicts future prices from 2 years of historical NSE data. It is a learning project, not a real trading service.',
    problem: 'TODO', contribution: 'Built solo: a MERN app with a Python Flask microservice for all ML.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Python', 'Flask', 'TensorFlow/Keras', 'yfinance'],
    implemented: ['LSTM price prediction on 2 years of NSE data', 'Real-time stock quotes', 'NLP sentiment analysis on financial news', 'Buy/sell signal generation', 'Portfolio risk analysis'],
    planned: [], challenges: 'TODO', github: '', demo: '', shots: ['predictx-1.webp'] },
  { id: 'water-pollution', title: 'AI-Based Water Pollution Detection', category: 'ML project', featured: true,
    summary: 'An ML model that classifies water pollution levels from environmental data. Built during the Edunet Foundation (AICTE + Shell India) Green Skills and AI program, Jan-Feb 2026.',
    problem: 'TODO', contribution: 'TODO', tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    implemented: ['Preprocessing (missing values, noise)', 'Training and evaluation', 'Trend analysis'], planned: [], challenges: 'TODO', github: '', demo: '', shots: ['water-1.webp'] },
  { id: 'digital-clock', title: 'Digital Clock', category: 'Small project', summary: 'TODO', tech: [], github: '', demo: '' },
  { id: 'pokedex', title: 'Pokedex', category: 'Small project', summary: 'TODO', tech: [], github: '', demo: '' },
  { id: 'smart-text-editor', title: 'Smart Text Editor', category: 'Small project', summary: 'TODO', tech: [], github: '', demo: '' }]
export const experience = [
  { title: 'Google Gemini Student Ambassador', period: 'Jun 2026 - Sep 2026',
    body: 'Selected for 2026 to represent Google AI and Gemini in the campus community. Progressed from Bronze to Silver to Gold.',
    points: ['Hosted and conducted student community meetings', 'Took part in Gemini product trials and Build Night with Nano Banana', 'Created and shared content to promote Gemini and AI tools', 'Encouraged hands-on AI exploration among students'] },
  { title: 'Flipkart GRiD 8.0: National Semi-Finalist', period: '25 Sep 2026', body: 'Certificate of Achievement from Flipkart Early Careers, listed under SKNCOE Pune.' }]
export const achievements = [
  { name: 'Google Gemini Student Ambassador (Gold tier)', meta: 'Google, Jun-Sep 2026', link: '', img: '' },
  { name: 'Flipkart GRiD 8.0 National Semi-Finalist', meta: 'Flipkart Early Careers, 25 Sep 2026', link: '/assets/Prity_SinghFlipkartGrid.pdf', img: 'flipkart-grid.webp' },
  { name: 'Advanced Course on Green Skills and Artificial Intelligence', meta: 'Skills4Future Program, Edunet Foundation (AICTE + Shell India), Jan-Feb 2026', link: 'https://drive.google.com/file/d/1edcGESsbyuLOh2mhRXKUuA4YXk9Wt-U8/view', img: 'edunet-green-skills.webp' },
  { name: 'Mastercard Advisors & Consulting Services Virtual Experience', meta: 'Mastercard (Forage), dates not confirmed', link: '', img: '' },
  { name: 'Apna College: Alpha (DSA with Java)', meta: 'Certificate of completion', link: '/assets/apna-dsa-java.pdf', img: 'apna-dsa-java.webp' },
  { name: 'CodeChef: two bronze medals for a five-day streak', meta: '', link: '', img: '' }]
