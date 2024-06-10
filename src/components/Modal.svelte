<script lang="ts">
  import { modalData } from "../lib/modalStore";
  import type { Project } from "../types";

  export let renderData: Project | undefined = undefined;

  function closeModal() {
    let modal = document.getElementById("modal") as HTMLDialogElement;

    modal.close();

    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  function lockWindow() {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
  }

  modalData.listen((data) => {
    renderData = data;
    let modal = document.getElementById("modal") as HTMLDialogElement;
    if (data) {
      lockWindow()
      modal.showModal();  
    } else {
      closeModal();
    }
  });

  function onClose() {
    closeModal();
  }
</script>

<dialog
  id="modal"
  class="transition-opacity fade-in-0 relative my-auto p-5 md:max-w-2xl rounded-xl"
  on:close={() => {
    modalData.set(undefined);
  }}
>
  <button
    on:click={() => modalData.set(undefined)}
    class="p-5 cursor-pointer absolute top-0 right-0 outline-none"
  >
    <img class="w-8 h-8" alt="close" src={"close.svg"} />
  </button>
  {#if renderData}
    <div class="w-full flex items-center">
      <div class="flex-grow items-center flex justify-center text-xl mt-2">
        {renderData.name}
      </div>
    </div>
    <div class="rounded-md flex-col flex justify-center whitespace-pre-wrap">
      <div>{renderData.description}</div>
    </div>
  {/if}
</dialog>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
</style>
