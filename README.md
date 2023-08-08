# Bug replication repo

Demo repo to replicate a bug with signInWithRedirect in Firebase.

Steps to replicate issue:

1. Clone this repo.
2. Run "npm install".
3. Start a new Firebase project with the auth module included.
4. Paste firebase config into "const firebaseConfig" in "+page.svelte".
5. Run "npm run dev".
6. Open several tabs in Chrome and press sign in/out a few times in the different tabs.
7. After a while, the login flow breaks.