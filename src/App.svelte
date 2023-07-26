<script lang="ts">
  let isModalOpen = false;
</script>

<main>
  <button
    class="btn btn-secondary bg-green-500"
    on:click={() => (isModalOpen = true)}>+</button
  >
  <dialog class="modal" class:modal-open={isModalOpen}>
    <form method="dialog" class="modal-box">
      <button
        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        on:click={() => (isModalOpen = false)}>✕</button
      >
      <h3 class="font-bold text-lg">Hello!</h3>
      <p>This is modal!!</p>
      <input
        type="text"
        placeholder="Title"
        class="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Contents"
        class="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Tags"
        class="input input-bordered w-full max-w-xs"
      />
      <div class="modal-action">
        <button class="btn" on:click={() => (isModalOpen = false)}>add</button>
      </div>
    </form>
  </dialog>
</main>

<style></style>
