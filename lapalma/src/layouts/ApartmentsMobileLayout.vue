<template>
    <div>
        <div class="AML_firstDiv">
            <v-toolbar-title>La Palma Apartments 🌴</v-toolbar-title>
        </div>
        <div class="AML_secondDiv">
            <center>
                    <v-card elevation="11" outlined shaped tile class="AML_vueCard1" >
                        <v-card-title style="font-size: 15px">Apartment 1</v-card-title>
                        <center> 
                            <v-img src="../assets/apartmentspic1.jpg" style="width: 85%;"></v-img>
                        </center>
                        <div class="AML_iconsDiv1" style="margin-left: auto; margin-right: auto; margin-top: 20px; width: 85%;">
                            <v-container>
                                <v-row align="center">
                                    <v-col cols="6" class="d-flex align-center">
                                        <v-icon>mdi-wifi</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Wifi</span>
                                    </v-col>
                                    <v-col cols="6" class="d-flex align-center justify-end">
                                        <v-icon>mdi-parking</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Parking</span>
                                    </v-col>
                                </v-row>

                                <v-row align="center">
                                    <v-col cols="6" class="d-flex align-center">
                                        <v-icon>mdi-pool</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Pool</span>
                                    </v-col>
                                    <v-col cols="6" class="d-flex align-center justify-end">
                                        <v-icon>mdi-fridge</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Kitchen</span>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                        <center> 
                            <v-btn to="/apartment1" style="margin-top: 20px; margin-bottom: 20px; color: white;" color="lime">Apartment 1<v-icon>mdi-information</v-icon></v-btn>
                        </center>
                    </v-card>

                    <v-card elevation="11" outlined shaped tile class="AML_vueCard2" >
                        <v-card-title style="font-size: 15px">Apartment 2</v-card-title>
                        <center> 
                            <v-img src="../assets/apartmentspic1.jpg" style="width: 85%;"></v-img>
                        </center>
                        <div class="AML_iconsDiv1" style="margin-left: auto; margin-right: auto; margin-top: 20px; width: 85%;">
                            <v-container>
                                <v-row align="center">
                                    <v-col cols="6" class="d-flex align-center">
                                        <v-icon>mdi-wifi</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Wifi</span>
                                    </v-col>
                                    <v-col cols="6" class="d-flex align-center justify-end">
                                        <v-icon>mdi-parking</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Parking</span>
                                    </v-col>
                                </v-row>

                                <v-row align="center">
                                    <v-col cols="6" class="d-flex align-center">
                                        <v-icon>mdi-pool</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Pool</span>
                                    </v-col>
                                    <v-col cols="6" class="d-flex align-center justify-end">
                                        <v-icon>mdi-fridge</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Kitchen</span>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                        <center> 
                            <v-btn style="margin-top: 20px; margin-bottom: 20px; color: white;" color="lime">Apartment 2<v-icon>mdi-information</v-icon></v-btn>
                        </center>
                    </v-card>

                    <v-card elevation="11" outlined shaped tile class="AML_vueCard3" >
                        <v-card-title style="font-size: 15px">Apartment 3</v-card-title>
                        <center> 
                            <v-img src="../assets/apartmentspic1.jpg" style="width: 85%;"></v-img>
                        </center>
                        <div class="AML_iconsDiv1" style="margin-left: auto; margin-right: auto; margin-top: 20px; width: 85%;">
                            <v-container>
                                <v-row align="center">
                                    <v-col cols="6" class="d-flex align-center">
                                        <v-icon>mdi-wifi</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Wifi</span>
                                    </v-col>
                                    <v-col cols="6" class="d-flex align-center justify-end">
                                        <v-icon>mdi-parking</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Parking</span>
                                    </v-col>
                                </v-row>

                                <v-row align="center">
                                    <v-col cols="6" class="d-flex align-center">
                                        <v-icon>mdi-pool</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Pool</span>
                                    </v-col>
                                    <v-col cols="6" class="d-flex align-center justify-end">
                                        <v-icon>mdi-fridge</v-icon>
                                        <span class="ml-2" style="font-size: 13px;">Kitchen</span>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                        <center> 
                            <v-btn style="margin-top: 20px; margin-bottom: 20px; color:white" color="lime">Apartment 3<v-icon>mdi-information</v-icon></v-btn>
                        </center>
                    </v-card>
            </center>
        </div>
    </div>
</template>

<style>
.AML_firstDiv{
    margin-left: 0;
    padding: 0;
    width: 100%;
    height: 60px;
    background-color: #2c7ccc;
    display: grid;
    place-items: center;
    color: white;
    position: fixed;
    z-index: 2;
}
.AML_secondDiv{
    background-color: #F5ECD5;
    width: 100vw;
    height: auto;
    z-index: 0;
}
.AML_vueCard1{
    width:70%;
    height: auto;
    display: inline-block;
    margin-top: 100px;
    text-align: justify;
    z-index: 1;
}
.AML_vueCard2{
    width:70%;
    height: auto;
    display: inline-block;
    margin-top: 50px;
    text-align: justify;
    z-index: 1;
}
.AML_vueCard3{
    width:70%;
    height: auto;
    display: inline-block;
    margin-top: 50px;
    margin-bottom: 70px;
    text-align: justify;
    z-index: 1;
}
</style>
