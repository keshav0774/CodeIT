# CodeIt - AI-Powered Competitive Coding Platform

A production-grade full-stack competitive coding platform inspired by LeetCode, built from scratch with AI assistance, real-time code execution, and secure authentication.

🔗 **Live Demo** → [code-it-lilac.vercel.app](https://code-it-lilac.vercel.app)

---

## Features

### User Features
- 🔐 Secure signup & login with JWT + Redis session management
- 📬 OTP-based email verification on registration
- 🔑 Forgot password flow — OTP sent to email, temp password generated
- ⚡ Run & submit code in 10+ programming languages
- 🤖 AI Chat Assistant per problem — hints only, no direct solutions
- 📊 Submission history with runtime, memory, and test case results
- 👤 Profile page with solved problems tracker (Easy / Medium / Hard)

### Admin Features
- ➕ Create problems with visible & hidden test cases
- ✏️ Update problem details
- 🗑️ Delete problems
- 📋 View all problems with search

---

## Tech Stack

### Frontend
| Technology | Usage |
|---|---|
| React.js | UI framework |
| Redux Toolkit | State management |
| Tailwind CSS | Styling |
| Monaco Editor | Code editor (VS Code engine) |
| React Hook Form + Zod | Form validation |
| Axios | HTTP client |

### Backend
| Technology | Usage |
|---|---|
| Node.js + Express.js | Server & REST APIs |
| MongoDB + Mongoose | Database |
| Redis | Session management & OTP TTL |
| JWT + bcrypt | Authentication & password hashing |
| Judge0 API | Real-time code execution |
| Google Gemini 2.5 Flash | AI-powered hints |
| Nodemailer | Email delivery (OTP, welcome, temp password) |

---

## Project Structure

```
CodeIT/
├── LeetCode-Frontend/        # React frontend
│   ├── src/
│   │   ├── pages/            # All page components
│   │   ├── store/            # Redux store
│   │   └── utils/            # Axios client
│   ├── vercel.json           # Vercel routing config
│   └── vite.config.js
│
└── LeetCode-Backend/         # Node.js backend
    ├── controllers/          # Route handlers
    ├── models/               # Mongoose schemas
    ├── routes/               # Express routes
    ├── middleware/            # Auth middleware
    └── utils/                # Mailer, redis client
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB
- Redis
- Judge0 API key
- Google Gemini API key
- Gmail account (for Nodemailer)

### Backend Setup

```bash
cd LeetCode-Backend
npm install
```

Create `.env` file:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
USER_MAIL=your_gmail@gmail.com
USER_PASSWORD=your_gmail_app_password
GEMINI_API_KEY=your_gemini_api_key
```

```bash
npm run dev
```

### Frontend Setup

```bash
cd LeetCode-Frontend
npm install
```

Create `.env` file:
```env
VITE_BACKEND_URL=http://localhost:3000
```

```bash
npm run dev
```

---

## API Routes

### Auth
| Method | Route | Description |
|---|---|---|
| POST | /auth/register | Register new user |
| POST | /auth/login | Login user |
| POST | /auth/logout | Logout user |
| GET | /auth/check | Check auth status |
| POST | /auth/forget-password | Send OTP to email |
| POST | /auth/verify-otp | Verify OTP + reset password |

### Problems
| Method | Route | Description |
|---|---|---|
| GET | /problem/getAllProblem | Get all problems |
| GET | /problem/problemById/:id | Get problem by ID |
| POST | /problem/create | Create problem (Admin) |
| PATCH | /problem/update/:id | Update problem (Admin) |
| DELETE | /problem/delete/:id | Delete problem (Admin) |
| GET | /problem/problemSolvedByUser | Get user solved problems |
| GET | /problem/submittedProblem/:pid | Get submissions by problem |

### Submissions
| Method | Route               | Description |
|--------|---------------------|-------------|
| POST   | /submission/run/:id | Run code |
| POST   | /submission/submit/:id | Submit solution |

### AI Chat
| Method | Route | Description |
|--------|-------|-------------|
| POST   | /chat/ai | Chat with AI assistant |

---

## Deployment

- **Frontend** → Vercel
- **Backend** → Render / Railway
- **Database** → MongoDB Atlas
- **Cache** → Redis Cloud / Upstash

---

## Screenshots

Go to Screenshot folder 

---

## Author

**Keshav Mishra**
- GitHub → [github.com/keshav0774](https://github.com/keshav0774)
- LinkedIn → [linkedin.com/in/keshav-mishra-95a5b2251](https://www.linkedin.com/in/keshav-mishra-95a5b2251/)

---

## License

This project is open source and available under the [MIT License](LICENSE).
