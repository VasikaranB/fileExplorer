<svelte:options tag="add-file" />

<script>
  import { onMount, onDestroy } from "svelte";
  import { createEventDispatcher } from "svelte";
  import FileList from "./FileList.svelte";

  const dispatch = createEventDispatcher();

  // Define the component's props
  export let darkmode = true;
  export let folder = {
    name: "root",
    type: "folder",
    children: [
      {
        name: "Folder 1",
        type: "folder",
        open: false,
        children: [
          {
            name: "Subfolder 1.1",
            type: "folder",
            open: false,
            children: [
              {
                name: "File 1.1.1",
                type: "file",
              },
              {
                name: "File 1.1.2",
                type: "file",
              },
            ],
          },
          {
            name: "Subfolder 1.2",
            type: "folder",
            open: false,
            children: [
              {
                name: "File 1.2.1",
                type: "file",
              },
              {
                name: "File 1.2.2",
                type: "file",
              },
            ],
          },
        ],
      },
      {
        name: "Folder 2",
        type: "folder",
        open: false,
        children: [
          {
            name: "File 2.1",
            type: "file",
          },
          {
            name: "File 2.2",
            type: "file",
          },
        ],
      },
    ],
  };

  
  // Define the component's data
  let name = "";
  let type = "folder";
  let parentFolder = "root";
  let error = false;
  let nameError = false;
  let disabled = true;
  let expand = false;
  
  $: folderNode = folder?.children.filter((fs) => fs.type == "folder");
  $: fileList = folder?.children.map((fs) => {
    if (fs.type == "folder") {
      return fs.children.filter((sfs) => sfs.type === "folder");
    }
  });
  $: fileNode = fileList.flat();
  $: disabled = name == "" || type == "" || parentFolder == "" || nameError;

  function toggleCollapse() {
    expand = !expand;
    folder.children.forEach((rootfolder) => {
      if (rootfolder.type == "folder") rootfolder.open = expand;
      rootfolder.children.forEach((childfolder) => {
        if (childfolder.type == "folder") childfolder.open = expand;
      });
    });
    folder = { ...folder };
  }

  function insertObjectIntoFolder(targetFolder, object) {
    const folderIndex = folder.children.findIndex(
      (child) => child.name === targetFolder && child.type === "folder"
    );
    if (folderIndex !== -1) {
      if (
        folder.children[folderIndex].children.find(
          (child) => child.name === object.name && child.type === object.type
        )
      )
        showError();
      else folder.children[folderIndex].children.push(object);
    } else {
      folder?.children.forEach((fs) => {
        if (fs.type == "folder") {
          fs.children.forEach((sfs) => {
            if (sfs.type === "folder" && sfs.name === targetFolder)
              if (
                sfs.children.find(
                  (child) =>
                    child.name === object.name && child.type === object.type
                )
              )
                showError();
              else sfs.children.push(object);
          });
        }
      });
    }
    if (targetFolder == "root") {
      if (
        folder.children.find(
          (child) => child.name === object.name && child.type === object.type
        )
      )
        showError();
      else folder.children.push(object);
    }
    folder = { ...folder };
  }

  function showError() {
    error = true;
    setTimeout(() => {
      error = false;
    }, 2000);
  }

  function handleSave() {
    if (name != "" && type != "" && parentFolder != "") {
      const targetFolder = parentFolder;
      const newObject = {
        name: name,
        type: type,
        open: false,
      };
      if (type == "folder") {
        newObject.children = [];
      }
      insertObjectIntoFolder(targetFolder, newObject);
      dispatch("save", {
        folder : folder
      });
      name = "";
      type = "folder";
      parentFolder = "root";
    }
  }

  function validateFolderName() {
    const folderNameRegex = /^[a-zA-Z0-9_\-]*$/;
    if (!folderNameRegex.test(name)) {
      nameError = true
    } else {
      nameError = false
    }
  }

  function handleCancel() {
    name = "";
    type = "folder";
    parentFolder = "root";
    dispatch("cancel");
  }

  onMount(() => {});

  onDestroy(() => {});
</script>

