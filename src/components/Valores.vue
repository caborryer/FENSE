<script>
  import { MDBBtn } from "mdb-vue-ui-kit";

  export default {
    components: {
      MDBBtn
    }
  };
</script>
<template>
    <div class="nosotros-container-valores">
          <div class="nosotros-container-valores-item">
            <img src="/img/estandares.png"  height="120" width="122" alt="Imagen 1"/>
            <div class="containerimg">
             <p>ALTOS ESTANDARES</p>
            </div>
          </div>
        <div class="nosotros-container-valores-item">
            <img src="/img/trabajo.png" height="120" width="122" alt="Imagen 2"/>
            <div class="containerimg">
            <p>TRABAJO DURO</p>
            </div>
        </div>
        <div class="nosotros-container-valores-item">
            <img src="/img/responsabilidad.png" height="120" width="122" alt="Imagen 3"/>
            <div class="containerimg">
            <p>RESPONSABILIDAD</p>
            </div>
        </div>
        <div class="nosotros-container-valores-item">
            <img src="/img/compromiso.png" height="120" width="122" alt="Imagen 4"/>
            <div class="containerimg">
             <p>COMPROMISO</p>
            </div>
        </div>
        </div>
        
        <div class="center-button">
            <MDBBtn tag="a" color="dark" href="https://www.instagram.com/fensi_col/?igshid=MzRlODBiNWFlZA%3D%3D">Conócenos Mejor</MDBBtn>
        </div>
</template>

<style scoped>
.nosotros-container-valores {
    display: flex;
    justify-content: space-between;
    margin-top: 104px;
  }
  
.nosotros-container-valores-item {
    text-align: center;
    width: 25%; /* Distribuir el espacio en 4 columnas iguales */
    padding: 10px;
    box-sizing: border-box;
}

.containerimg{
    margin-top: 10px;
}

.center-button {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* Ajusta el espacio superior según sea necesario */
}

@media (max-width: 768px) {
    /* Cambiar a alineación vertical en dispositivos pequeños */
    .nosotros-container-valores {
      flex-direction: column;
      align-items: center;
    }
    .nosotros-container-valores-item {
      width: 100%;
    }
  }
</style>