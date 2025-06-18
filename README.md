# SIP markup service

## Getting Started

### 1. Install dependencies
```bash
npm run install:all
```

### 2. Run development servers
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

### 3. Build for production
```bash
npm run build
```

## Scripts

```bash
# Development
npm run dev              # Start both frontend & backend
npm run dev:client       # Frontend only
npm run dev:server       # Backend only

# Build
npm run build            # Build entire project
npm run build:client     # Build frontend
npm run build:server     # Build backend

# Production
npm start               # Start production server
```