
<script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-vue-ui-kit';

export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon
  },
};
</script>
<template>
  <MDBFooter bg="dark" :text="['center', 'white']">
    <!-- Grid container -->
    <MDBContainer class="p-4 pb-0">
    <h2 style="color:white">Síguenos</h2>
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a class="m-1" href="https://api.whatsapp.com/send?phone=573106052945" role="button" style="color: rgb(37, 211, 102);">
        <MDBIcon iconStyle="fab" icon="whatsapp" size="lg"></MDBIcon>
        </a>
        <!-- <MDBBtn
          tag="a"
          outline="light"
          href="https://api.whatsapp.com/send?phone=573106052945"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="whatsapp"></MDBIcon>
        </MDBBtn> -->
        <!-- Google -->
        <a class="m-1" href="ventas@fensicol.com" role="button" style="color: rgb(221, 75, 57);">
        <MDBIcon iconStyle="fab" icon="google" size="lg"></MDBIcon>
        </a>
        <!-- <MDBBtn
          tag="a"
          outline="light"
          href="ventas@fensicol.com"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="google"></MDBIcon>
        </MDBBtn> -->
        <!-- Instagram -->
        <a class="m-1" href="https://www.instagram.com/fensi_col/?igshid=MzRlODBiNWFlZA%3D%3D" role="button" style="color: rgb(172, 43, 172);">
        <MDBIcon iconStyle="fab" icon="instagram" size="lg"></MDBIcon>
        </a>
        <!-- <MDBBtn
          tag="a"
          outline="light"
          href="https://www.instagram.com/fensi_col/?igshid=MzRlODBiNWFlZA%3D%3D"
          floating
          class="m-1"
        >
          <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
        </MDBBtn> -->
      </section>
      <p><i class="fas fa-home me-3"></i>Cll 61 No. 56-51 Medellín · Colombia</p>
      <p><i class="fas fa-home me-3"></i>Cra 36 No. 8-68 Pasto · Colombia</p>
      <!-- Section: Social media -->
    </MDBContainer>
    <!-- Grid container -->
    <!-- Copyright -->
    <div
      class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2024 Copyright:
      <a class="text-white" href=""
        >FENSI</a
      >
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>