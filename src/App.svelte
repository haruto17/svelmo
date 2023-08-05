<script lang="ts">
  import Category from "./lib/Category.svelte";
  import { onMount } from "svelte";

  let categoryContainer;

  function addCategory() {
    new Category({ target: document.getElementById("categoryList") });
  }
</script>

<main>
  <div id="categoryList" class="flex flex-row" bind:this={categoryContainer}>
    <Category />
  </div>
  <button class="btn btn-accent" on:click={addCategory}> + </button>
</main>

<style></style>
