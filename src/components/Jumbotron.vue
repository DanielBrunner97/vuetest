<template>
  <div class="d-flex flex-grow-1 justify-content-center align-items-center">
    <div class="d-flex flex-column text-center">
      <h2 class="font-weight-light">Bitte geben sie folgende Information ein</h2>
      <div class="form-floating custom-form-floating">
        <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Schadennummer</label>
        <button class="btn btn-primary mt-3">Weiter</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .full-height {
    height: 100vh;
  }

  .full-height img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }


.navbar-wrapper {
  flex-shrink: 0; /* Ensure the navbar stays fixed at the top and does not shrink */
}

.content-wrapper {
  flex-grow: 1; /* Fill the remaining space to enable vertical centering */
}
</style>

<script>


export default {
  name: 'JumboTron',
};
</script>
