<template>
    <div class="registro">
      <v-card  >
        <!-- <v-window v-model="step"> -->
          <!--  <v-window-item :value="1"> -->
                  <v-app id= "inspire">
                      <v-content>
                          <v-container class="mx-4">
                              <v-layout align-center justify-center> 
                                  <v-flex>
                                  
                                          <v-card-text>
                                            <div align="center">
                                                <v-img 
                                                  width="200px"
                                                  src="../assets/logo.png"
                                                >
                                                </v-img>
                                            </div>
                                      
                                            <p  class ="grey--text" align="center" justify-center style = "font-family: arial; width:300px"> <b>Regístrate para ver fotos y videos de tus amigos.</b></p>
                                              <br>
                                              <div  id="o" align="center">
                                                <h3> <hr style = "width:100px;"> O  <hr  style = "width:100px"></h3>
                                              </div>
                                              <br>
                                              <v-layout align-center justify-center> 
                                                <v-form>
                                                  <v-card style = "width:300px; ">
                                                    <v-text-field name="correo" label = "Correo electrónico" type="text" single-line outlined  ></v-text-field>
                                                  </v-card>
                                                  <v-card style = "width:300px;">
                                                    <v-text-field name="nombre" label = "Nombre completo" type="text" single-line outlined ></v-text-field>
                                                  </v-card>
                                                  <v-card style = "width:300px;">
                                                    <v-text-field name="login" label ="Nombre de usuario" type="text" single-line outlined ></v-text-field>
                                                  </v-card>
                                                  <v-card style = "width:300px;"> 
                                                    <v-text-field id="password"  name="password" label = "Contraseña" type="password" single-line outlined ></v-text-field>
                                                  </v-card>
                                                </v-form>
                                              </v-layout>
                                          
                                              <div align="center">
                                                
                                                <p align="justify" style = "width:300px;"> <br>Al registrarte, aceptas nuestras  <a href="https://help.instagram.com/581066165581870" >Condiciones</a>. Obtén más información sobre cómo recopilamos, usamos y compartimos tus datos en la <a href="https://help.instagram.com/519522125107875" >Política de datos</a>, así como el uso que hacemos de las cookies y tecnologías similares en la <a href="https://help.instagram.com/1896641480634370?ref=ig" >Política de cookies</a>.</p>
                                              </div>

                                          <div id = "descargar" align="center">
                                            <p> <br>Descargar app</p>
                                            <img src="/apple.png" alt="">
                                          </div>
                                            <br>
                                          <div align="center" >
                                            <p class ="blue--text" align="justify" style = "width:300px;">INFORMACIÓN AYUDA PRENSA API EMPLEO PRIVACIDAD CONDICIONES UBICACIONES CUENTAS DESTACADAS HASHTAGS IDIOMA </p>
                                            <p  class ="grey--text" align="justify" style = "width:300px;">© 2020 INSTAGRAM FROM FACEBOOK</p>
                                            
                                          </div>

                                          </v-card-text>
                                    
                                
                                  
                                </v-flex>
                              </v-layout>
                          </v-container>
                      </v-content>
                  </v-app>

              
         <!-- </v-window-item>
          <v-window-item :value="2">
            <div class="pa-4 text-center">
                <v-img
                  class="mb-4"
                  contain
                  height="128"
                  src="../assets/logo.png"
                ></v-img>
                <h3 class="title font-weight-light mb-2">Bienvenid@ a FlashGram </h3>
                <span class="caption grey--text">Gracias por registrate!</span>
              </div>
          </v-window-item>
        </v-window> 

        <v-card-actions>
          <v-btn
            :disabled="step === 1"
            text
            @click="step--"
          >
            Back
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="step === 2"
            color="primary"
            depressed
            @click="step++"
          >
            Next
          </v-btn>
        </v-card-actions> -->


     </v-card>
  </div>
</template>

<script>
export default {
  
    data(){
        return{
            correo:"Número de celular o correo electrónico",
            nobre:"Nombre completo",
            login:"Nombre de usuario",
            name: "",
            password:"Contraseña",
             step: 1,
        }  
    },
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },

}
</script>
<style scoped>
#o hr{ display:inline-block; }

</style>