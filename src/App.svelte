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
  }
</script>

<main>
  <button class="btn btn-accent" on:click={openModal}>+</button>
  <ul>
    {#each data_list as data}
      <li>
        <p>{data.title} {data.subtitle} {data.contents} {data.tags}</p>
      </li>
    {/each}
  </ul>
  <Modal isOpen={modalOpen} on:closeEvent={closeModal} bind:memo_obj={memo} />
</main>

<style></style>
