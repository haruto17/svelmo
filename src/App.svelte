<script lang="ts">
  import Modal from "./lib/Modal.svelte";

  let memo;
  let data_list = [];

  // function handleCreateClick() {
  //   data_list = [
  //     ...data_list,
  //     {
  //       title: title,
  //       subtitle: subtitle,
  //       contents: contents,
  //       tags: tags,
  //     },
  //   ];
  //   title = "";
  //   subtitle = "";
  //   contents = "";
  //   tags = "";
  // }

  let modalOpen = false;
  function openModal() {
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
    console.log(memo);
    data_list = [...data_list, memo];
  }
</script>

<main>
  <button class="btn btn-accent" on:click={openModal}>+</button>
  <ul>
    {#each data_list as data}
      <div
        class="card border-2 border-accent w-96 bg-neutrals text-primary-content"
      >
        <div class="card-body">
          <h2 class="card-title">{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>
      </div>
    {/each}
  </ul>
  <Modal isOpen={modalOpen} on:closeEvent={closeModal} bind:memo_obj={memo} />
</main>

<style></style>
