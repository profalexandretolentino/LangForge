# 🚀 LangForge

![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL_3.0-blue.svg)
![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-green.svg)
![NestJS](https://img.shields.io/badge/backend-NestJS-red.svg)
![Next.js](https://img.shields.io/badge/frontend-Next.js-black.svg)
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

> **EN:** Language learning platform focused on daily study consistency and JLPT progression.  
> **PT:** Plataforma de aprendizado de idiomas focada em consistência de estudo diário e progressão para o JLPT.

### 🇯🇵 <ruby>日本語<rt>にほんご</rt></ruby> (JLPT N5/N4 Level)
これは <ruby>言語<rt>げんご</rt></ruby>の <ruby>学習<rt>がくしゅう</rt></ruby>の ための プラットフォームです。  
<ruby>毎日<rt>まいにち</rt></ruby> <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>して、JLPTの ために <ruby>頑張<rt>がんば</rt></ruby>ります。  
この プロジェクトは <ruby>私<rt>わたし</rt></ruby>の <ruby>毎日<rt>まいにち</rt></ruby>の ルーチンを <ruby>助<rt>たす</rt></ruby>けます。

---

## 🏗️ Architecture | Arquitetura
```mermaid
graph TD
    User((User)) --> Web[Frontend: Next.js/React]
    Web --> API[Backend: NestJS]
    API --> DB[(PostgreSQL)]
    API --> Services[Study Logic / Anki Sync]
    
    style Web fill:#f9f,stroke:#333,stroke-width:2px
    style API fill:#bbf,stroke:#333,stroke-width:2px
    style DB fill:#dfd,stroke:#333,stroke-width:2px

## 🧱 Tech Stack

Resource,Tech,Why? / Por quê?
Framework,Next.js (React),EN: Best for SEO and performance. / PT: Melhor para SEO e performance.
Backend,NestJS,EN: Robust modular architecture. / PT: Arquitetura modular robusta.
Database,PostgreSQL,EN: Relational data for study tracking. / PT: Dados relacionais para controle de estudo.
Monorepo,NPM Workspaces,EN: Scalable code sharing. / PT: Compartilhamento de código escalável.

---

## 📦 Project Structure

```id="x02dtq"
apps/
  ├── api/        # NestJS backend (Core Logic)
  └── web/        # Next.js frontend (React UI)
packages/
  └── shared/     # Common Types and Utils
```

## 📚 Study System

* Vocabulary
* Kanji
* Reading
* Daily consistency tracking

---

## 📈 Roadmap

* [x] Initial Monorepo Setup
* [ ] MVP (daily tasks + progress)
* [ ] JLPT structured content
* [ ] Pomodoro timer
* [ ] Progress Analytics dashboard
* [ ] Mobile app (React Native)
* [ ] Premium features

---

## 🛠️ Installation

```bash id="2a8tqm"
npm install
npm run dev
```

---

## 🤝 Contributing

Open for learning and contributions.

---

## 📄 License| Licença

AGPL-3.0 - Protecting business logic and encouraging open-source contributions.
