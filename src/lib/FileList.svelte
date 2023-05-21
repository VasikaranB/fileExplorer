<svelte:options tag="file-list" />

<script>
  export let folder = { children: [] };
  export let darkmode = false;

  function toggleFolder(child) {
    child.open = !child.open;
    folder = { ...folder };
  }

  function handleKeydown(event, child) {
    if (event.key === "Enter" || event.key === " ") {
      toggleFolder(child);
      event.preventDefault();
    }
  }
</script>

<div class={darkmode ? "dark" : ""}>
  {#each folder?.children as child}
    <div class="folder">
      {#if child?.children}
        <span
          class={child?.open == true
            ? "folder-arrow-close"
            : "folder-arrow-open"}
          on:click|preventDefault={() => toggleFolder(child)}
          on:keydown|preventDefault={(event) => handleKeydown(event, child)}
        ></span>
        <img class="folderimage" alt="img" src="folder.png"/>
      {:else}
        <span class="file" />
        <img class="fileimage" alt="img" src="file.png"/>
      {/if}

      <span class="folder-label">{child.name}</span>
    </div>
    <div class="child">
      {#if child?.open && child?.children && child?.children.length > 0}
        <svelte:self folder={child} />
      {/if}
    </div>
  {/each}
</div>

<style>
  .fileimage {
    height: 1.5rem;
    width: 1.5rem;
  }
  .folderimage {
    height: 1rem;
    width: 1rem;
  }
  .folder {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  .folder-arrow-open {
    width: 0.5rem;
    height: 0.5rem;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    transform: rotate(45deg);
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .folder-arrow-close {
    width: 0.5rem;
    height: 0.5rem;
    border-bottom: 2px solid #0004ff;
    border-right: 2px solid #0004ff;
    transform: rotate(45deg);
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .folder-label {
    margin-left: 1rem;
    font-size: 1rem;
  }

  .file {
    margin-left: 0.8rem;
  }

  .child {
    margin-left: 2rem;
  }

  .dark .folder-label {
    color: #fff;
  }

  .dark .file {
    color: #fff;
  }

  .dark .child {
    color: #fff;
  }

  .dark .folder-arrow-open {
    width: 10px;
    height: 10px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .dark .folder-arrow-close {
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #c8fc0f;
    border-right: 2px solid #c8fc0f;
    transform: rotate(45deg);
    margin-right: 0.5rem;
    cursor: pointer;
  }
</style>
