<template>
    <div>
        <div class="firstDiv">
            <v-toolbar-title>La Palma Apartments 🌴</v-toolbar-title>
        </div>
        <div class="secondDiv">
            <center>
                <div>
                    <v-card elevation="11" outlined shaped tile class="vueCard1">
                        <v-card-title style="font-size: 15px; text-align: center;">La Palma Apartments 🌴</v-card-title>
                        <v-card-subtitle style="font-size: 13px;">Discover Our Exclusive Offer – Three Unique Apartments Just for You!</v-card-subtitle>
                        <v-card-text :class="{ 'text-truncated1': !expanded1 }" :style="{ maxHeight: expanded1 ? 'none' : '250px', overflow: expanded1 ? 'visible' : 'hidden' }" class="v-text1">
                            Escape to a place where comfort meets paradise. La Palma Apartments offer the perfect retreat 
                            for those seeking relaxation, adventure, and unforgettable memories.
                            Wake up to the scent of the sea breeze, spend your days basking by the pool or exploring the 
                            vibrant surroundings, and unwind in our thoughtfully designed apartments that feel like home. 
                            Whether you're looking for a romantic getaway, a fun-filled family vacation, or a peaceful escape, 
                            your perfect stay starts here. Book your stay today and experience the magic of the Mediterranean! 🌿☀️🌊
                            <br><br>
                            At La Palma Apartments, we offer a selection of three beautifully designed apartments, 
                            each providing a perfect blend of comfort and style. Located just 250 meters from the 
                            sea, you can enjoy easy access to the beach while relaxing in the peaceful ambiance of 
                            our property. Unwind by the pool and experience the tranquility that makes your stay truly 
                            special. Whether you're seeking a romantic escape, a fun family holiday, or a productive 
                            business trip, our apartments are tailored to meet your every need.
                        </v-card-text>
                        <v-btn text @click="expanded1 = !expanded1">{{ expanded1 ? "View Less" : "View More" }}</v-btn>
                        <v-img 
                            src="../assets/apartmentspic1.jpg" 
                            class="clickable-image"
                            @click="openGallery(0, 'La Palma Apartments')"
                        ></v-img>
                    </v-card>

                    <v-card elevation="11" outlined shaped tile class="vueCard2">
                        <v-card-title style="font-size: 15px;">Location 🗺️📌</v-card-title>
                        <v-card-subtitle style="font-size: 13px;">Our apartments are located in "Pješčana uvala" (Istria, Croatia)</v-card-subtitle>
                        <v-card-text :class="{ 'text-truncated2': !expanded2 }" :style="{ maxHeight: expanded2 ? 'none' : '250px', overflow: expanded2 ? 'visible' : 'hidden' }" class="v-text1">
                            ... one of the most popular destinations near Pula, offering a 
                            perfect combination of natural beauty and modern amenities. Just 250 meters from the sea, our location 
                            provides easy access to stunning beaches, vibrant local attractions, and a peaceful atmosphere for a truly relaxing stay.
                            <br><br>
                            "Pješčana uvala" offers a variety of attractions and amenities to enhance your stay. Here, you will find beautiful beaches, 
                            restaurants serving local specialties, seaside cafés, shops, and a range of recreational activities such as water sports and 
                            scenic seaside promenades. It is the perfect place to relax, explore, and enjoy the Mediterranean lifestyle.
                        </v-card-text>
                        <v-btn text @click="expanded2 = !expanded2">{{ expanded2 ? "View Less" : "View More" }}</v-btn>
                        <v-img 
                            src="../assets/arena.jpg" 
                            class="clickable-image"
                            @click="openGallery(1, 'Location')"
                            style="height: 150px;"
                        ></v-img>
                    </v-card>

                    <v-card elevation="11" outlined shaped tile class="vueCard3">
                        <v-card-title style="font-size: 15px;">Attractions in Pješčana <spacer></spacer>Uvala 🏖️</v-card-title>
                        <v-card-subtitle style="font-size: 13px;">In Pješčana Uvala, there are many attractive things.</v-card-subtitle>
                        <v-card-text style="font-size: 13px;">From restaurants, cafés, beach bars, shops, children's playgrounds, sports fields...</v-card-text>
                        <v-card-text style="font-size: 13px;"><b>Restaurants:</b><br>Škuža<br>Lanterna<br>Cava Romana<br>Bistro Margerita</v-card-text>
                        <v-card-text style="font-size: 13px;"><b>Beach bars, caffe bars:</b><br>Batana<br>Splash<br>Caffe bar YES<br>Lounge bar DolceVibe</v-card-text>
                        <v-img 
                            src="../assets/beachbar1.jpg" 
                            class="clickable-image"
                            @click="openGallery(2, 'Attractions')"
                        ></v-img>
                    </v-card>

                    <v-card elevation="11" outlined shaped tile class="vueCard4">
                        <v-card-title style="font-size: 15px;">Locations near Pula 🏟</v-card-title>
                        <v-card-subtitle>Explore Brijuni, Kamenjak, Rovinj, Limski kanal...</v-card-subtitle>

                        <v-card-text :class="{ 'text-truncated3': !expanded3 }" 
                                    :style="{ maxHeight: expanded3 ? 'none' : '250px', overflow: expanded3 ? 'visible' : 'hidden' }" 
                                    class="v-text1">
                            In the vicinity of the apartment and Pula, there are many attractive locations you can explore while enjoying your relaxing vacation.
                            
                            <br><br>
                            <b>National park Brijuni</b><br>
                            Brijuni National Park is a stunning archipelago known for its untouched nature, rich history, and diverse wildlife. The islands boast 
                            ancient Roman ruins, a safari park with exotic animals, and breathtaking coastal views. Once a private retreat of Yugoslav leader Tito, 
                            Brijuni still holds an air of exclusivity and charm. A visit offers a perfect mix of history, nature, and relaxation just a short boat ride 
                            from Pula. <br><br>
                            <center>
                                <img src="../assets/npbrijuni.jpg" alt="" style="width: 100%;" class="clickable-image" @click="openGallery(3, 'NP Brijuni')">
                            </center>
                            <br><br>

                            <b>Rt Kamenjak</b><br>
                            Kamenjak is a beautiful nature park at the southernmost tip of Istria, known for its rugged coastline, crystal-clear waters, and hidden coves. 
                            It’s a paradise for nature lovers, offering scenic bike trails, unique rock formations, and rich marine life. The park is also famous for its 
                            prehistoric dinosaur footprints and the quirky Safari Bar, a must-visit spot for a laid-back experience. Whether you’re into swimming, hiking, 
                            or just enjoying stunning sunsets, Kamenjak is a perfect getaway. <br><br>
                            <center>
                                <img src="../assets/rtkamenjak.jpg" alt="" style="width: 100%;" class="clickable-image" @click="openGallery(4, 'Rt Kamenjak')">
                            </center>
                            <br><br>

                            <b>Rovinj</b><br>
                            Rovinj is one of the most picturesque towns in Istria, known for its colorful old town, charming cobblestone streets, and breathtaking sunsets. 
                            The iconic Church of St. Euphemia offers stunning panoramic views of the Adriatic. With its rich Venetian heritage, vibrant art scene, and beautiful beaches, 
                            Rovinj is a perfect blend of history and coastal charm. Whether you explore its hidden alleys or relax by the sea, this town leaves a lasting impression.
                            Rovinj is approximately 40 km from Pješčana Uvala, and the drive takes around 35 minutes, depending on traffic. <br><br>
                            <center>
                                <img src="../assets/rovinj.jpg" alt="" style="width: 100%;" class="clickable-image" @click="openGallery(5, 'Rovinj')">
                            </center>
                            <br><br>

                            <b>Limski kanal</b><br>
                            Limski kanal is a stunning natural fjord-like bay between Rovinj and Vrsar, known for its emerald-green waters and steep cliffs covered in lush vegetation. 
                            It is famous for its oyster and mussel farms, making it a great spot for seafood lovers. The area is also rich in history, with ancient caves once used by hermits 
                            and pirates. Whether you explore it by boat, hike along the scenic trails, or enjoy fresh seafood at a local restaurant, Limski kanal offers a perfect mix of nature and gastronomy. <br><br>
                            <center>
                                <img src="../assets/limskikanal.jpg" alt="" style="width: 100%;" class="clickable-image" @click="openGallery(6, 'Limski kanal')">
                            </center>
                        </v-card-text>

                        <v-btn text @click="expanded3 = !expanded3">{{ expanded3 ? "View Less" : "View More" }}</v-btn>  
                    </v-card>

                    <div class="div_margin">
                        <span></span>
                    </div>

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
                <div></div>
            </center>
        </div>
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
        [ require('@/assets/apartmentspic1.jpg'), require('@/assets/apartmentspic3.jpg'), require('@/assets/apartmentspic4.jpg') ],
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
    }
  }
};
</script>

<style>
.naslov{
    margin-left: auto;
    margin-right: auto;
}

.firstDiv{
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
.secondDiv {
  background-color: #F5ECD5;
  width: 100vw;
  height: 100%;
  z-index: 0;
}

.vueCard1{
    width:70%;
    height:auto;
    display: inline-block;
    margin-top: 100px;
    text-align: justify;
    z-index: 1;
}
.vueCard2{
    width:70%;
    height:auto;
    display: inline-block;
    margin-top: 180px;
    text-align: justify;
    z-index: 1;
}
.vueCard3{
    width:70%;
    height:auto;
    display: inline-block;
    margin-top: 20px;
    text-align: justify;
    z-index: 1;
}

.vueCard4{
    width:70%;
    height:auto;
    display: inline-block;
    margin-top: 180px;
    text-align: justify;
    z-index: 1;
}

.v-text1{
    font-size: 12px;
}
.div_margin{
    height: 100px;
    display: inline-block;
    width: 70%;
}
</style>