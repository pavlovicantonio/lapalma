<template>
    <div class="none">
        <center>
        <div class="padmarg"></div>

        <!-- 1️⃣ PRVA GALERIJA -->
        <v-card elevation="11" outlined shaped tile class="sirinaVueCards1" :style="{ zIndex: zIndex1}">
            <v-card-title>Apartment 1</v-card-title>
            <v-container>
                <v-container>
    <v-row>
      <!-- Prva slika lijevo, najveća -->
      <v-col cols="12" md="6">
        <v-img
          src="https://picsum.photos/300"
          alt="Large Image"
          height="300px"
          width="300px"
          class="clickable-image"
          @click="openGallery(1, 'Apartment 1')"
        ></v-img>
      </v-col>

      <!-- Dvije manje slike desno, jedna ispod druge -->
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-img
              src="https://picsum.photos/300/150"
              alt="Small Image 1"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(1, 'Apartment 1')"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <v-img
              src="https://picsum.photos/300/150"
              alt="Small Image 2"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(1, 'Apartment 1')"
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
                        <v-icon>mdi-human-male-female</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Max. 4</span>
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
             <v-btn @click="swapZIndex()" color="lime" style="color: white; margin-top: 20px; margin-bottom: 20px;">APARTMENT 1 <v-icon>mdi-information</v-icon></v-btn>
             </center>
        </v-card>
        <!-- INFO ZA PRVI APARTMAN -->
        <v-card class="sirinaVueCards1-1" :style="{ zIndex: zIndex2}">
            <v-card-title>Apartment 1 INFO</v-card-title>
            <v-container style="text-align: left;">
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Size:</b> 50m², 2 Bedrooms, 1 Bathroom</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Capacity:</b> Up to 4 guests</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Amenities:</b> Wi-Fi, Air Conditioning, Heating, TV, Kitchen</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Outdoor:</b> Balcony, Terrace, Garden, BBQ</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>View:</b> Sea view, Garden view, City view</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Parking:</b> Private parking, Free street parking</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Pet Policy:</b> Pets allowed/not allowed</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Nearby:</b> Beach 200m, Supermarket 100m, Restaurant 50m</v-card-text>
                    </v-container>
                    <v-container style="margin-top: 35px;">
                        <v-card-text>For more information, feel free to contact us via:</v-card-text>
                       <center>
                            <v-icon @click="openWhatsApp()" class="icons" size="36" style="padding: 20px;">mdi-whatsapp</v-icon>
                            <v-icon @click="sendGmail()" class="icons" size="36" style="padding: 20px;">mdi-email-outline</v-icon>
                            <br>
                            <v-btn @click="swapZIndex()" color="red" style="color: white; margin-top: 10px; margin-bottom: 10px;">BACK</v-btn>
                       </center> 
                    </v-container>
        </v-card>

        <v-card elevation="11" outlined shaped tile class="sirinaVueCards2" :style="{ zIndex: zIndex3}">
            <v-card-title>Apartment 2</v-card-title>
            <v-container>
                <v-container>
    <v-row>
      <!-- Prva slika lijevo, najveća -->
      <v-col cols="12" md="6">
        <v-img
          src="https://picsum.photos/300"
          alt="Large Image"
          height="300px"
          width="300px"
          class="clickable-image"
          @click="openGallery(1, 'Apartment 1')"
        ></v-img>
      </v-col>

      <!-- Dvije manje slike desno, jedna ispod druge -->
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-img
              src="https://picsum.photos/300/150"
              alt="Small Image 1"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(1, 'Apartment 1')"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <v-img
              src="https://picsum.photos/300/150"
              alt="Small Image 2"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(1, 'Apartment 1')"
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
                        <v-icon>mdi-human-male-female</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Max. 4</span>
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
             <v-btn @click="swapZIndex2()" color="lime" style="color: white; margin-top: 20px; margin-bottom: 20px;">APARTMENT 2 <v-icon>mdi-information</v-icon></v-btn>
             </center>
        </v-card>
        <!--INFO ZA DRUGI APARTMAN -->
        <v-card class="sirinaVueCards1-2" :style="{ zIndex: zIndex4}">
            <v-card-title>Apartment 2 INFO</v-card-title>
            <v-container style="text-align: left;">
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Size:</b> 50m², 2 Bedrooms, 1 Bathroom</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Capacity:</b> Up to 4 guests</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Amenities:</b> Wi-Fi, Air Conditioning, Heating, TV, Kitchen</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Outdoor:</b> Balcony, Terrace, Garden, BBQ</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>View:</b> Sea view, Garden view, City view</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Parking:</b> Private parking, Free street parking</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Pet Policy:</b> Pets allowed/not allowed</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Nearby:</b> Beach 200m, Supermarket 100m, Restaurant 50m</v-card-text>
                    </v-container>
                    <v-container style="margin-top: 35px;">
                        <v-card-text>For more information, feel free to contact us via:</v-card-text>
                       <center>
                            <v-icon @click="openWhatsApp2()" class="icons" size="36" style="padding: 20px;">mdi-whatsapp</v-icon>
                            <v-icon @click="sendGmail2()" class="icons" size="36" style="padding: 20px;">mdi-email-outline</v-icon>
                            <br>
                            <v-btn @click="swapZIndex2()" color="red" style="color: white; margin-top: 10px; margin-bottom: 10px;">BACK</v-btn>
                       </center> 
                    </v-container>
        </v-card>

        <v-card elevation="11" outlined shaped tile class="sirinaVueCards3" :style="{ zIndex: zIndex5}">
            <v-card-title>Apartment 3</v-card-title>
            <v-container>
                <v-container>
    <v-row>
    
      <v-col cols="12" md="6">
        <v-img
          src="https://picsum.photos/300"
          alt="Large Image"
          height="300px"
          width="300px"
          class="clickable-image"
          @click="openGallery(1, 'Apartment 1')"
        ></v-img>
      </v-col>

      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-img
              src="https://picsum.photos/300/150"
              alt="Small Image 1"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(1, 'Apartment 1')"
            ></v-img>
          </v-col>
          <v-col cols="12">
            <v-img
              src="https://picsum.photos/300/150"
              alt="Small Image 2"
              height="138px"
              width="300px"
              class="clickable-image"
              @click="openGallery(1, 'Apartment 1')"
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
                        <v-icon>mdi-human-male-female</v-icon>
                        <span class="ml-2" style="font-size: 13px;">Max. 4</span>
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
             <v-btn @click="swapZIndex3()" color="lime" style="color: white; margin-top: 20px; margin-bottom: 20px;">APARTMENT 3<v-icon>mdi-information</v-icon></v-btn>
             </center>
        </v-card>
        <v-card class="sirinaVueCards1-3" :style="{ zIndex: zIndex6}">
            <v-card-title>Apartment 3 INFO</v-card-title>
            <v-container style="text-align: left;">
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Size:</b> 50m², 2 Bedrooms, 1 Bathroom</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Capacity:</b> Up to 4 guests</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Amenities:</b> Wi-Fi, Air Conditioning, Heating, TV, Kitchen</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Outdoor:</b> Balcony, Terrace, Garden, BBQ</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>View:</b> Sea view, Garden view, City view</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Parking:</b> Private parking, Free street parking</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Pet Policy:</b> Pets allowed/not allowed</v-card-text>
                        <v-card-text style="font-size: 15px;" class="pa-1"><b>Nearby:</b> Beach 200m, Supermarket 100m, Restaurant 50m</v-card-text>
                    </v-container>
                    <v-container style="margin-top: 35px;">
                        <v-card-text>For more information, feel free to contact us via:</v-card-text>
                       <center>
                            <v-icon @click="openWhatsApp3()" class="icons" size="36" style="padding: 20px;">mdi-whatsapp</v-icon>
                            <v-icon @click="sendGmail3()" class="icons" size="36" style="padding: 20px;">mdi-email-outline</v-icon>
                            <br>
                            <v-btn @click="swapZIndex3()" color="red" style="color: white; margin-top: 10px; margin-bottom: 10px;">BACK</v-btn>
                       </center> 
                    </v-container>
        </v-card>

        <!-- 🔍 GALERIJA -->
        <v-dialog v-if="selectedImages.length" v-model="showGallery" max-width="600px">
            <v-card>
                <v-card-title>{{ galleryTitle }}</v-card-title>
                <v-card-text>
                    <v-carousel v-model="currentImage">
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
      currentImage: 0,
      galleryTitle: "",
      selectedImages: [],

      // 📷 Svaka kartica ima svoju galeriju
      galleries: [
        [ require('@/assets/apartmentspic1.jpg'), require('@/assets/apartmentspic3.jpg'), require('@/assets/apartmentspic6.jpg'), require('@/assets/apartmentspic8.jpg'), require('@/assets/apartmentspic9.jpg')],
        [ require('@/assets/apartmentspic2.jpg'), require('@/assets/backgroundimage.jpg'), require('@/assets/apartmentspic5.jpg'), require('@/assets/apartmentspic7.jpg'), require('@/assets/apartmentspic10.jpg') ],
        [ require('@/assets/beachbar1.jpg'), require('@/assets/beachbar2.jpg'), require('@/assets/restaurant1.jpg'), require('@/assets/restaurant2.jpg'), require('@/assets/restaurant3.jpg') ],
        [ require('@/assets/brijuni1.jpg'), require('@/assets/brijuni2.jpg'), require('@/assets/brijuni3.jpeg'), require('@/assets/brijuni4.jpg') ],
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
    openWhatsApp() {
      const phoneNumber = "+385993427477"; // Zamijeni brojem
      const message = "I%20am%20interested%20in%20apartment%201!"; // Enkodirana poruka
      const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.open(url, "_blank");
    },
    sendGmail() {
      const email = "info@example.com"; // Zamijeni pravom e-mail adresom
      const subject = "Inquiry about Apartment 1";
      const body = "I am interested in apartment 1! Please send me more information.";
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, "_blank");
    },
    openWhatsApp2() {
      const phoneNumber = "+385993427477"; // Zamijeni brojem
      const message = "I%20am%20interested%20in%20apartment%202!"; // Enkodirana poruka
      const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.open(url, "_blank");
    },
    sendGmail2() {
      const email = "info@example.com"; // Zamijeni pravom e-mail adresom
      const subject = "Inquiry about Apartment 2";
      const body = "I am interested in apartment 2! Please send me more information.";
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, "_blank");
    },
    openWhatsApp3() {
      const phoneNumber = "+385993427477"; // Zamijeni brojem
      const message = "I%20am%20interested%20in%20apartment%203!"; // Enkodirana poruka
      const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.open(url, "_blank");
    },
    sendGmail3() {
      const email = "info@example.com"; // Zamijeni pravom e-mail adresom
      const subject = "Inquiry about Apartment 3";
      const body = "I am interested in apartment 3! Please send me more information.";
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
.sirinaVueCards1-1{
    padding: 15px;
    width: 500px;
    height: 610px;
    position: relative;
    bottom: 610px;
}
.sirinaVueCards1-2{
    padding: 15px;
    width: 500px;
    height: 610px;
    position: relative;
    margin-top: -500px;
    bottom: 680px;
}
.sirinaVueCards1-3{
    padding: 15px;
    width: 500px;
    height: 585px;
    position: relative;
    margin-top: -635px;
    margin-bottom: 30px;
}
.none {
    background-image: url(../assets/backgroundimage.jpg);
    background-attachment: fixed;
} 

.padmarg {
    height: 80px;
}
</style>

