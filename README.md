# Alae Herrak - Portfolio & Engineering Showcase

A high-performance personal portfolio, production engineering showcase, and interactive inquiry platform architected with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🛠 Tech Stack

- **Core Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Actions)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/) primitives
- **Motion & Animations:** [Motion](https://motion.dev/) (Framer Motion v12)
- **Package Manager & Runtime:** [Bun](https://bun.sh/)
- **Email Delivery:** [Resend](https://resend.com/) Server Action with sliding-window rate limiting & honeypot spam protection
- **SEO & Metadata:** Dynamic OpenGraph image generation (`@vercel/og`), JSON-LD Person structured schema, XML Sitemap, and Robots routing

---

## 💻 Local Setup & Development

### Prerequisites

- [Bun](https://bun.sh/) (v1.1+ recommended) or [Node.js](https://nodejs.org/) (v20+ LTS)
- Git

### 1. Clone Repository

```bash
git clone https://github.com/alae-herrak/alaeherrak.git
cd alaeherrak
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Configure Environment Variables

Create a `.env.local` file from the provided template:

```bash
cp .env.example .env.local
```

Populate the required credentials:

```env
# Resend API Configuration
RESEND_API_KEY=re_your_api_key_here

# Recipient Email for Portfolio Contact Submissions
CONTACT_EMAIL_RECIPIENT=alaeherrak@gmail.com
```

> **Note:** If `RESEND_API_KEY` is omitted in development, the contact form gracefully notifies users with direct email contact information.

### 4. Start Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build

Verify types, linting, and compile the production bundle:

```bash
bun run build
```

---

## 📄 License

MIT © 2026 [Alae Herrak](https://alaeherrak.com)
