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
                            <v-img src="../assets/apartment1p1.jpg" style="width: 85%;" @click="openGallery(1, 'Apartment 1')"></v-img>
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
                            <v-img src="../assets/apartment2p1.jpg" style="width: 85%;" @click="openGallery(2, 'Apartment 2')"></v-img>
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
                            <v-btn to="/apartment2" style="margin-top: 20px; margin-bottom: 20px; color: white;" color="lime">Apartment 2<v-icon>mdi-information</v-icon></v-btn>
                        </center>
                    </v-card>

                    <v-card elevation="11" outlined shaped tile class="AML_vueCard3" >
                        <v-card-title style="font-size: 15px">Apartment 3</v-card-title>
                        <center> 
                            <v-img src="../assets/apartment3p1.jpg" style="width: 85%;" @click="openGallery(3, 'Apartment 3')"></v-img>
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
                            <v-btn to="/apartment3" style="margin-top: 20px; margin-bottom: 20px; color:white" color="lime">Apartment 3<v-icon>mdi-information</v-icon></v-btn>
                        </center>
                    </v-card>
            </center>
        </div>
        <v-dialog v-if="selectedImages.length" v-model="showGallery" :max-width="$vuetify.breakpoint.smAndDown ? '90vw' : '600px'">
                    <v-card>
                        <v-card-title>{{ galleryTitle }}</v-card-title>
                        <v-card-text>
                            <v-carousel v-model="currentImage" :height="$vuetify.breakpoint.smAndDown ? '250px' : '450px'">
                                <v-carousel-item 
                                    v-for="(img, index) in selectedImages" 
                                    :key="index" 
                                    :src="img">
                                </v-carousel-item>
                            </v-carousel>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="showGallery = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      showGallery: false,
      currentImage: 0,
      galleryTitle: "",
      selectedImages: [],

      // 📷 Svaka kartica ima svoju galeriju
      galleries: [
        [ require('@/assets/apartmentspic1.jpg'), require('@/assets/apartmentspic3.jpg'), require('@/assets/apartmentspic6.jpg'), require('@/assets/apartmentspic8.jpg'), require('@/assets/apartmentspic9.jpg')],
        [ require('@/assets/apartment1p1.jpg'), require('@/assets/apartment1p2.jpg'), require('@/assets/apartment1p3.jpg'), require('@/assets/apartment1p4.jpg'), require('@/assets/apartment1p5.jpg') ],
        [ require('@/assets/apartment2p1.jpg'), require('@/assets/apartment2p2.jpg') ],
        [ require('@/assets/apartment3p1.jpg'), require('@/assets/apartment3p2.jpg'), require('@/assets/apartment3p3.jpg'), require('@/assets/apartment3p4.jpg'), require('@/assets/apartment3p5.jpg'), require('@/assets/apartment3p6.jpg') ],
        [ require('@/assets/rtkamenjak1.jpg'), require('@/assets/rtkamenjak2.jpg'), require('@/assets/rtkamenjak3.jpg'), require('@/assets/rtkamenjak4.jpeg') ],
        [ require('@/assets/rovinj1.jpg'), require('@/assets/rovinj2.jpg'), require('@/assets/rovinj3.jpg'), require('@/assets/rovinj4.jpeg') ],
        [ require('@/assets/limskikanal1.jpg'), require('@/assets/limskikanal2.jpg'), require('@/assets/limskikanal3.jpg'), require('@/assets/limskikanal4.jpg') ],
      ]
    };
  },
  methods: {
    openGallery(index, title) {
      console.log("Otvaram galeriju:", title);
      console.log("Slike:", this.galleries[index]);

      this.currentImage = 0;
      this.selectedImages = this.galleries[index];
      this.galleryTitle = title;
      this.showGallery = true;
    }
  }
};
</script>

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
