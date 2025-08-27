# 📦 Backend – NestJS + Prisma + PostgreSQL

## 🚀 Overview

This backend is built with **NestJS**, uses **Prisma ORM** for database interaction with **PostgreSQL**, and supports **JWT authentication**.
It includes basic modules for **Users** and **Deals (investment projects)**.

The architecture follows a modular approach, making the codebase scalable, maintainable, and easy to extend.

---

## 🛠️ Tech Stack

* [NestJS](https://nestjs.com/) – progressive Node.js framework
* [Prisma](https://www.prisma.io/) – modern TypeScript ORM
* [PostgreSQL](https://www.postgresql.org/) – relational database
* [Passport + JWT](http://www.passportjs.org/) – authentication and authorization
* [bcrypt](https://www.npmjs.com/package/bcrypt) – password hashing
* [class-validator](https://docs.nestjs.com/techniques/validation) – DTO validation
* [Render](https://render.com/) – deployment platform (backend & database)

---

## 📂 Project Structure

```
src/
 ├── auth/            # Authentication module (register, login, JWT strategy)
 ├── users/           # Users module
 ├── deals/           # Deals module (CRUD endpoints)
 ├── prisma/          # PrismaService & PrismaModule
 ├── app.module.ts    # Root module
 └── main.ts          # Application entry point
```

---

## ⚙️ Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://<user>:<password>@<host>:5432/<db>?sslmode=require
JWT_SECRET=your_jwt_secret
PORT=3000
```

### 4. Run Prisma migrations & seed data

```bash
npx prisma migrate deploy
npx prisma db seed
```

### 5. Start the application

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

---

## 📡 API Endpoints

### Users

* `GET /users` – Get all users

### Auth

* `POST /auth/register` – Register a new user
* `POST /auth/login` – Login and receive JWT

### Deals

* `GET /deals` – Get all investment deals

---

## 🧪 Testing with Postman

You can test the endpoints using **Postman** or **cURL**.
Example request:

```bash
curl http://localhost:3000/deals
```

---

## 🚀 Deployment

The backend is deployed on [Render](https://render.com/).

* Push changes to GitHub → Render automatically redeploys.
* Environment variables are configured in Render Dashboard under **Environment**.

---

## ✅ Best Practices Applied

* Modular NestJS architecture
* DTO validation with `class-validator`
* Secure password storage with `bcrypt`
* JWT authentication with Passport strategy
* Prisma ORM with migrations & seeding
* Environment variables managed via `.env` (never committed to Git)
* Ready for cloud deployment on Render
