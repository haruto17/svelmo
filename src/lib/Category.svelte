<script>
  let memo_data = [];

  function openCreateModal() {
    console.log("click");
  }
</script>

<body>
  <p>title</p>
  <ul>
    {#each memo_data as data, i}
      <div>
        <p>memo contents</p>
      </div>
    {/each}
  </ul>
  <div class="tooltip tooltip-bottom" data-tip="add new">
    <button class="btn btn-accent" on:click={openCreateModal}>+</button>
  </div>
</body>

<style>
</style>
