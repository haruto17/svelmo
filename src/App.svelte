<script lang="ts">
  import CreateModal from "./lib/CreateModal.svelte";
  import DisplayModal from "./lib/DisplayModal.svelte";

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

  let createModalOpen = false;
  function openCreateModal() {
    createModalOpen = true;
  }

  function closeCreateModal() {
    createModalOpen = false;
    console.log(memo);
    if (memo.title.length != 0) {
      data_list = [...data_list, memo];
    }
  }

  let displayModalOpen = false;
  function openDisplayModal(index: number) {
    displayModalOpen = true;
    console.log(data_list[index]);
  }

  function closeDisplayModal() {
    displayModalOpen = false;
  }

  function deleteMemo(index: number) {
    const new_data = [...data_list];
    new_data.splice(index, 1);
    data_list = new_data;
  }
</script>

<main>
  <button class="btn btn-accent" on:click={openCreateModal}>+</button>
  <ul>
    {#each data_list as data, i}
      <div
        class="card border-2 border-accent w-96 bg-neutrals text-primary-content cursor-pointer"
      >
        <div class="card-body">
          <h2 class="card-title">{data.title}</h2>
          <p>{data.subtitle}</p>
          <div class="card-actions justify-end">
            <div class="tooltip" data-tip="delete">
              <button class="btn" on:click={() => deleteMemo(i)}
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            <div class="tooltip" data-tip="open">
              <button class="btn" on:click={() => openDisplayModal(i)}
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </ul>
  <CreateModal
    isOpen={createModalOpen}
    on:closeEvent={closeCreateModal}
    bind:memo_obj={memo}
  />
  <DisplayModal isOpen={displayModalOpen} on:closeEvent={closeDisplayModal} />
</main>

<style></style>
