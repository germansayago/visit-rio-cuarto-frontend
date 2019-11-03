<template>
  <div class="hero d-flex justify-content-center align-items-center">
    <div class="container text-center">
      <h1>Que querés hacer</h1>
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <input type="text" class="form-control form-control-lg py-4">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .hero{
    min-height: 600px;
    background: url('https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center center;
    h1{
      color: white;
      font-weight: 300;
      font-size: 2.6rem;
    }
  }

  @media (max-width: 767px) {
    .hero{
      min-height: 400px;
      h1{
        font-size: 2.4rem;
      }
    }
  }
</style>
