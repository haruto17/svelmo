<script>
  import { createEventDispatcher } from "svelte";
  import { marked } from "marked";
  import { markedHighlight } from "marked-highlight";
  import hljs from "highlight.js";

  marked.use(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

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
    console.log(marked.parse(new_contents.value));
    dispatch("closeEvent", {
      new_memo: memo,
    });
  };
</script>

<dialog class="modal" class:modal-open={isOpen}>
  <form method="dialog" class="modal-box h-[80%] w-[95%] max-w-7xl">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={close}>✕</button>
    <div class="flex flex-col">
      <input
        type="text"
        placeholder="Title"
        class="input input-bordered input-accent w-full max-w-7xl my-1"
        value={aaa.title}
        bind:this={new_title}
      />
      <input
        type="text"
        placeholder="SubTitle"
        class="input input-bordered input-accent w-full max-w-7xl my-1"
        value={aaa.subtitle}
        bind:this={new_subtitle}
      />
      <textarea
        class="textarea textarea-accent w-full max-w-7xl h-64 resize-none my-1"
        placeholder="Contents"
        value={aaa.contents}
        bind:this={new_contents}
      />
    </div>
    <div class="tooltip tooltip-top" data-tip="edit">
      <input type="radio" name="radio-4" class="radio radio-accent" checked />
    </div>
    <div class="tooltip tooltip-top" data-tip="view">
      <input type="radio" name="radio-4" class="radio radio-accent" />
    </div>
  </form>
</dialog>

<style>
</style>
