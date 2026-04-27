# Securis Website

## Lead form notifications

The contact forms save submissions to Supabase table `contact_submissions` and can also email
`securisholder@gmail.com` through a Supabase Edge Function.

### 1. Required frontend env vars

Create a `.env` file for the Vite app:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Required Supabase table

Create the `contact_submissions` table with these fields:

```sql
create table if not exists public.contact_submissions (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default now() not null,
  name text not null,
  email text not null,
  gym_name text,
  message text not null,
  source_page text not null,
  interest_type text not null
);
```

### 3. Deploy the Edge Function

This repo includes `supabase/functions/notify-contact-submission`.

Deploy it with the Supabase CLI:

```bash
supabase functions deploy notify-contact-submission
```

### 4. Set Edge Function secrets

You need a Resend API key so the function can send mail:

```bash
supabase secrets set RESEND_API_KEY=re_your_key
supabase secrets set NOTIFICATION_EMAIL=securisholder@gmail.com
supabase secrets set RESEND_FROM_EMAIL="Securis <onboarding@resend.dev>"
```

`reply_to` is automatically set to the submitter's email address.

For production, replace `onboarding@resend.dev` with an address from a verified domain you own.

### 5. What happens on submit

1. The form inserts the submission into `contact_submissions`.
2. The app invokes the `notify-contact-submission` Edge Function.
3. The function emails `securisholder@gmail.com`.
4. Hitting reply in Gmail sends the response to the submitter because `reply_to` is set to their email.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
