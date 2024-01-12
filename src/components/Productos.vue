
<script setup>
  import { MDBCol, MDBRow, MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, mdbRipple  } from "mdb-vue-ui-kit";
const vMdbRipple = mdbRipple
</script>

<template>
  <MDBRow :cols="['1','md-3']" class="g-4 animated-card">
    <MDBCol>
      <MDBCard class="hover-card">
      <a v-mdb-ripple="{ color: 'light' }">
        <MDBCardImg src="/img/correas.png" top alt="..."/>
      </a>
        <MDBCardBody>
          <MDBCardTitle>Correas</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            <br/>
            <br/>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard class="hover-card">
        <MDBCardImg src="/img/acoples.png" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Acoples industriales</MDBCardTitle>
          <MDBCardText>
            Acompañamiento profesional y especializado para la selección u homologación de acoples teniendo en cuenta torque, velocidad, ciclos de trabajo, precisión entre otros.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard class="hover-card">
        <MDBCardImg src="/img/chumaceras.png" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Chumaceras</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
            <br/>
            <br/>
            <br/>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     <MDBCol>
      <MDBCard class="hover-card">
        <MDBCardImg src="/img/poleas.png" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Poleas</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            <br/>
            <br/>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     <MDBCol>
      <MDBCard class="hover-card">
        <MDBCardImg src="/img/retenedor.png" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Retenedores</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            <br/>
            <br/>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard class="hover-card">
        <MDBCardImg src="/img/motorreductor.png" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Motorreductores</MDBCardTitle>
          <MDBCardText>
            Auditoria y análisis del estado actual de funcionamiento de sus equipos, homologación y repotenciar máquinas, suministro de repuestos para todas las marcas.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard class="hover-card">
        <MDBCardImg src="/img/bandas.png" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Bandas transportadoras</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            <br/>
            <br/>
            <br/>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard class="hover-card">
        <MDBCardImg src="/img/soluciones.png" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Soluciones logísticas</MDBCardTitle>
          <MDBCardText>
            Elaboración de propuestas, optimización de nuevas tecnologías, implementación de nuevas tecnologías, ejecución de proyectos a todo costo, elaboración de planos, homologar y repotenciar equipos.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard class="hover-card">
        <MDBCardImg src="/img/transmision.png" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Transmisión de potencia</MDBCardTitle>
          <MDBCardText>
            Suministro, fabricación e importación de componentes para la transmisión de potencia. Asesoría personalizada por nuestros asesores. Levantamiento de información en sitio.
            <br/>
            <br/>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</template>

<style scoped>
.hover-card:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}


</style>
