# 🚀 REST API Boilerplate Project

Welcome to the **REST API Boilerplate** project! This project is designed to help you quickly set up a TypeScript-based Express server.

## 📦 Project Structure

```plaintext
├── src
│   ├── middleware
│   │   └── logging.ts
│   ├── utils
│   │   └── loggingUtils.ts
│   ├── app.ts
│   ├── server.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
```

## 🛠️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/snckl/express-ts-boilerplate.git
cd cd express-ts-boilerplate
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a `.env` file:**

```plaintext
PORT=3000
```

## 🚀 Usage

### Development

To start the server in development mode with hot-reloading:

```bash
npm run start:dev
```

### Production

To build and start the server in production mode:

```bash
npm run build
npm start
```

## 📚 Dependencies

- **dotenv**: ^16.4.5
- **express**: ^4.21.1
- **express-async-errors**: ^3.1.1
- **winston**: ^3.17.0

**Note**: Update the dependencies if needed.

## 👤 Author

- **Sinan ÇAKAL**

## 📄 License

This project is licensed under the MIT License.

Happy coding! 🎉
