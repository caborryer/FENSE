<script>
  import { MDBNavbar, MDBBreadcrumb, MDBBreadcrumbItem,
    MDBContainer, MDBRow, MDBInput, MDBCol, MDBIcon, MDBBadge } from 'mdb-vue-ui-kit';

    export default {
      components: {
        MDBNavbar,
        MDBBreadcrumb,
        MDBBreadcrumbItem,
        MDBContainer,
        MDBRow,
        MDBInput,
        MDBCol,
        MDBIcon,
        MDBBadge,
      },
    };
</script>
<template>
<div class="container-nos">
<div class="first-slide">
<div class="nosotros-text">
<p>ACOPLES INDUSTRIALES</p>
</div>
<div class="breadcrump">
           <nav aria-label="breadcrumb" class="d-flex">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem router to="home">
          <a class="text-reset" href="">Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem router to="correas" active>
          <a class="text-reset" href=""><u>Acoples</u></a>
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </nav>
</div>
</div>
</div>
</template>

<style scoped>
.container-nos{
    display: flex;
    flex-direction: column;
    margin-top: 175px;
}

.first-slide{
    background-image: linear-gradient(to right, rgb(0 0 0 / .8), rgb(0 0 0 / .7)), url(/img/slider4.jpg);
    padding: 1rem 0;
    background-size: cover;
    background-position: center center;
    width: 100%;
}

.nosotros-text{
    display: flex;
    color: white;
    justify-content: center;
    font-size: 51px;
}

.breadcrump{
    display: flex;
    justify-content: center;
    color: yellow;
}



@media (max-width: 768px) {
    .container-nos{
    display: flex;
    flex-direction: column;
    margin-top: 195px;
}

}


</style>