<script lang="ts">
    import { signOut, getAuth, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, type User } from "firebase/auth";
    import { initializeApp, getApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
        // PASTE FIREBASE CONFIG HERE
        // PASTE FIREBASE CONFIG HERE
        // PASTE FIREBASE CONFIG HERE
        // PASTE FIREBASE CONFIG HERE
        // PASTE FIREBASE CONFIG HERE
        // PASTE FIREBASE CONFIG HERE
    };

    async function handleSignout() {
        await signOut(auth);
    }

    async function handleSignin() {
        await signInWithRedirect(auth, new GoogleAuthProvider())
    }

    function createFirebaseApp() {
        try {
            return getApp();
        } catch {
            return initializeApp(firebaseConfig);
        }
    }

    // Initialize Firebase
    const app = createFirebaseApp();
    const auth = getAuth(app);
    const db = getFirestore(app);

    let user: User|null;
    
    onAuthStateChanged(auth, (data) => {
        user = data;
    })

</script>

<h1>Auth bug replication</h1>
<p>To replicate the bug, open multiple tabs and log in and out several times. After a while, the flow breaks. I could replicate the bug in Chrome and Brave, but not Edge.</p>

<div>
    {#if user}
        <span>{user.displayName}</span>
        <input type="button" value="Sign out" on:click={handleSignout} />
    {:else}
        <input type="button" value="Sign in with Google" on:click={handleSignin} />
    {/if}
</div>