<!-- Define the component's HTML -->
<div class={darkmode === true ? "container dark" : "container"}>
  <div class="form-group">
    <label for="name">Folder/File Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Enter name..."
      bind:value={name}
      on:input={validateFolderName}
    />
  </div>
  <div class={nameError === true ? "nameError" : "d-none"}>
    Invalid Folder/File Name
  </div>

  <div class="form-group">
    <label for="type">Type:</label>
    <select id="type" name="type" bind:value={type}>
      <option value="folder">Folder</option>
      <option value="file">File</option>
    </select>
  </div>

  <div id="folder-select" class="form-group">
    <label for="folder">Folder:</label>
    <select id="folder" name="folder" bind:value={parentFolder}>
      <option class="sel-option" value="root">Root level</option>
      {#each folderNode as folder}
        <option class="sel-option" value={folder?.name}>{folder?.name}</option>
      {/each}
      {#if type == "file"}
        {#each fileNode as subfolder}
          <option class="sel-option" value={subfolder?.name}>{subfolder?.name}</option>
        {/each}
      {/if}
    </select>
  </div>

  <div class="btn-group">
    <button class="btn btn-save" {disabled} on:click={handleSave}>Save</button>
    <button class="btn btn-cancel" on:click={handleCancel}>Cancel</button>
  </div>

  <div class={error === true ? "error" : "d-none"}>
    Folder/File name aleady exists
  </div>
</div>
<div class="fs" />
<div class={darkmode === true ? "container dark" : "container"}>
  <h1 class="folderstr">File Explorer</h1>
  {#if folder?.children && folder?.children.length > 0}
    <div class="collapse" on:click={toggleCollapse}>
      {expand ? "Collapse All" : "Expand All"}
    </div>
    <file-list {folder} {darkmode} />
  {:else}
    <img class="fileimage" alt="img" src="nofile.png" />
    <div class="folderstr">No folder/file to show</div>
  {/if}
</div>

<style>
  .collapse {
    display: flex;
    font-size: 0.9rem;
    justify-content: flex-end;
    color: #0066cc;
    cursor: pointer;
  }
  .fileimage {
    margin: auto;
    height: 5rem;
    width: 5rem;
  }
  div {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
  .d-none {
    display: none;
  }
  .error {
    color: red;
  }
  .nameError {
    color: red;
    margin-top: -2rem;
    font-size: 0.8rem;
  }
  .fs {
    min-height: 1rem;
  }
  .folderstr {
    display: flex;
    justify-content: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
  }

  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1rem;
  }

  .form-group input,
  .form-group select {
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .form-group input:focus,
  .form-group select:focus {
    outline: none;
    border-color: #0085ff;
    box-shadow: 0 0 5px #0085ff;
  }

  .form-group select {
    cursor: pointer;
  }

  .btn-group {
    display: flex;
    justify-content: flex-end;
  }

  .btn {
    padding: 8px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }

  .btn-save:disabled {
    border: 1px solid #999999;
    background-color: #f2f2f2;
    color: #333;
    pointer-events: none;
  }

  .btn-save {
    background-color: #0085ff;
    color: #fff;
  }

  .btn-save:hover {
    background-color: #0066cc;
  }

  .btn-cancel {
    background-color: #f2f2f2;
    color: #333;
  }

  .btn-cancel:hover {
    background-color: #e6e6e6;
  }
  .sel-option {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }

  /* dark mode */
  .dark.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #333;
    border-radius: 4px;
    background-color: #1e1e1e;
  }

  .dark .folderstr {
    color: #fff;
    background-color: #1e1e1e;
  }

  .dark .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .dark .form-group label {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1rem;
    color: #fff;
  }

  .dark .form-group input,
  .dark .form-group select {
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    background-color: #333;
    color: #fff;
  }

  .dark .form-group input:focus,
  .dark .form-group select:focus {
    outline: none;
    border-color: #0085ff;
    box-shadow: 0 0 5px #0085ff;
  }

  .dark .form-group select {
    cursor: pointer;
  }

  .dark .btn-group {
    display: flex;
    justify-content: flex-end;
  }

  .dark .btn {
    padding: 8px 20px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }

  .dark .btn-save {
    background-color: #0085ff;
    color: #fff;
  }

  .dark .btn-save:hover {
    background-color: #0066cc;
  }

  .dark .btn-save:disabled {
    border: 1px solid #999999;
    background-color: #f2f2f2;
    color: #333;
    pointer-events: none;
  }

  .dark .btn-cancel {
    background-color: #f2f2f2;
    color: #333;
  }

  .dark .btn-cancel:hover {
    background-color: #e6e6e6;
  }
  .dark .collapse {
    color: #00cccc;
  }
</style>
