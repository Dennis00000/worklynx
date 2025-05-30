# WORKLYNX

A modern job search platform designed specifically for the Lithuanian market, connecting talented professionals with leading employers across Lithuania.

![WORKLYNX](https://img.shields.io/badge/WORKLYNX-Job%20Platform-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC)

## 🚀 Features

### For Job Seekers
- **Job Search & Filtering**: Advanced search with location, salary, job type, and experience level filters
- **Company Profiles**: Detailed company information, culture insights, and open positions
- **Saved Jobs**: Save interesting positions and track applications
- **User Authentication**: Secure sign-up and sign-in with social media integration
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### For Employers
- **Job Posting**: Multi-step job posting process with preview and payment integration
- **Company Profiles**: Showcase company culture, benefits, and team information
- **Pricing Plans**: Flexible pricing options (Basic, Standard, Premium)
- **Application Management**: Track and manage job applications
- **Analytics**: Detailed insights on job posting performance

### Platform Features
- **Dark/Light Mode**: System-aware theme switching
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant design and keyboard navigation
- **Performance**: Optimized images and lazy loading

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Setup

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/worklynx.git
   cd worklynx
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your environment variables:
   \`\`\`env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   # Add other required environment variables
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
worklynx/
├── app/                          # Next.js App Router pages
│   ├── (auth)/                   # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── about/                    # About page
│   ├── companies/                # Company listings and profiles
│   ├── contact/                  # Contact page
│   ├── jobs/                     # Job listings and details
│   ├── post-job/                 # Job posting flow
│   ├── pricing/                  # Pricing plans
│   ├── saved-jobs/               # User saved jobs
│   ├── terms/                    # Terms of service
│   ├── privacy/                  # Privacy policy
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   ├── featured-jobs.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── job-card.tsx
│   ├── job-search-form.tsx
│   ├── mode-toggle.tsx
│   ├── stats-section.tsx
│   └── theme-provider.tsx
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
│   └── utils.ts
├── public/                       # Static assets
│   ├── images/
│   └── icons/
├── tailwind.config.ts            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
├── package.json
└── README.md
\`\`\`

## 🎨 Design System

The project uses a consistent design system built with:

- **Colors**: Primary blue (#00BFFF) with semantic color tokens
- **Typography**: Inter font family with responsive text scales
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Components**: Reusable UI components from shadcn/ui
- **Dark Mode**: Automatic theme switching based on system preference

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Import your project on [Vercel](https://vercel.com)
   - Configure environment variables
   - Deploy automatically on every push

2. **Manual deployment**
   \`\`\`bash
   npm run build
   npm run start
   \`\`\`

### Other Platforms

The project can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🧪 Testing

\`\`\`bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
\`\`\`

## 📝 Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript type checking
\`\`\`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Make your changes**
4. **Commit your changes**
   \`\`\`bash
   git commit -m 'Add some amazing feature'
   \`\`\`
5. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📋 Roadmap

- [ ] **Database Integration**: Add PostgreSQL with Prisma ORM
- [ ] **Authentication**: Implement NextAuth.js with multiple providers
- [ ] **Payment Processing**: Integrate Stripe for job posting payments
- [ ] **Email System**: Add email notifications and newsletters
- [ ] **Search Enhancement**: Implement Elasticsearch for advanced search
- [ ] **Mobile App**: React Native mobile application
- [ ] **Analytics**: Google Analytics and custom analytics dashboard
- [ ] **API**: RESTful API for third-party integrations

## 🐛 Known Issues

- [ ] Dark mode flash on initial load
- [ ] Mobile navigation needs improvement
- [ ] Search filters need persistence

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**WORKLYNX Team**

- Email: dennisopoola@gmail.com


## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the icon library
- [Vercel](https://vercel.com/) for hosting and deployment

---

**Made with ❤️ for the Lithuanian job market**
