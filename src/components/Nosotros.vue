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
<p>NOSOTROS</p>
</div>
<div class="breadcrump">
           <nav aria-label="breadcrumb" class="d-flex">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a class="text-reset" href="/">Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a class="text-reset" href="/nosotros"><u>Nosotros</u></a>
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </nav>
</div>
</div>
<div class="second-slide">
<div class="inner-div">
<div class="nosotros-text2">
<p>CONOCENOS MEJOR</p>
</div>
<div class="nosotros-p2">
<p>Nuestros expertos en mantenimiento y confiabilidad industrial están 
   comprometidos con brindar el mejor servicio y apoyo a tu empresa.</p>
</div>
</div>
</div>
<div class="third-slide">
<div class="inner-div3">
<div class="nosotros-text3">
<p>MISIÓN</p>
</div>
<div class="nosotros-p3">
<p>Empresa líder en el suministro de componentes para transmisión de potencia, acoples industriales, motorreductores, bandas transportadoras y soluciones logísticas, brindando asesoría personalizada y 
soluciones a medida para cada uno de nuestros clientes</p>
</div>

</div>
</div>
<div class="fourth-slide">
<div class="inner-div2">
<div class="nosotros-text2">
<p>VISIÓN</p>
</div>
<div class="nosotros-p5">
<p>Ser reconocidos a nivel nacional e internacional por nuestra 
    excelencia en el suministro de componentes para transmisión de potencia,
            acoples industriales, motorreductores, bandas transportadoras y 
            soluciones logísticas, ofreciendo un servicio integral y de calidad 
            para satisfacer las necesidades de nuestros clientes.</p>
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

.second-slide{
    padding: auto;
    margin-top: 30px;
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
    color: #4b4342;
    justify-content: center;
    text-align: center;
    font-size: 51px;
}

.nosotros-p2{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color:#4b4342;
    font-size: 24px;
}

.third-slide{
    background-image: linear-gradient(to right, rgb(0 0 0 / .8), rgb(0 0 0 / .7)), url(/img/slider4.jpg);
    padding: auto;
    margin-bottom: 30px;
            
}

.inner-div{
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    height: auto;
    vertical-align: baseline;
    margin-top: 30px;
    margin-bottom: 30px;
}

.nosotros-text3{
    display: flex;
    color: white;
    text-align: center;
    justify-content: center;
    text-align: center;
    font-size: 51px;
    margin-top: 30px;
}

.nosotros-p3{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color:white;
    font-size: 17px;
    margin-bottom: 30px;
}

.fourth-slide{
    padding: auto;
    margin-bottom: 30px;
            
}

.nosotros-p5{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color:#4b4342;
    font-size: 17px;
    margin-bottom: 30px;

}

@media (max-width: 768px) {
    .container-nos{
    display: flex;
    flex-direction: column;
    margin-top: 195px;
}

}


</style>