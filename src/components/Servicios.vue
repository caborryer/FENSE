
<script setup >
import Link from '../components/Link.vue';
  import {
    MDBNavbar,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBContainer,
    MDBRow,
    MDBInput,
    MDBCol,
    MDBIcon,
    MDBBadge,
  } from 'mdb-vue-ui-kit';
</script>
<template>
<div class="container-nos">
<div class="first-slide">
<div class="nosotros-text">
<p>SERVICIOS</p>
</div>
<div class="breadcrump">
           <nav aria-label="breadcrumb" class="d-flex">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a class="text-reset" href="/">Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
        <Link to="servicios">
            <a class="text-reset" href="#"><u>Servicios</u></a>
        </Link>
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </nav>
</div>
</div>
<div class="container-row">
<div class="second-slide"> 
<img class="img-logo" style="background:white" src="/img/nosotros.jpg" alt="imagen logo">
</div>
<div class="fourth-slide">
<div class="inner-div2">
<div class="nosotros-text2">
<p>INGENIERÍA Y PROYECTOS</p>
</div>
<div class="nosotros-p5">
<ul>

<li type="circle">Elaboración de Propuestas.</li>

<li type="circle">Optimización de Nuevas Tecnologías.</li>

<li type="circle">Implementación de Nuevas Tecnologías.</li>

<li type="circle">Ejecución de Proyectos a Todo Costo.</li>
<li type="circle">Elaboración de Planos.</li>

<li type="circle">Homologación y Repotenciación de Equipos.</li>

</ul>
</div>
</div>
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

.second-slide{
    display: flex;
    justify-content: center;
    margin: 30px;
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

.container-row{
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    margin-top: 40px;
}

.servicios-text{
    color: black;
}

.fourth-slide{
    padding: auto;
    margin-bottom: 30px;
            
}

.nosotros-p5{
    display: flex;
    justify-content: center;
    align-items: center;
    color:#4b4342;
    font-size: 17px;
    margin-bottom: 30px;

}

.inner-div{
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    height: auto;
    vertical-align: baseline;
}

.nosotros-text2{
    display: flex;
    text-align: center;
    color: #4b4342;
    justify-content: center;
    font-size: 51px;
}

.img-logo {
    max-width: 100%;
    height: auto;
    background: white;
}

@media (max-width: 815px) {
    .container-row{
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 40px;
}

.fourth-slide{
    padding: auto;
    margin-bottom: 30px;
    margin-top: 60px;
            
}
}

@media (min-width: 1270px) {
   .nosotros-text2{
    display: flex;
    text-align: center;
    color: #4b4342;
    justify-content: center;
    font-size: 51px;
    margin-left: 88px;
}
}



</style>