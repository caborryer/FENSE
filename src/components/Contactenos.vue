<script>
  import {
    MDBInput,
    MDBCheckbox,
    MDBTextarea,
    MDBBtn,
  } from "mdb-vue-ui-kit";
  import { ref } from "vue";

  export default {
    components: {
      MDBInput,
      MDBCheckbox,
      MDBTextarea,
      MDBBtn,
    },
    setup() {
      const form6FirstName = ref("");
      const form6CompanyName = ref("");
      const form6Address = ref("");
      const form6Email = ref("");
      const form6Phone = ref("");
      const form6Info = ref("");
      const form6CreateCheckbox = ref(true);

      return {
        form6FirstName,
        form6CompanyName,
        form6Address,
        form6Email,
        form6Phone,
        form6Info,
        form6CreateCheckbox
      };
    },
  };
</script>

<template>
  <form class="form-container">
  <div class="form-tittle">
  <h2 class="text-center text-h4 font-weight-bold my 5" id="scroll">CONTÁCTANOS</h2>
  </div>
  <br>
    <!-- 2 column grid layout with text inputs for the first and last names -->
   <MDBInput
      type="text"
      label="Nombre completo"
      id="form6CompanyName"
      v-model="form6CompanyName"
      wrapperClass="mb-4"
    />

    <!-- Text input -->
    <MDBInput
      type="text"
      label="Nombre de la empresa"
      id="form6CompanyName"
      v-model="form6CompanyName"
      wrapperClass="mb-4"
    />

    <!-- Text input -->
    <MDBInput
      type="text"
      label="Cargo"
      id="form6Address"
      v-model="form6Address"
      wrapperClass="mb-4"
    />

     <MDBInput
      type="text"
      label="Teléfono de contacto"
      id="form6Address"
      v-model="form6Address"
      wrapperClass="mb-4"
    />

    <!-- Email input -->
    <MDBInput
      type="email"
      label="Correo"
      id="form6Email"
      v-model="form6Email"
      wrapperClass="mb-4"
    />

    <!-- Message input -->
    <MDBTextarea
      label="Escriba su mensaje"
      id="form6Info"
      v-model="form6Info"
      wrapperClass="mb-4"
    />

    <!-- Submit button -->
    <MDBBtn color="primary" block class="mb-4">
      Enviar correo electrónico
    </MDBBtn>
  </form>
</template>

<style scoped>
.form-container {
  background-color: #f0f0f0; /* Color gris del fondo */
  padding: 20px; /* Ajusta el espacio interno según sea necesario */
  border-radius: 10px; /* Ajusta el radio de borde según sea necesario */
  margin-top: 30px;
  margin-bottom: 30px;
}

.form-tittle{
    display: flex;
    justify-content: center;
}
</style>