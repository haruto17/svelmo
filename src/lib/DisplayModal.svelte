<script>
  import { createEventDispatcher } from "svelte";

  export let isOpen = false;
  export let aaa = {};

  let new_title;
  let new_subtitle;
  let new_contents;
  let new_tags;

  const dispatch = createEventDispatcher();
  const close = () => {
    const memo = {
      title: new_title.value,
      subtitle: new_subtitle.value,
      contents: new_contents.value,
      tags: new_tags.value,
    };
    dispatch("closeEvent", {
      new_memo: memo,
    });
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
      bind:this={new_title}
    />
    <input
      type="text"
      placeholder="SubTitle"
      class="input input-bordered input-accent w-full max-w-xs"
      value={aaa.subtitle}
      bind:this={new_subtitle}
    />
    <input
      type="text"
      placeholder="Contents"
      class="input input-bordered input-accent w-full max-w-xs"
      value={aaa.contents}
      bind:this={new_contents}
    />
    <input
      type="text"
      placeholder="Tags"
      class="input input-bordered input-accent w-full max-w-xs"
      value={aaa.tags}
      bind:this={new_tags}
    />
  </form>
</dialog>

<style>
</style>
