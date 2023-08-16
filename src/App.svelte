<script lang="ts">
  import Category from "./lib/Category.svelte";
  import "./app.css";

  function addCategory() {
    let li = document.createElement("li");
    li.className = "list-memo";
    let categoryList = document.getElementById("categoryList");
    categoryList.appendChild(li);

    new Category({ target: li });
  }
</script>

<main>
  <div class="flex flex-row mx-5 my-10">
    <ul id="categoryList" class="flex overflow-x-auto overflow-y-hidden" />

    <div class="tooltip tooltip-top" data-tip="add category">
      <button class="btn btn-accent h-[80vh]" on:click={addCategory}>+</button>
    </div>
  </div>
</main>

<style></style>
