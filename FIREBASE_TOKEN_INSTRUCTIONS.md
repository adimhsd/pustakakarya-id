FIREBASE SERVICE ACCOUNT SETUP
==============================

This repository includes a GitHub Actions workflow (`.github/workflows/firebase-hosting-deploy.yml`) that builds the site and deploys to Firebase Hosting on push to `main`/`master` using `FirebaseExtended/action-hosting-deploy@v0`.

To allow the workflow to deploy automatically and permanently without expiring tokens, add a `FIREBASE_SERVICE_ACCOUNT` secret to the repository.

How to set up `FIREBASE_SERVICE_ACCOUNT`:

1. Open Firebase Console for project `pustakakarya-id` -> **Project Settings** -> **Service accounts**:
   `https://console.firebase.google.com/project/pustakakarya-id/settings/serviceaccounts/adminsdk`

2. Click **Generate new private key** and download the `.json` key file (keep this file private and never commit it to Git).

3. Ensure the `firebase-adminsdk` service account has permission to deploy to Firebase Hosting. If a deploy ever fails with `403 Permission Denied`, open Google Cloud IAM (`https://console.cloud.google.com/iam-admin/iam?project=pustakakarya-id`), find the `firebase-adminsdk` member, and add the **Firebase Hosting Admin** role.

4. In your GitHub repository go to **Settings → Secrets and variables → Actions → New repository secret**. Create a secret named `FIREBASE_SERVICE_ACCOUNT` and paste the entire contents of the `.json` file as the value.

5. Push to `main`/`master` and the workflow will run and deploy automatically.

Manual deploy from your machine (interactive):

```bash
# build
npm ci
npm run build
# login and deploy
npx firebase-tools login
npx firebase-tools deploy --only hosting
```

Security note: treat the Service Account JSON key like a password — keep it private and never commit it to version control.
