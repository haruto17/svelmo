<script lang="ts">
  function handleClick() {
    console.log("click!!");
  }
</script>

<main>
  <button class="btn btn-secondary" on:click={handleClick}>Button</button>
</main>
