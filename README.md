# Snow Rivals

Snow Rivals is a modern snowboarding coach app designed to help riders of all levels improve their skills, track progress, and connect with coaches and fellow snowboarders.

## Features

- **Personalized Coaching:** Get tailored training plans and feedback from certified coaches.
- **Skill Tracking:** Log your sessions, track your progress, and set goals.
- **Video Analysis:** Upload and review your runs with frame-by-frame analysis.
- **Community:** Join groups, share achievements, and connect with other riders.
- **Event Scheduling:** Find and register for local snowboarding events and competitions.

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/jeremy-london/SnowRivals.git
cd SnowRivals
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Run the development server:**

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables with dotenvx

This project uses [`@dotenvx/dotenvx`](https://github.com/dotenvx/dotenvx) instead of `dotenv` for managing environment variables across multiple files and environments.

### Supported File Layers (auto-detected by dotenvx)

By default `dotenvx run` will merge (if present) in this order (later overrides earlier):

1. `.env`
2. `.env.local`
3. `.env.development` (when running `pnpm dev`)
4. `.env.development.local`

You can add additional environment-specific files such as `.env.production` for builds.

### Usage

Scripts in `package.json` are prefixed with `dotenvx run --` so env loading is automatic:

```bash
pnpm dev      # loads dev env layers
pnpm build    # loads production env layers (use .env.production*)
pnpm start    # serves exported site with env already baked in
```

### Custom Command Example

```bash
dotenvx run -- node scripts/my-task.ts
```

### Adding New Variables

1. Add to the appropriate `.env.*` file.
2. Restart the script (`pnpm dev` etc.) so Next.js rebuilds with the new vars.
3. Expose public values to the client by prefixing them with `NEXT_PUBLIC_`.

### Checking Loaded Variables

```bash
dotenvx run -- npx envinfo
```

Or simply dump them:

```bash
dotenvx run -- node -e 'console.log(process.env.NEXT_PUBLIC_API_URL)'
```

## License

This project is licensed under the [MIT License](./LICENSE).
