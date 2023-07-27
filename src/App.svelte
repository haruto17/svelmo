<script lang="ts">
  let isModalOpen = false;
  let title = "";
  let subtitle = "";
  let contents = "";
  let tags = "";
  let data_list = [];

  function handleCreateClick() {
    data_list = [
      ...data_list,
      {
        title: title,
        subtitle: subtitle,
        contents: contents,
        tags: tags,
      },
    ];
    title = "";
    subtitle = "";
    contents = "";
    tags = "";
    isModalOpen = false;
  }
</script>

<main>
  <button class="btn btn-accent" on:click={() => (isModalOpen = true)}>+</button
  >
  <ul>
    {#each data_list as data}
      <li>
        <p>{data.title} {data.subtitle} {data.contents} {data.tags}</p>
      </li>
    {/each}
  </ul>
  <dialog class="modal" class:modal-open={isModalOpen}>
    <form method="dialog" class="modal-box">
      <button
        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        on:click={() => (isModalOpen = false)}>✕</button
      >
      <h3 class="font-bold text-lg">Create New Memo</h3>
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
        <button class="btn" on:click={handleCreateClick}>create</button>
      </div>
    </form>
  </dialog>
</main>

<style></style>
