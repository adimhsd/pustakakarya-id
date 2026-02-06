FIREBASE TOKEN SETUP
====================

This repository includes a GitHub Actions workflow that builds the site and deploys to Firebase Hosting on push to `main`/`master`.

To allow the workflow to deploy automatically you must add a `FIREBASE_TOKEN` secret to the repository.

How to create `FIREBASE_TOKEN` (run locally):

1. Install the Firebase CLI and log in (if not already):

```bash
npm install -g firebase-tools
firebase login
```

2. Create a CI token:

```bash
firebase login:ci
```

3. The command will open a browser to authenticate and then print a long token string. Copy that token.

4. In your GitHub repository go to Settings → Secrets and variables → Actions → New repository secret. Create a secret named `FIREBASE_TOKEN` and paste the token as the value.

5. Push to `main`/`master` and the workflow will run and deploy automatically.

Manual deploy from your machine (interactive):

```bash
# build
npm ci
npm run build
# login and deploy
firebase login
firebase deploy --only hosting
```

Security note: treat the token like a password — keep it private and rotate it if compromised.
