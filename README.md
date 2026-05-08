# Thermal Grease Spread Simulator (Node.js)

A web-deployable CPU thermal paste simulation built with Node.js and Canvas.

This project lets you apply thermal grease with interactive brush patterns and watch it spread smoothly across many CPU socket/package footprints.

## Features

- Mouse-drag paste application (hold left click and move).
- Multiple brush patterns:
  - `Dot`, `Line`, `X`, `Square`
  - `Ring`, `Plus`, `Star`, `Spray`, `Spiral`
- Preset drop applications:
  - `Center Pea`, `Center Line`, `X Pattern`
  - `5-Dot`, `4 Corners`, `Full Spread`
- Large socket list with duplicate-safe loading.
- Exact size mapping (mm) for defined sockets in code.
- Smooth diffusion-based spread simulation.
- Boundary-aware spread with overspread detection.
- Adjustable simulation and material controls:
  - Brush Size
  - Viscosity
  - Cooler Pressure
  - TPS (Ticks Per Second)
- Utility controls:
  - `Clear`
  - `Add Center Drop`
  - `Apply Preset Drop`
  - `Reset Options`
- Theme toggle:
  - Round top-right dark/light mode button.
- Paste does not automatically disappear over time.
- Red overspread alert when paste extends beyond CPU boundary.

## Quickstart

### Requirements

- Node.js 18+ (recommended)
- npm

### Run Locally

```bash
npm install
npm start
```

Then open:

- `http://localhost:3000`

## Controls Reference

| Control | Type | Range / Options | Behavior |
|---|---|---|---|
| Socket Size | Select | Full preset list | Changes CPU footprint used for spread boundary. |
| Pattern Brush | Select | `Dot`, `Line`, `X`, `Square`, `Ring`, `Plus`, `Star`, `Spray`, `Spiral` | Changes paste application pattern while drawing. |
| Preset Drop | Select | `Center Pea`, `Center Line`, `X Pattern`, `5-Dot`, `4 Corners`, `Full Spread` | Chooses a one-click paste application layout. |
| Brush Size | Slider + Number | `2-30` | Controls brush radius/coverage. |
| Viscosity | Slider + Number | `0.05-0.9` | Higher values resist spread more. |
| Cooler Pressure | Slider + Number | `0.05-1.5` | Higher values increase spread intensity. |
| TPS | Slider + Number | `10-240` | Simulation tick rate (update speed). |
| Clear | Button | N/A | Removes all current paste from the surface. |
| Add Center Drop | Button | N/A | Adds a concentrated paste drop at center. |
| Apply Preset Drop | Button | N/A | Applies the currently selected preset drop pattern. |
| Reset Options | Button | N/A | Resets socket/brush/options to defaults. |
| Theme Toggle | Round Button (top-right) | Dark / Light | Switches UI theme. |
| Overspread Alert | Live status badge | Auto | Shows red warning when paste is detected beyond CPU boundary. |

## Socket Sizing Policy

- Socket names are loaded from a predefined list and deduplicated before rendering in the selector.
- Size mapping uses an exact table (`const exact`) in `public/sim.js` when a socket is defined there.
- If a socket name is not found in the exact map, the simulator falls back to:
  - `37.5 x 37.5 mm`

## Runtime Interface

- Entrypoint: `npm start`
- Server: `server.js` (Express static hosting)
- Default URL: `http://localhost:3000`

## Deployment

Deploy on any Node.js host (Render, Railway, Fly.io, VPS, etc.).

- Install/build step:

```bash
npm install
```

- Start command:

```bash
npm start
```

The server uses `PORT` when provided by the platform.
