<script>
  import { createEventDispatcher } from "svelte";

  export let isOpen = false;

  const dispatch = createEventDispatcher();
  const close = () => {
    memo_obj = {
      title: title,
      subtitle: subtitle,
      contents: contents,
    };
    dispatch("closeEvent");
    title = "";
    subtitle = "";
    contents = "";
  };

  let title = "";
  let subtitle = "";
  let contents = "";
  export let memo_obj = {};
</script>

<dialog class="modal" class:modal-open={isOpen}>
  <form method="dialog" class="modal-box h-[80%] w-[95%] max-w-7xl">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={close}>✕</button>
    <h3 class="font-bold text-lg">Create New Memo</h3>
    <input type="text" placeholder="Title" class="input input-bordered input-accent w-full max-w-xs" bind:value={title} />
    <input type="text" placeholder="SubTitle" class="input input-bordered input-accent w-full max-w-xs" bind:value={subtitle} />
    <textarea class="textarea textarea-accent w-full max-w-xs h-64 resize-none" placeholder="Contents" bind:value={contents} />
    <div class="modal-action">
      <button class="btn" on:click={close}>create</button>
    </div>
  </form>
</dialog>

<style>
</style>
