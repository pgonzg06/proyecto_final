<template>
  <v-container>
    <v-col>
        <v-card class="mx-auto" max-width="400">
          <div align="center">
             <v-img 
              width="200px"
              src="../assets/logo.png"
            >
            </v-img>
          </div>
          <v-card-text>
            <v-text-field 
              v-model="usuario"
              outlined
              clear-icon="mdi-close-circle"
              clearable
              label="Teléfono, usuario o correo electrónico"
              type="text"
              >
            </v-text-field>
            <v-text-field 
              v-model="contraseña"
              outlined
              clear-icon="mdi-close-circle"
              clearable
              label="Contraseña"
              type="password"
              
              >
            </v-text-field>
            <v-card-actions class="justify-center">
              <v-btn style="width:370px" color="blue" class="white--text" disabled>Iniciar sesión</v-btn>
            </v-card-actions>
           
         </v-card-text>
        
        <v-card-text align="center">
            <a class="font-weight-bold" href="" style="text-decoration:none">¿Has olvidado la contraseña?</a>
         </v-card-text>
          
        </v-card>
        </v-col>
        <v-col>
        <v-card class="mx-auto" max-width="400">
         <v-card-text align="center">
            ¿No tienes una cuenta? <a class="font-weight-bold"  href="" style="text-decoration:none">Regístrate</a>
         </v-card-text>
        </v-card>
        </v-col>

        
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

      tab: null,
      model: 1,
      contraseña: '',
      usuario: '',
     
    }),
  }
</script>
