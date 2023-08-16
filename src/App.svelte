<script lang="ts">
  import Category from "./lib/Category.svelte";
  import "./app.css";

  let index = 0;

  function addCategory() {
    let li = document.createElement("li");
    li.id = index.toString();
    li.className = "list-memo";
    let categoryList = document.getElementById("categoryList");
    categoryList.appendChild(li);

    new Category({ target: document.getElementById(index.toString()) });

    index++;
  }
</script>

<main>
  <div class="flex flex-row mx-5 my-10">
    <ul id="categoryList" class="flex overflow-x-auto overflow-y-hidden">
      <!-- <li class="inline-block w-fit">
        <Category />
      </li>
      <li class="inline-block w-fit">
        <Category />
      </li>
      <li class="inline-block w-fit">
        <Category />
      </li>
      <li class="inline-block w-fit">
        <Category />
      </li>
      <li class="inline-block w-fit">
        <Category />
      </li>
      <li class="inline-block w-fit">
        <Category />
      </li> -->
    </ul>

    <div class="tooltip tooltip-top" data-tip="add category">
      <button class="btn btn-accent h-[80vh]" on:click={addCategory}>+</button>
    </div>
  </div>
</main>

<style></style>
