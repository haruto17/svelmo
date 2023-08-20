<script>
  import { createEventDispatcher } from "svelte";
  import { marked } from "marked";
  import highlightjs from "highlight.js";

  marked.setOptions({
    highlight: function (code, lang) {
      return highlightjs.highlightAuto(code, [lang]).value;
    },
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: true,
    silent: false,
  });

  export let isOpen = false;
  export let aaa = {};

  let new_title;
  let new_subtitle;
  let new_contents;

  const dispatch = createEventDispatcher();
  const close = () => {
    const memo = {
      title: new_title.value,
      subtitle: new_subtitle.value,
      contents: new_contents.value,
    };
    console.log(marked(new_contents.value));
    dispatch("closeEvent", {
      new_memo: memo,
    });
  };
</script>

<dialog class="modal" class:modal-open={isOpen}>
  <form method="dialog" class="modal-box">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={close}>✕</button>
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
    <textarea
      class="textarea textarea-accent w-full max-w-xs h-64 resize-none"
      placeholder="Contents"
      value={aaa.contents}
      bind:this={new_contents}
    />
  </form>
</dialog>

<style>
</style>
