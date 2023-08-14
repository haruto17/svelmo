<script lang="ts">
  import Category from "./lib/Category.svelte";
  import { onMount } from "svelte";

  let categoryContainer;

  function addCategory() {
    new Category({ target: document.getElementById("categoryList") });
  }
</script>

<main>
  <div class="flex flex-row mx-5 my-10">
    <div id="categoryList" class="flex flex-row" bind:this={categoryContainer}>
      <Category />
    </div>

    <button class="btn btn-accent h-[80vh]" on:click={addCategory}> + </button>
  </div>
</main>

<style></style>
