# Paywall Application

This is a **Paywall Application** built with **Next.js**, **Prisma**. It allows users to authenticate, manage their payments, and view their payment history.

---

## Features

- **User Authentication**:
  - Users can sign up, log in, and log out.
  - Authentication is handled using **NextAuth.js**.

- **Plan Subscription**:
  - Users can subscribe plans.
  - Payments are associated with the logged-in user and subscription id.

- **Database**:
  - Uses **Prisma** as the ORM to interact with the database.
  - Supports **SQLite**, **PostgreSQL**, or **MySQL** (configurable).

- **API Routes**:
  - Built-in API routes for authentication and payment management.

## How It Works

### 1. Authentication
- Users can sign up and log in using their email and password.

### 2. Plan Subscription
- Each user can subscribe plan.

### 3. Database
- The application uses **Prisma** to interact with the database.
- The database schema includes two main models:
  - `User`: Stores user information (e.g., email, password).
  - `Payment`: Stores payment information (e.g., amount, user ID, Subscription ID).

### 4. API Routes
- The application includes the following API routes:
  - `/api/login`: Login User.
  - `/api/signup`: Register User.
  - `/api/verifyToken`: Handles authentication and verifying token.
  - `/api/payments`: Fetches payments for the logged-in user.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/payment-management-app.git
cd payment-management-app
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, add .env file:
# .env
DATABASE_URL="file:./db/dev.db"
JWT_SECRET="thisisasecretkey"

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## How it works?


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
