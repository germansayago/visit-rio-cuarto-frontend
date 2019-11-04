<template>
  <nav class="navbar navbar-expand-xl navbar-dark bg-primary fixed-top py-2">
    <a class="navbar-brand" href="/">
      <img src="~/assets/images/icon-visit-rio-cuarto-black.svg" width="30" height="30" class="d-inline-block align-top" alt="">
      VISIT RIO CUARTO
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/eventos">Eventos</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
