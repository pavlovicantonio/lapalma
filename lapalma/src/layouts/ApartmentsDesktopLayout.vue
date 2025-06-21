<template>
    <div class="none">
        <center>
        <div class="padmarg"></div>

        <!-- 1️⃣ PRVA GALERIJA -->
        <v-card elevation="11" outlined shaped tile class="sirinaVueCards1" :style="{ zIndex: zIndex1}">
            <v-card-title>Istria Bay</v-card-title>
            <v-container>
                <v-container>
    <v-row>
      <!-- Prva slika lijevo, najveća -->
      <v-col cols="12" md="6">
        <v-img
          src="../assets/apartment1p1.jpg"
          alt="Large Image"
          height="300px"
          width="300px"
          class="clickable-image"
          @click="openGallery(1, 'Istria Bay')"
        ></v-img>
      </v-col>

      <!-- Dvije manje slike desno, jedna ispod druge -->
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-img
              src="../assets/apartment1p2.jpg"
              alt="Small Image 1"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(1, 'Istria Bay')"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <v-img
              src="../assets/apartment1p3.jpg"
              alt="Small Image 2"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(1, 'Istria Bay')"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
            </v-container>
           <v-container>
                <v-row align="center">
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-wifi</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Wifi</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-parking</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Parking</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-television</v-icon>
                        <span class="ml-2" style="font-size: 13px;">TV</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-toilet</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Toilet</span>
                    </v-col>
                </v-row>

                <v-row align="center">
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-pool</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Pool</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-fridge</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Kitchen</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-dog</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Pets</span>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                        <v-icon>mdi-grill</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Grill</span>
                    </v-col>
                </v-row>
             </v-container>
             <center>
             <v-btn @click="swapZIndex()" color="lime" style="color: white; margin-top: 20px; margin-bottom: 20px;">Istria Bay <v-icon>mdi-information</v-icon></v-btn>
             </center>
        </v-card>
        <!-- INFO ZA PRVI APARTMAN -->
        <v-card class="sirinaVueCards1-1" :style="{ zIndex: zIndex2}">
            <v-card-title>Istria Bay INFO</v-card-title>
            <v-container style="text-align: left;">
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Size:</b> 1 Bedroom, 1 Bathroom</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Amenities:</b> Wi-Fi, Air Conditioning, Heating, TV, Kitchen</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Outdoor:</b> Balcony, Terrace, Garden, BBQ</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>View:</b> Sea view, Garden view, City view</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Parking:</b> Private parking, Free street parking</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Pet Policy:</b> Pets allowed</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Nearby:</b> Beach 200m, Supermarket 100m, Restaurant 50m</v-card-text>
                    </v-container>
                    <v-container style="margin-top: 35px;">
                        <v-card-text>For more information, feel free to contact us via:</v-card-text>
                       <center>
                            <v-icon @click="openWhatsApp(1)" class="icons" size="36" style="padding: 20px;">mdi-whatsapp</v-icon>
                            <v-icon @click="sendGmail(1)" class="icons" size="36" style="padding: 20px;">mdi-email-outline</v-icon>
                            <a href="https://www.instagram.com/croatiadreamholidayy/" target="_blank"><v-icon class="icons" size="36" style="padding: 20px;">mdi-instagram</v-icon></a>
                            <v-icon class="icons" size="36" style="padding: 20px;">mdi-facebook</v-icon>
                            <br>
                            <v-btn @click="swapZIndex()" color="red" style="color: white; margin-top: 10px; margin-bottom: 10px;">BACK</v-btn>
                       </center> 
                    </v-container>
        </v-card>

        <v-card elevation="11" outlined shaped tile class="sirinaVueCards2" :style="{ zIndex: zIndex3}">
            <v-card-title>Sunset Drift</v-card-title>
            <v-container>
                <v-container>
    <v-row>
      <!-- Prva slika lijevo, najveća -->
      <v-col cols="12" md="6">
        <v-img
          src="../assets/apartment2p1.jpg"
          alt="Large Image"
          height="300px"
          width="300px"
          class="clickable-image"
          @click="openGallery(2, 'Sunset Drift')"
        ></v-img>
      </v-col>

      <!-- Dvije manje slike desno, jedna ispod druge -->
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-img
              src="../assets/apartment2p2.jpg"
              alt="Small Image 1"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(2, 'Sunset Drift')"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <v-img
              src="../assets/apartment2p3.jpg"
              alt="Small Image 2"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(2, 'Sunset Drift')"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
            </v-container>
           <v-container>
                <v-row align="center">
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-wifi</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Wifi</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-parking</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Parking</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-television</v-icon>
                        <span class="ml-2" style="font-size: 13px;">TV</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-toilet</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Toilet</span>
                    </v-col>
                </v-row>

                <v-row align="center">
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-pool</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Pool</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-fridge</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Kitchen</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-dog</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Pets</span>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                        <v-icon>mdi-grill</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Grill</span>
                    </v-col>
                </v-row>
             </v-container>
             <center>
             <v-btn @click="swapZIndex2()" color="lime" style="color: white; margin-top: 20px; margin-bottom: 20px;">Sunset Drift <v-icon>mdi-information</v-icon></v-btn>
             </center>
        </v-card>
        <!--INFO ZA DRUGI APARTMAN -->
        <v-card class="sirinaVueCards1-2" :style="{ zIndex: zIndex4}">
            <v-card-title>Sunset Drift INFO</v-card-title>
            <v-container style="text-align: left;">
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Size:</b> 1 Bedroom, 1 Bathroom</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Amenities:</b> Wi-Fi, Air Conditioning, Heating, TV, Kitchen</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Outdoor:</b> Terrace, Garden, BBQ</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>View:</b> Church view, Garden view, City view</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Parking:</b> Private parking, Free street parking</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Pet Policy:</b> Pets allowed</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Nearby:</b> Beach 200m, Supermarket 100m, Restaurant 100m</v-card-text>
                    </v-container>
                    <v-container style="margin-top: 35px;">
                        <v-card-text>For more information, feel free to contact us via:</v-card-text>
                       <center>
                            <v-icon @click="openWhatsApp(2)" class="icons" size="36" style="padding: 20px;">mdi-whatsapp</v-icon>
                            <v-icon @click="sendGmail(2)" class="icons" size="36" style="padding: 20px;">mdi-email-outline</v-icon>
                            <a href="https://www.instagram.com/croatiadreamholidayy/" target="_blank"><v-icon class="icons" size="36" style="padding: 20px;">mdi-instagram</v-icon></a>
                            <v-icon class="icons" size="36" style="padding: 20px;">mdi-facebook</v-icon>
                            <br>
                            <v-btn @click="swapZIndex2()" color="red" style="color: white; margin-top: 10px; margin-bottom: 10px;">BACK</v-btn>
                       </center> 
                    </v-container>
        </v-card>

        <v-card elevation="11" outlined shaped tile class="sirinaVueCards3" :style="{ zIndex: zIndex5}">
            <v-card-title>Adriatic Dawn</v-card-title>
            <v-container>
                <v-container>
    <v-row>
    
      <v-col cols="12" md="6">
        <v-img
          src="../assets/apartment3p1.jpg"
          alt="Large Image"
          height="300px"
          width="300px"
          class="clickable-image"
          @click="openGallery(3, 'Adriatic Dawn')"
        ></v-img>
      </v-col>

      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-img
              src="../assets/apartment3p2.jpg"
              alt="Small Image 1"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(3, 'Adriatic Dawn')"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <v-img
              src="../assets/apartment3p3.jpg"
              alt="Small Image 2"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(3, 'Adriatic Dawn')"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
            </v-container>
           <v-container>
                <v-row align="center">
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-wifi</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Wifi</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-parking</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Parking</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-television</v-icon>
                        <span class="ml-2" style="font-size: 13px;">TV</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-toilet</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Toilet</span>
                    </v-col>
                </v-row>

                <v-row align="center">
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-pool</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Pool</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-fridge</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Kitchen</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-dog</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Pets</span>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                        <v-icon>mdi-grill</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Grill</span>
                    </v-col>
                </v-row>
             </v-container>
             <center>
             <v-btn @click="swapZIndex3()" color="lime" style="color: white; margin-top: 20px; margin-bottom: 20px;">Adriatic Dawn <v-icon>mdi-information</v-icon></v-btn>
             </center>
        </v-card>
        <v-card class="sirinaVueCards1-3" :style="{ zIndex: zIndex6}">
            <v-card-title>Adriatic Dawn INFO</v-card-title>
            <v-container style="text-align: left;">
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Size:</b> 1 Bedroom, 1 Bathroom</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Amenities:</b> Wi-Fi, Air Conditioning, Heating, TV, Kitchen</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Outdoor:</b> Balcony, Terrace, Garden, BBQ</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>View:</b> Sea view, Garden view, City view</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Parking:</b> Private parking, Free street parking</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Pet Policy:</b> Pets allowed</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Nearby:</b> Beach 200m, Supermarket 100m, Restaurant 10m</v-card-text>
                    </v-container>
                    <v-container style="margin-top: 35px;">
                        <v-card-text>For more information, feel free to contact us via:</v-card-text>
                       <center>
                            <v-icon @click="openWhatsApp(3)" class="icons" size="36" style="padding: 20px;">mdi-whatsapp</v-icon>
                            <v-icon @click="sendGmail(3)" class="icons" size="36" style="padding: 20px;">mdi-email-outline</v-icon>
                            <a href="https://www.instagram.com/croatiadreamholidayy/" target="_blank"><v-icon class="icons" size="36" style="padding: 20px;">mdi-instagram</v-icon></a>
                            <v-icon class="icons" size="36" style="padding: 20px;">mdi-facebook</v-icon>
                            <br>
                            <v-btn @click="swapZIndex3()" color="red" style="color: white; margin-top: 10px; margin-bottom: 10px;">BACK</v-btn>
                       </center> 
                    </v-container>
        </v-card>


        <v-card elevation="11" outlined shaped tile class="sirinaVueCards4" :style="{ zIndex: zIndex7}">
            <v-card-title>Blue Horizon</v-card-title>
            <v-container>
                <v-container>
    <v-row>
    
      <v-col cols="12" md="6">
        <v-img
          src="../assets/apartment4p1.jpg"
          alt="Large Image"
          height="300px"
          width="300px"
          class="clickable-image"
          @click="openGallery(4, 'Blue Horizon')"
        ></v-img>
      </v-col>

      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-img
              src="../assets/apartment4p2.jpg"
              alt="Small Image 1"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(4, 'Blue Horizon')"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <v-img
              src="../assets/apartment4p3.jpg"
              alt="Small Image 2"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(4, 'Blue Horizon')"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
            </v-container>
           <v-container>
                <v-row align="center">
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-wifi</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Wifi</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-parking</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Parking</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-television</v-icon>
                        <span class="ml-2" style="font-size: 13px;">TV</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-toilet</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Toilet</span>
                    </v-col>
                </v-row>

                <v-row align="center">
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-pool</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Pool</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-fridge</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Kitchen</span>
                    </v-col>
                    <v-col cols="3" class="d-flex align-center">
                        <v-icon>mdi-dog</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Pets</span>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                        <v-icon>mdi-grill</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Grill</span>
                    </v-col>
                </v-row>
             </v-container>
             <center>
             <v-btn @click="swapZIndex4()" color="lime" style="color: white; margin-top: 20px; margin-bottom: 20px;">Blue Horizon <v-icon>mdi-information</v-icon></v-btn>
             </center>
        </v-card>

        <v-card class="sirinaVueCards1-4" :style="{ zIndex: zIndex8}">
            <v-card-title>Blue Horizon INFO</v-card-title>
            <v-container style="text-align: left;">
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Size:</b> 1 Bedroom, 1 Bathroom</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Amenities:</b> Wi-Fi, Air Conditioning, Heating, TV, Kitchen</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Outdoor:</b> Balcony, Terrace, Garden, BBQ</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>View:</b> Sea view, Garden view, City view</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Parking:</b> Private parking, Free street parking</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Pet Policy:</b> Pets allowed</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Nearby:</b> Beach 200m, Supermarket 100m, Restaurant 100m</v-card-text>
                    </v-container>
                    <v-container style="margin-top: 35px;">
                        <v-card-text>For more information, feel free to contact us via:</v-card-text>
                       <center>
                            <v-icon @click="openWhatsApp(4)" class="icons" size="36" style="padding: 20px;">mdi-whatsapp</v-icon>
                            <v-icon @click="sendGmail(4)" class="icons" size="36" style="padding: 20px;">mdi-email-outline</v-icon>
                            <a href="https://www.instagram.com/croatiadreamholidayy/" target="_blank"><v-icon class="icons" size="36" style="padding: 20px;">mdi-instagram</v-icon></a>
                            <v-icon class="icons" size="36" style="padding: 20px;">mdi-facebook</v-icon>
                            <br>
                            <v-btn @click="swapZIndex4()" color="red" style="color: white; margin-top: 10px; margin-bottom: 10px;">BACK</v-btn>
                       </center> 
                    </v-container>
        </v-card>

        <!-- 🔍 GALERIJA -->
        <v-dialog v-if="selectedImages.length" v-model="showGallery" max-width="600px">
            <v-card>
                <v-card-title>{{ galleryTitle }}</v-card-title>
                <v-card-text>
                    <v-carousel v-model="currentImage" hide-delimiters>
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
        <div></div>
        </center>
        <v-footer color="#F2EFE7" padless class="pa-6">
    <v-container>
      <v-row align="center" justify="space-between">
        <!-- Lijevo: Logo + kontakt -->
        <v-col cols="12" md="4" class="text-left">
          <div class="d-flex align-center mb-2">
            <h3 class="mb-0" style="color:#1976d2;">La Palma Apartments</h3>
            <v-img
              src="@/assets/palm.png"
              alt="La Palma Logo"
              max-width="25"
              class="mr-2"
              style="margin-left: 5px;"
            ></v-img>
          </div>
          <div style="color: #333;">
            +393279431662 <br>  
            croatiavacation05@gmail.com <br>
            Pula, Croatia<br />
          </div>
        </v-col>

        <!-- Sredina: copyright -->
        <v-col cols="12" md="4" class="text-center mt-4 mt-md-0">
          <div style="color:#333;">
            © {{ new Date().getFullYear() }} La Palma Apartments<br />
            Website created by <strong style="color: #1976d2;"><a href="https://apwebing.netlify.app" target="_blank">APWebing</a></strong>
          </div>
        </v-col>

        <!-- Desno: društvene mreže -->
        <v-col cols="12" md="4" class="text-right mt-4 mt-md-0">
          <v-btn icon href="https://www.facebook.com/profile.php?id=61575127426928" target="_blank">
            <v-icon color="#1976d2">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://www.instagram.com/croatiadreamholidayy/" target="_blank">
            <v-icon color="#1976d2">mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon @click="openWhatsApp2()" target="_blank">
            <v-icon color="#1976d2">mdi-whatsapp</v-icon>
          </v-btn>
          <v-btn icon @click="sendGmail1()" target="_blank">
            <v-icon color="#1976d2">mdi-gmail</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      expanded1: false,
      expanded2: false,
      expanded3: false,
      showGallery: false,
      zIndex1: 1,
      zIndex2: 0,
      zIndex3: 3,
      zIndex4: 2,
      zIndex5: 5,
      zIndex6: 4,
      zIndex7: 7,
      zIndex8: 6,
      currentImage: 0,
      galleryTitle: "",
      selectedImages: [],
      apartmentNames: {
        1: "Istria Bay Apartment",
        2: "Sunset Drift Apartment",
        3: "Adriatic Dawn Apartment",
        4: "Blue Horizon Apartment"
      },
      // 📷 Svaka kartica ima svoju galeriju
      galleries: [
        [ require('@/assets/apartmentspic3.jpg'), require('@/assets/apartmentspic10.jpg'), require('@/assets/apartmentspic1.jpg'), require('@/assets/lapalmaapartments1.jpg'), require('@/assets/apartmentspic11.jpg'), require('@/assets/apartmentspic8.jpg'), require('@/assets/apartmentspic6.jpg'), require('@/assets/apartmentspic12.jpg'),  require('@/assets/lapalmaapartments3.jpg'), require('@/assets/lapalmaapartments5.jpg'), require('@/assets/apartmentspic9.jpg')],
        [ require('@/assets/apartment1p1.jpg'), require('@/assets/apartment1p2.jpg'), require('@/assets/apartment1p3.jpg'), require('@/assets/apartment1p4.jpg'), require('@/assets/apartment1p5.jpg'), require('@/assets/apartment1p6.jpg') ],
        [ require('@/assets/apartment2p1.jpg'), require('@/assets/apartment2p2.jpg'), require('@/assets/apartment2p3.jpg'), require('@/assets/apartment2p4.jpg') ],
        [ require('@/assets/apartment3p1.jpg'), require('@/assets/apartment3p5.jpg'), require('@/assets/apartment3p3.jpg'), require('@/assets/apartment3p4.jpg'), require('@/assets/apartment3p6.jpg'), require('@/assets/apartment3p7.jpg'), require('@/assets/apartment3p8.jpg') ],
        [ require('@/assets/apartment4p1.jpg'), require('@/assets/apartment4p2.jpg'), require('@/assets/apartment4p3.jpg'), require('@/assets/apartment4p4.jpg'), require('@/assets/apartment4p6.jpeg'),require('@/assets/apartment4p5.jpg')],
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
    },

    swapZIndex() {
      // Zamjena z-index vrijednosti
      if (this.zIndex1 > this.zIndex2) {
        this.zIndex1 -= 1;
        this.zIndex2 += 1;
      } else {
        this.zIndex1 += 1;
        this.zIndex2 -= 1;
      }
    },
    swapZIndex2() {
      // Zamjena z-index vrijednosti
      if (this.zIndex3 > this.zIndex4) {
        this.zIndex3 -= 1;
        this.zIndex4 += 1;
      } else {
        this.zIndex3 += 1;
        this.zIndex4 -= 1;
      }
    },
    swapZIndex3() {
      // Zamjena z-index vrijednosti
      if (this.zIndex5 > this.zIndex6) {
        this.zIndex5 -= 1;
        this.zIndex6 += 1;
      } else {
        this.zIndex5 += 1;
        this.zIndex6 -= 1;
      }
    },
    swapZIndex4() {
      // Zamjena z-index vrijednosti
      if (this.zIndex7 > this.zIndex8) {
        this.zIndex7 -= 1;
        this.zIndex8 += 1;
      } else {
        this.zIndex7 += 1;
        this.zIndex8 -= 1;
      }
    },
    openWhatsApp(apartmentNumber) {
      const phoneNumber = "+393279431662"; // bez + znaka
      const apartmentName = this.apartmentNames[apartmentNumber] || `Apartment ${apartmentNumber}`;
      const message = `I am interested in apartment ${apartmentName}!`;
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(url, "_blank");
    },

    openWhatsApp2() {
      const phoneNumber = "+393279431662";
      const message = `I%20am%20interested%20in%20your%20apartments!`;
      const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.open(url, "_blank");
    },
    sendGmail(apartmentNumber) {
      const email = "croatiavacation05@gmail.com";
      const apartmentName = this.apartmentNames[apartmentNumber] || `Apartment ${apartmentNumber}`;
      const subject = `Inquiry about Apartment ${apartmentName}`;
      const body = `I am interested in ${apartmentName}! Please send me more information.`;
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, "_blank");
    },
    sendGmail1() {
      const email = "croatiavacation05@gmail.com";
      const subject = `Inquiry about Apartments!`;
      const body = `I am interested in your apartments! Please send me more information.`;
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, "_blank");
    },
  }
}
</script>

