Vue.component('carousel', {
    props: ['photos', 'carouselid'],
    data() {
        return {
            selectedIndex: 0,
        };
    },
    template: `
                <div :id="carouselid" class="carousel slide" style="width:300px">
                  <div class="carousel-inner">
                    <div class="carousel-item" v-bind:class="{ 'active': index === 0}"  v-for="(photo, index) in photos" :key="photo.id">
                       <img :src="photo.url" class="d-block w-100" :alt="photo.title">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" :data-bs-target="'#' + carouselid" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" :data-bs-target="'#' + carouselid" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
               </div>`
})