<template>
<div id="app">
    <v-app id= "inspire">
        <v-content>
            <v-container class="mx-4">
                <v-layout align-center justify-center> 
                    <v-flex>
                        <v-card class="mx-auto" max-width="344">
                            <v-card-text>
                              <h1 class= "blue--text" align ="center" justify-center style = "font-family:arial;">FlashGram</h1>
                              <br>
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
                                <v-btn color="primary" style= "text-transform:capitalize; width:300px;">Siguiente </v-btn>
                                  
                                  <p align="justify" style = "width:300px;"> <br>Al registrarte, aceptas nuestras  <a href="https://help.instagram.com/581066165581870" >Condiciones</a>. Obtén más información sobre cómo recopilamos, usamos y compartimos tus datos en la <a href="https://help.instagram.com/519522125107875" >Política de datos</a>, así como el uso que hacemos de las cookies y tecnologías similares en la <a href="https://help.instagram.com/1896641480634370?ref=ig" >Política de cookies</a>.</p>
                                </div>
                            </v-card-text>
                        </v-card>

                    </v-flex>
                </v-layout>
                <br>
                <v-layout>
                  <v-flex>
                    <v-card class="mx-auto" max-width="344">
                          <v-card-text>
                            <div align="center">
                              <p>¿Tienes una cuenta? <a href="https://www.instagram.com/accounts/login/?hl=es&source=auth_switcher" >Inicia sesión</a></p>
                            </div>
                          </v-card-text>
                    </v-card >
                    <div id = "descargar" align="center">
                          <p> <br>Descargar app</p>
                          <img src="/apple.png" alt="">
                    </div>
                    <br>
                    <div align="center" >
                          <p class ="blue--text" align="justify" style = "width:300px;">INFORMACIÓN AYUDA PRENSA API EMPLEO PRIVACIDAD CONDICIONES UBICACIONES CUENTAS DESTACADAS HASHTAGS IDIOMA </p>
                          <p  class ="grey--text" align="justify" style = "width:300px;">© 2020 INSTAGRAM FROM FACEBOOK</p>
                          
                    </div>
                  </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>

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
        }
        
        
    }

}
</script>
<style scoped>
#o hr{ display:inline-block; }

</style>