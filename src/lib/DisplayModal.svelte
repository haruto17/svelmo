<script>
  import { createEventDispatcher } from "svelte";

  export let isOpen = false;

  let title = "";
  let subtitle = "";
  let contents = "";
  let tags = "";

  const dispatch = createEventDispatcher();
  const close = () => {
    dispatch("closeEvent");
  };
</script>

<dialog class="modal" class:modal-open={isOpen}>
  <form method="dialog" class="modal-box">
    <button
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      on:click={close}>✕</button
    >
    <h3 class="font-bold text-lg">aa</h3>
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
  </form>
</dialog>

<style>
</style>
