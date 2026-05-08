# Thermal Grease Spread Simulator (Node.js)

Web-deployable simulation of thermal paste spreading over CPU socket surfaces with selectable package sizes:

- Socket M
- Socket P
- LGA1150
- LGA1151
- LGA1700
- LGA1851
- AM3
- AM4
- AM5

The simulation includes:

- Smooth diffusion-based spreading
- Adjustable viscosity and cooler pressure
- Mouse painting while holding left click and moving
- Brush pattern options (`Dot`, `Line`, `X`, `Square`)
- Real package-size mapping (mm) for modern documented sockets; legacy undocumented entries use conservative defaults

## Run locally

1. Install Node.js 18+.
2. Install dependencies:

```bash
npm install
```

3. Start server:

```bash
npm start
```

4. Open `http://localhost:3000`.

## Deploy

Any Node-friendly host works (Render, Railway, Fly.io, etc.).

- Build step: `npm install`
- Start command: `npm start`
