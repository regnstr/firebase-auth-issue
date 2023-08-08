<script lang="ts">
    import FlexboxRow from "$lib/components/FlexboxRow.svelte";
    import { signOut, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, type User } from "firebase/auth";
    import { auth } from "$lib/db/firebase";

    async function handleSignout() {
        await signOut(auth);
    }

    async function handleSignin() {
        await signInWithRedirect(auth, new GoogleAuthProvider())
    }

    onAuthStateChanged(auth, (data) => {
        user = data;
    })

    let user: User|null;

</script>

<style>
    div {
        margin: 6px;
    }

    span, input {
        margin: 6px;
    }
</style>

<div>
    <FlexboxRow>
        {#if user}
            <span>{user.displayName}</span>
            <input type="button" value="Sign out" on:click={handleSignout} />
        {:else}
            <input type="button" value="Sign in with Google" on:click={handleSignin} />
        {/if}
    </FlexboxRow>
</div>