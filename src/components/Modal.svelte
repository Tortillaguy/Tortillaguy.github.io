<script>
  export let isOpen = false;
  export let onClose = () => {};

  function handleClose() {
    onClose();
  }
</script>

{#if isOpen}
  <div class="modal-overlay" on:click={handleClose}>
    <div class="modal" on:click|stopPropagation>
      <button class="close" on:click={handleClose}>&times;</button>
      <slot></slot>
    </div>
  </div>
{/if}

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
