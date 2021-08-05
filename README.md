# Fortune Cookie Reveal: React Web App powered by Node.js (Express) and Airtable Backend

<iframe class="airtable-embed" src="https://airtable.com/embed/shracwXYXAaWtaC6k?backgroundColor=red&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

## 🛠 Getting Started

1. Clone the repository
2. Set up .env in root folder

```
NODE_ENV='dev'
PORT=3001
```

3. Set up .env in client folder

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
7. To see the deployed version of the app: https://fortune-cookie-reveal.herokuapp.com/
