# 🚀 Express + TypeScript Starter Template

A production-ready **Express + TypeScript starter template** with modern development tools and best practices built-in. This template provides a solid foundation for building scalable web APIs with TypeScript, featuring path aliases, source map support, linting, formatting, consistent error handling, and a complete testing setup.

## ✨ Features

- **🔥 Express.js** - Fast, unopinionated web framework
- **📘 TypeScript** - Type-safe JavaScript with latest ES features
- **🎯 Path Aliases** - Clean imports with `@/` prefix
- **🗺️ Source Maps** - Debug TypeScript directly in production
- **🧹 ESLint** - Code quality and consistency
- **💅 Prettier** - Automatic code formatting
- **📦 Consistent JSON Responses** - Standardized API response format
- **⚡ Centralized Error Handling** - Robust error management system
- **🧪 Testing Setup** - Jest with TypeScript support
- **🔄 CI/CD Ready** - GitHub Actions workflow included
- **📝 Environment Configuration** - Example `.env` file provided `.env.example`


## 📁 Project Structure

```
.
├── .env.example
├── eslint.config.mjs
├── .github
│   └── workflows
│       └── ci.yml
├── .gitignore
├── jest.config.mjs
├── package.json
├── package-lock.json
├── .prettierrc
├── README.md
├── src
│   ├── config
│   │   └── env.config.ts
│   ├── index.ts
│   ├── middleware
│   │   ├── error-handler.middleware.ts
│   │   └── response.middleware.ts
│   ├── server.ts
│   ├── tests
│   │   ├── integration
│   │   ├── test.test.ts
│   │   └── unit
│   ├── types
│   │   ├── index.ts
│   │   ├── response.type.ts
│   │   └── status-code.type.ts
│   └── utils
│       ├── CustomError.ts
│       ├── env.util.ts
│       └── error-message.util.ts
├── tsconfig.json
└── .vscode
    └── settings.json
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm**

### Installation

1. **Clone or use the template**
   ```bash
   git clone https://github.com/m7md-Y-3mra/express-typescript-template.git my-api
   cd my-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:3000` with hot reload enabled.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload (using tsc-watch) |
| `npm run build` | Compile TypeScript for production |
| `npm start` | Start production server |
| `npm test` | Run all tests with Jest |
| `npm run test:unit` | Run unit tests only |
| `npm run test:integration` | Run integration tests (with open handles detection) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests and generate coverage report |
| `npm run lint` | Lint and fix code with ESLint |

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Server
# Environment
NODE_ENV=development

# Server
PORT=3000
BASE_URL=http://localhost:3000

# Debugging
APP_DEBUG=true
```

### Path Aliases

The template includes configured path aliases for cleaner imports:

```typescript
// Instead of
import { UserService } from '../../services/UserService'

// Use
import { UserService } from '@/services/UserService'
```

## 🗄️ Database Integration

This template is database-agnostic. You can easily integrate with:

### Prisma
```bash
npm install prisma @prisma/client
npx prisma init
# Configure your schema.prisma and run migrations
```

### MongoDB with Mongoose
```bash
npm install mongoose @types/mongoose
```

### PostgreSQL with TypeORM
```bash
npm install typeorm pg @types/pg
```

### MySQL with Sequelize
```bash
npm install sequelize mysql2 @types/sequelize
```

## 📊 API Response Format

All API responses follow a consistent format:

```typescript
// Success Response
{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully"
}

// Error Response
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": { ... }
  }
}
```

## 🔐 Error Handling

The template includes centralized error handling:

- **Custom Error Classes** - Structured error types
- **Global Error Middleware** - Catches and formats all errors
- **Validation Errors** - Automatic request validation
- **404 Handlers** - Proper not found responses

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feat/my-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Next Steps

After setting up the template:

1. **Add Authentication** - Implement JWT or session-based auth
2. **Database Models** - Set up your data models with Prisma/TypeORM
3. **API Routes** - Build your application-specific endpoints
4. **Middleware** - Add custom middleware for logging, rate limiting, etc.
5. **Documentation** - Generate API docs with Swagger/OpenAPI
6. **Monitoring** - Add logging and monitoring solutions
7. **Security** - Implement security headers and validation

---

**Happy coding!** 🎉 If you find this template helpful, please give it a ⭐ on GitHub!