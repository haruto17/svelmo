<script lang="ts">
  import Modal from "./lib/Modal.svelte";
  let title = "";
  let subtitle = "";
  let contents = "";
  let tags = "";
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

  let isModalOpen = false;
  function openModal() {
    isModalOpen = true;
  }
</script>

<main>
  <button class="btn btn-accent" on:click={openModal}>+</button>
  <!-- <ul>
    {#each data_list as data}
      <li>
        <p>{data.title} {data.subtitle} {data.contents} {data.tags}</p>
      </li>
    {/each}
  </ul> -->
  <Modal bind:isModalOpen />
</main>

<style></style>
