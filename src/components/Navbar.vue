<script>
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem
    },
    setup() {
      const collapse4 = ref(false);
      const dropdown7 = ref(false);
      const collapse13 = ref(false);

      return {
        collapse4,
        dropdown7,
        collapse13
      }
    }
  };
</script>

<template>
<div className="dinamicBar-contenedor">
        <p className="dinamicBar-animacion">TODO LO RELACIONADO CON MANTENIMIENTO Y CONFIABILIDAD INDUSTRIAL.   LLEGAMOS A CUALQUIER ZONA DEL PAÍS. TODO LO RELACIONADO CON MANTENIMIENTO Y CONFIABILIDAD INDUSTRIAL.   LLEGAMOS A CUALQUIER ZONA DEL PAÍS. TODO LO RELACIONADO CON MANTENIMIENTO Y CONFIABILIDAD INDUSTRIAL.   LLEGAMOS A CUALQUIER ZONA DEL PAÍS. TODO LO RELACIONADO CON MANTENIMIENTO Y CONFIABILIDAD INDUSTRIAL.   LLEGAMOS A CUALQUIER ZONA DEL PAÍS.</p>
</div>
<MDBNavbar class="navbar" expand="lg" dark bg="dark" container>
    <MDBNavbarBrand class="logo" href="#">
    <img class="img-logo" style="background:white" src="/img/logo.svg" alt="imagen logo">
    <p style="color:white;font-size:8px">FERRO ELECTRICOS Y SUMINISTROS INDUSTRIALES DE COLOMBIA S.A.S<br/> NIT: 901672682-4 </p>
    </MDBNavbarBrand>

    <!-- Collapsible wrapper -->
    <MDBCollapse v-model="collapse4" id="navbarToggleExternalContent">
      <MDBNavbarNav right class="mb-2 mb-lg-0">
        <!-- Right links -->
        <MDBNavbarItem router to="/" active>
        INICIO
        </MDBNavbarItem>
        <MDBNavbarItem router to="nosotros" active>
            LA EMPRESA
        </MDBNavbarItem>
        <!-- Navbar dropdown -->
        <MDBDropdown class="nav-item" v-model="dropdown7" active style="color:white">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown7 = !dropdown7"
            >PRODUCTOS</MDBDropdownToggle
          >
          <MDBDropdownMenu>
            <MDBDropdownItem router to="correas">Correas</MDBDropdownItem>
            <MDBDropdownItem href="#">Acoples industriales</MDBDropdownItem>
            <MDBDropdownItem href="#">Chumaceras</MDBDropdownItem>
            <MDBDropdownItem router to="poleas">Poleas</MDBDropdownItem>
            <MDBDropdownItem href="#">Motorreductores</MDBDropdownItem>
            <MDBDropdownItem href="#">Bandas transportadoras</MDBDropdownItem>
            <MDBDropdownItem href="#">Soluciones logísticas</MDBDropdownItem>
            <MDBDropdownItem href="#">Transmisión de potencia</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBNavbarItem router to="servicios" active>
            SERVICIOS
        </MDBNavbarItem>
        <MDBNavbarItem href="#scroll" active>
          CONTACTENOS
        </MDBNavbarItem>
        <!-- Right links -->
      </MDBNavbarNav>
    </MDBCollapse>
  <MDBNavbar right dark bg="dark" container>
    <MDBNavbarToggler
      target="#navbarToggleExternalContent"
      @click="collapse4 = !collapse4"
    >
    </MDBNavbarToggler>
  </MDBNavbar>
    <!-- Collapsible wrapper -->
</MDBNavbar>
</template>

<style scoped>
.navbar{
    background-image: linear-gradient(to right, rgb(0 0 0 / .8), rgb(0 0 0 / .7)), url(/img/header2.jpg);
}
.logo{
    display: flex;
    flex-direction: column;
    align-content: center;
}

</style>