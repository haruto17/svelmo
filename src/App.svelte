<script lang="ts">
  let isModalOpen = false;
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

  let modalOpen = false;
  function openModal() {
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
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
  -->
  <Modal isOpen={modalOpen} on:closeEvent={closeModal} />
</main>

<style></style>
