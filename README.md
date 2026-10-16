# 🚀 BoilerPlate-Express-Supabase

I have created this template to enable nodejs developers to start the project from scratch that is scalable, optimized and easy to maintain.

## 📌 Features

- 🏗 **Express.js** for API routing
- 🗄 **Supabase (Postgres)** for database management
- 📝 **Logging** with `winston` and `morgan`
- 🔐 **JWT Authentication** with `jsonwebtoken`
- ✅ **Validation** using `joi` and `express-validator`
- 📩 **Email handling** with `nodemailer`
- 🛠 **Code linting & formatting** with ESLint and Prettier
- 🔄 **Auto-reload** using Nodemon
- 🔧 **Pre-commit hooks** with Husky

---

## 📦 Installation

Make sure you have **Node.js** and **pnpm** installed.

```sh
pnpm install
```

---

## 🚀 Usage

### Start the development server:

```sh
pnpm start
```

### Lint code:

```sh
pnpm lint
```

### Format code:

```sh
pnpm format
```

---

## 📂 Project Structure

```
BoilerPlate-Express-Supabase/
│── src/
│   ├── routes/        # API routes
│   ├── controllers/   # Business logic
│   ├── models/        # Supabase table names
│   ├── middleware/    # Authentication, validation, etc.
│   ├── utils/         # Helper functions
│   ├── index.js       # Entry point
│── supabase/
│   ├── schema.sql     # Run in Supabase SQL editor
│── .env               # Environment variables
│── .eslintrc.js       # ESLint configuration
│── .prettierrc        # Prettier configuration
│── package.json       # Dependencies & scripts
│── README.md          # Documentation
```

---

## 🔑 Environment Variables

Run `supabase/schema.sql` in the Supabase SQL editor to create the tables, then create a `.env` file in the root directory and add the following:

```env
PORT=6060
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWTPHRASE=your_jwt_secret
SENDEREMAIL=
EMAILPASSWORD=
LOG_LEVEL=debug
```

---

## 🛠 Dependencies

### **Main Dependencies**

- `express` – Web framework
- `@supabase/supabase-js` – Supabase client
- `winston` – Logging
- `morgan` – HTTP request logging
- `dotenv` – Environment variables
- `jsonwebtoken` – JWT authentication
- `bcrypt` – Password hashing
- `nodemailer` – Email sending
- `Joi` – Request validation

### **Dev Dependencies**

- `eslint` – Linting
- `prettier` – Code formatting
- `husky` – Git hooks
- `nodemon` – Auto-restart on file changes

---

## 🤝 Contributing

1. **Fork** this repository.
2. **Clone** your forked repository:
   ```sh
   git clone https://github.com/your-username/BoilerPlate-Express-Supabase.git
   ```
3. **Create a branch** for your feature:
   ```sh
   git checkout -b feature-name
   ```
4. **Make your changes** and commit:
   ```sh
   git commit -m "Added new feature"
   ```
5. **Push to GitHub** and create a Pull Request.

---

## 📜 License

This project is licensed under the **ISC License**.

---

### 📧 Need Help?

Feel free to open an **Issue** or reach out for support! 🚀
Authors
https://github.com/Subhankhalid1

---

This **README.md** follows best practices, is well-structured, and ensures a professional look. You can format it in **VS Code** by pressing `Shift + Alt + F` (Windows/Linux) or `Shift + Option + F` (Mac). 🚀 Let me know if you need any modifications!
