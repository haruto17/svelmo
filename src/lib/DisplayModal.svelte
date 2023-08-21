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

  $: if (isOpen == true) {
    let md = marked.parse(aaa.contents);
    displayMD.insertAdjacentHTML("beforeend", md);
  }

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
    dispatch("closeEvent", {
      new_memo: memo,
    });
    displayMD.innerHTML = "";
  };

  function createMDElement() {
    displayMD.innerHTML = "";
    let md = marked.parse(new_contents.value);
    displayMD.insertAdjacentHTML("beforeend", md);
  }
</script>

<dialog class="modal" class:modal-open={isOpen}>
  <form method="dialog" class="modal-box h-[80%] w-[95%] max-w-7xl">
    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={close}>✕</button>
    <div class="flex flex-col mt-2">
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
      <div class="flex flex-row justify-center">
        <textarea
          class="textarea textarea-accent w-[calc(50%-4px)] max-w-7xl h-[32rem] resize-none my-1 mr-1"
          placeholder="Contents"
          value={aaa.contents}
          bind:this={new_contents}
          on:input={createMDElement}
        />
        <div id="displayMD" class="prose max-w-none w-[calc(50%-4px)] h-[32rem] border border-accent rounded-lg my-1 ml-1 py-2 px-4" />
      </div>
    </div>
  </form>
</dialog>

<style>
</style>
