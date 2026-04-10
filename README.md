# LR11

LR11 is a modern web application built with **Angular v21** and **TypeScript**. The project features standalone components, custom directives (like `highlight`, `if`, and `shadow`), and a responsive UI using **Bootstrap**.

## 🚀 Getting Started

### Requirements
- **Node.js**: Recommended latest LTS version (v20+ or v22+).
- **npm**: v10.9.2 or higher (as specified in `package.json`).

### Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd LR11
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Run
To start the development server:
```bash
npm start
```
The application will be available at `http://localhost:4200/`.

---

## 🛠️ Scripts

The project uses the following npm scripts:

- `npm run ng`: Executes the Angular CLI.
- `npm run start`: Starts the development server (`ng serve`).
- `npm run build`: Compiles the application into the `dist/` directory for production.
- `npm run watch`: Builds the application in development mode and watches for changes.
- `npm run test`: Runs the test suite using **Vitest**.

---

## 🏗️ Project Structure

- `src/app/`: Root application logic.
  - `components/`: UI components (carousel, footer, gallery, header, main).
  - `directives/`: Custom Angular directives (`highlight`, `if`, `shadow`).
  - `app.config.ts`: Application configuration.
  - `app.routes.ts`: Route definitions.
- `public/`: Static assets.
- `angular.json`: Angular CLI configuration.
- `tsconfig.json`: TypeScript configuration.

---

## 🧪 Testing

The project uses **Vitest** for unit testing. To execute tests, run:

```bash
npm test
```

Tests are located alongside their respective components/directives with the `.spec.ts` extension.

---

## 🌐 Environment Variables

> [!IMPORTANT]
> **TODO:** No environment variables were detected in the project. If needed, create an `environments/` directory or use a `.env` file (if integrated with a build tool like Vite).

---

## 📝 License

> [!IMPORTANT]
> **TODO:** Add a license file (e.g., `LICENSE.md`) and specify it here.
