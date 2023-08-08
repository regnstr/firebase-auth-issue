<script lang="ts">
    export let style: string | undefined = undefined;
</script>

<style>
    div {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        align-items: center;
    }
</style>

<div {style}>
    <slot></slot>
</div>