<script>
  import { modalData } from "../lib/modalStore";

  modalData.listen((data) => {
    console.log({ data });
    if (data) {
      modal.showModal();
    } else {
      modal.close();
    }
  });

  //variable Init
  let isOpen = false;
  //function to be called on click
  function onClick() {
    //incremtent
    // document.getElementById("my_modal_1").showModal();
    const modal = document.getElementById("modal");
    modalData.set({ name: "TEST" });
  }
  function onClose() {
    document.getElementById("modal").close();
    modalData;
  }
</script>

<!-- the function will be called on click -->
<button on:click={onClick}> Open </button>

<dialog
  id="modal"
  on:close={() => {
    modalData.set(undefined);
  }}
>
  <div class="rounded-md flex-col flex justify-center max-w-xl min-w-sm p-20">
    <div>TEST</div>
    <div>Some description</div>
  </div>
  <button on:click={onClose}>Close</button>
</dialog>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
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