<style>
/* Klikalna slika */
.clickable-image {
    cursor: pointer;
    transition: transform 0.2s;
}

.clickable-image:hover {
    transform: scale(1.05);
}

.sirinaVueCards1, .sirinaVueCards2 {
    margin-top: 30px;
    width: 500px;
    text-align: justify;
    padding: 15px;
}
.sirinaVueCards2{
    position: relative;
    bottom: 570px;
}
.sirinaVueCards3{
    width: 500px;
    margin-top: -600px;
    margin-bottom: 50px;
}

.sirinaVueCards4{
    width: 500px;
    margin-bottom: 50px;
    margin-top: 80px;
}

.sirinaVueCards1-1{
    padding: 15px;
    width: 500px;
    height: 625px;
    position: relative;
    bottom: 625px;
}
.sirinaVueCards1-2{
    padding: 15px;
    width: 500px;
    height: 625px;
    position: relative;
    margin-top: -515px;
    bottom: 680px;
}
.sirinaVueCards1-3{
    padding: 15px;
    width: 500px;
    height: 625px;
    position: relative;
    margin-top: -675px;
    margin-bottom: 30px;
}
.sirinaVueCards1-4{
    padding: 15px;
    width: 500px;
    height: 625px;
    margin-top: -675px;
    margin-bottom: 60px;
}
.none {
    background-image: url(../assets/backgroundimage.jpg);
    background-attachment: fixed;
} 

.padmarg {
    height: 80px;
}
</style>

