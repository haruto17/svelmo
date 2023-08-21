<script lang="ts">
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
  export let memo_obj = {};
  let viewMode = false;

  let title = "";
  let subtitle = "";
  let contents = "";

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
</script>

<dialog class="modal" class:modal-open={isOpen}>
  <form method="dialog" class="modal-box h-[80%] w-[95%] max-w-7xl">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={close}>✕</button>
    <h3 class="font-bold text-lg">Create New Memo</h3>
    <div class="flex flex-col">
      <input type="text" placeholder="Title" class="input input-bordered input-accent w-full max-w-7xl my-1" bind:value={title} />
      <input type="text" placeholder="SubTitle" class="input input-bordered input-accent w-full max-w-7xl my-1" bind:value={subtitle} />
      <textarea class="textarea textarea-accent w-full max-w-7xl h-[26rem] resize-none my-1" placeholder="Contents" bind:value={contents} />
    </div>
    <div class="modal-action">
      <button class="btn" on:click={close}>create</button>
    </div>
  </form>
</dialog>

<style>
</style>
