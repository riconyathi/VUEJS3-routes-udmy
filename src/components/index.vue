<template>
    
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{{img}}</h1>
        
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Et harum quidem rerum facilis est et</h2>
          <p>Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          <button class="btn btn-outline-light" type="button">Read more</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Nam libero tempore, cum soluta nobis.</h2>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p>
          <button class="btn btn-outline-secondary" type="button">Read more</button>
        </div>
      </div>
    </div>


</template>
<script>
export default {
  data(){
    return {
      img : 'https://unsplash.com/photos/A5E-ym6WyGM'
    }
  }
}
</script>
