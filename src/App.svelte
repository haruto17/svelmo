<script lang="ts">
  let isModalOpen = false;
</script>

<main>
  <button
    class="btn btn-secondary bg-green-500"
    on:click={() => (isModalOpen = true)}>add</button
  >
  <dialog class="modal" class:modal-open={isModalOpen}>
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p>This is modal!!</p>
      <div class="modal-action">
        <button class="btn" on:click={() => (isModalOpen = false)}>Close</button
        >
      </div>
    </form>
  </dialog>
</main>

<style></style>
