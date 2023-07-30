<script>
  import { createEventDispatcher } from "svelte";

  export let isOpen = false;
  export let aaa = {};

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
    <input
      type="text"
      placeholder="Title"
      class="input input-bordered input-accent w-full max-w-xs"
      value={aaa.title}
    />
    <input
      type="text"
      placeholder="SubTitle"
      class="input input-bordered input-accent w-full max-w-xs"
      value={aaa.subtitle}
    />
    <input
      type="text"
      placeholder="Contents"
      class="input input-bordered input-accent w-full max-w-xs"
      value={aaa.contents}
    />
    <input
      type="text"
      placeholder="Tags"
      class="input input-bordered input-accent w-full max-w-xs"
      value={aaa.tags}
    />
  </form>
</dialog>

<style>
</style>
