<script lang="ts">
  let isModalOpen = false;
  let title = "";
  let subtitle = "";
  let contents = "";
  let tags = "";
</script>

<main>
  <button class="btn btn-accent" on:click={() => (isModalOpen = true)}>+</button
  >
  <p>title : {title}</p>
  <p>contents : {contents}</p>
  <p>tags : {tags}</p>
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
        class="input input-bordered input-accent w-full max-w-xs"
        bind:value={title}
      />
      <input
        type="text"
        placeholder="SubTitle"
        class="input input-bordered input-accent w-full max-w-xs"
        bind:value={subtitle}
      />
      <input
        type="text"
        placeholder="Contents"
        class="input input-bordered input-accent w-full max-w-xs"
        bind:value={contents}
      />
      <input
        type="text"
        placeholder="Tags"
        class="input input-bordered input-accent w-full max-w-xs"
        bind:value={tags}
      />
      <div class="modal-action">
        <button class="btn" on:click={() => (isModalOpen = false)}>add</button>
      </div>
    </form>
  </dialog>
</main>

<style></style>
