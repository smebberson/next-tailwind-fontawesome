# next-tailwind-fontawesome

An example setup using Next.js, Tailwind CSS and Font Awesome.

# Development

To get started with development, follow these steps.

Install dependencies:

```bash
yarn
```

Start the development server:

```bash
yarn dev
```

Open a browser to http://localhost:3000. As you make changes to the code, the browser will automatically update.

# Cloudflare

This project is configured to deploy to Cloudflare Pages Site.

## Testing

To test the production build locally, follow these steps.

Build the website:

```bash
yarn build:ci
```

Run wrangler to browser the website:

```bash
yarn dev:ci
```

Open a browser to http://127.0.0.1:8788.

# Template

To use this repository as a template, after creating a new repository, complete the following steps.

Configure the repository secrets, by going to Settings > Secrets and variables > Actions and adding the `FONTAWESOME_NPM_AUTH_TOKEN` secret.

Follow the steps at [Cloudflare Docs > Pages > Deploy a Next.js site > Use the Edge Runtime](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-the-edge-runtime), with the following considerations:

-   The Edge Runtime has already been setup on `app/api/features` and `app/ssr`.
-   Yarn has been pinned to v1.22.19 using `packageManager` in `package.json`.
-   You'll need to ensure `.npmrc.pages` is copied across and that you setup a `TOKEN_FOR_FONTAWESOME` environment variable.
-   You'll need to ensure you [add the `nodejs_compat` flag](https://developers.cloudflare.com/workers/runtime-apis/nodejs#enable-nodejs-from-the-cloudflare-dashboard).
