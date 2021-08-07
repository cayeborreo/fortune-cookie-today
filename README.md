# Fortune Cookie Reveal: React Web App powered by Node.js (Express) and Airtable Backend

See [Airtable here](https://airtable.com/embed/shracwXYXAaWtaC6k?backgroundColor=red&viewControls=on)

## 🛠 Getting Started

1. Clone the repository and install packages

```
git clone git@github.com:cayeborreo/fortune-cookie-today.git
npm install
```

2. Set up an .env in root folder (contents found at root.env)
3. Set up an .env in client folder (contents found at client.env)

```
REACT_APP_BASE_API_URL=http://localhost:3001
```

4. Build the frontend

```
cd client
npm install
npm run build
```

5. Run the server

```
cd ../ (from client, go back to main folder)
npm run dev
```

6. Go to localhost:3001 and see the project
7. To see the deployed version of the app: https://fortune-cookie-today.herokuapp.com/
