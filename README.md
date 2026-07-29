# 🤖 AIRecruiter – AI-Powered Voice Interview Platform

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT-412991?logo=openai)
![Deepgram](https://img.shields.io/badge/Deepgram-Speech--to--Text-blue)
![Vapi AI](https://img.shields.io/badge/Vapi-AI_Voice_Assistant-success)
![License](https://img.shields.io/badge/License-MIT-green)

AIRecruiter is an AI-powered recruitment platform that automates technical and HR screening through intelligent voice interviews. It leverages **Vapi AI**, **Deepgram**, and **OpenAI GPT** to conduct natural conversations, transcribe responses in real time, and generate structured interview evaluations.

Designed to streamline the hiring process, AIRecruiter enables organizations to conduct scalable, consistent, and unbiased first-round interviews.

---

## ✨ Features

- 🎙️ AI-powered voice interviews using **Vapi AI**
- 📝 Real-time speech transcription with **Deepgram**
- 🤖 Intelligent interview evaluation using **OpenAI GPT**
- 📊 Automated candidate feedback and interview summaries
- 💬 Dynamic technical and HR interview flows
- 📜 Structured interview conversation logs
- ⚡ Modern responsive interface built with **Next.js** and **Tailwind CSS**
- 🔧 Easily customizable interview roles and question sets

---

# 📸 Demo

> **Live Demo:** https://ai-recruiter-xi.vercel.app/

---

# 🏗️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### AI Services

- Vapi AI
- OpenAI GPT
- Deepgram Speech-to-Text

### Development Tools

- Node.js
- npm
- ESLint
- Git & GitHub

---

# 📂 Project Structure

```text
AIRecruiter/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── interview/
│   │   └── page.tsx
│   │
│   ├── components/
│   │
│   ├── hooks/
│   │   └── useVapi.ts
│   │
│   ├── context/
│   │   └── InterviewContext.tsx
│   │
│   └── styles/
│
├── .env.example
├── package.json
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env.local` file inside the project root.

```env
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id
NEXT_PUBLIC_DEEPGRAM_API_KEY=your_deepgram_api_key
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
```

> **Important:** Never commit your `.env.local` file to GitHub.

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/yourusername/AIRecruiter.git

cd AIRecruiter
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open your browser:

```
http://localhost:3000
```

---

# 🚀 Production Build

```bash
npm run build

npm start
```

---

# 🔄 Application Workflow

### 1. Select Interview

The candidate selects an interview role such as:

- Machine Learning Engineer
- Software Engineer
- Frontend Developer
- Backend Developer

---

### 2. AI Voice Interview

The AI interviewer:

- Greets the candidate
- Explains the interview process
- Asks technical and behavioral questions
- Maintains a natural conversation

---

### 3. Real-Time Transcription

Deepgram converts candidate speech into text in real time.

---

### 4. AI Evaluation

OpenAI GPT analyzes the responses to generate:

- Candidate summary
- Technical assessment
- Communication evaluation
- Overall interview feedback

---

### 5. Review Results

Interviewers can review:

- Complete transcript
- AI-generated evaluation
- Candidate performance summary

---

# 🔌 Integrations

## Vapi AI

- Voice conversation engine
- AI assistant orchestration
- Low-latency voice streaming

## Deepgram

- Speech-to-text transcription
- Real-time transcript generation

## OpenAI GPT

- Interview question generation
- Candidate evaluation
- Intelligent interview summaries

---

# 📈 Future Improvements

- Authentication
- MongoDB/Supabase integration
- Candidate dashboard
- Recruiter dashboard
- Interview analytics
- PDF report generation
- Email notifications
- Multi-language interviews

---

# 💡 Key Highlights

✔ AI-powered interview automation

✔ Voice-first candidate experience

✔ Real-time transcription

✔ Intelligent candidate evaluation

✔ Modular architecture

✔ Production-ready deployment

---

# 👨‍💻 Author

### **Hrushikesh Lomte**

AI/ML Engineer | Computer Vision | Generative AI | Full Stack Developer

🔗 **LinkedIn:**  
https://www.linkedin.com/in/hrushikesh-lomte-b2a611281/

💻 **GitHub:**  
https://github.com/PrinceRushi07

🌐 **Portfolio:**  
https://ai-recruiter-xi.vercel.app/

---

# ⭐ Support

If you found this project useful, please consider giving it a **Star ⭐** on GitHub.

It helps others discover the project and motivates further development.

---

# 📄 License

This project is licensed under the **MIT License**.

See the **LICENSE** file for more details.
