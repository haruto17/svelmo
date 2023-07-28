<script>
  export let isModalOpen;

  const closeModal = () => {
    isModalOpen = false;
  };
</script>

<dialog class="modal" class:modal-open={isModalOpen}>
  <form method="dialog" class="modal-box">
    <button
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      on:click={closeModal}>✕</button
    >
    <h3 class="font-bold text-lg">Create New Memo</h3>
    <input
      type="text"
      placeholder="Title"
      class="input input-bordered input-accent w-full max-w-xs"
    />
    <input
      type="text"
      placeholder="SubTitle"
      class="input input-bordered input-accent w-full max-w-xs"
    />
    <input
      type="text"
      placeholder="Contents"
      class="input input-bordered input-accent w-full max-w-xs"
    />
    <input
      type="text"
      placeholder="Tags"
      class="input input-bordered input-accent w-full max-w-xs"
    />
    <div class="modal-action">
      <button class="btn" on:click={closeModal}>create</button>
    </div>
  </form>
</dialog>

<style>
</style>
