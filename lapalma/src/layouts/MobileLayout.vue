<template>
    <div>
        <div class="firstDiv">
            <v-toolbar-title style="font-family: 'Pacifico', cursive;">La Palma Apartments 🌴</v-toolbar-title>
        </div>
        <div class="secondDiv">
            <center>
                <div>
                    <v-card elevation="11" outlined shaped tile class="vueCard1">
                        <v-card-title style="font-size: 15px;">La Palma Apartments 🌴</v-card-title>
                        <v-card-subtitle style="font-size: 13px;">Discover Our Exclusive Offer – Four Unique Apartments Just for You!</v-card-subtitle>
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
                            src="../assets/location1.jpg" 
                            class="clickable-image"
                            @click="openGallery(1, 'Location')"
                            style="height: 150px;"
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
                        <v-img src="../assets/lnp1.jpg"></v-img>
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

                    <v-card elevation="11" outlined shaped tile class="vueCard3">
                        <v-card-title style="font-size: 15px;">Attractions in Pula 🐬!</v-card-title>
                            <v-card-subtitle></v-card-subtitle>
                            <v-card-text :class="{ 'text-truncated3': !expanded3 }" :style="{ maxHeight: expanded3 ? 'none' : '250px', overflow: expanded3 ? 'visible' : 'hidden' }">
                                During your stay in Pula, you’ll find a wide range of attractions to explore — from dolphin watching to visiting the famous 
                                Roman amphitheater and much more. Discover all the experiences waiting for you by checking out the link below.
                            </v-card-text>
                            <v-card-text><a href="https://www.getyourguide.com/s?locale=en&currency=EUR&src=&surface=&funnel=&google_ads_click_source=tpa&product_id=265027&option_id=459567&ttdwk16=16&et=265027&lc=344&cq_src=google_ads&cq_cmp=22155515416&cq_con=174020899379&cq_term=&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&campaign_id=22155515416&adgroup_id=174020899379&target_id=kwd-2461000167287&loc_physical_ms=1028857&match_type=&ad_id=730014736992&keyword=&ad_position=&feed_item_id=&placement=&device=c&partner_id=CD951&gad_source=1&gbraid=0AAAAADmzJCM5XM-FMazvG7HTxsq8hZ16l&gclid=EAIaIQobChMIi4mk8v3UjAMVRk1BAh0UPjOPEAQYASABEgIAuPD_BwE">
                                        LINK</a></v-card-text>
                        <v-img 
                            src="../assets/aip.jpg" 
                            class="clickable-image"
                            @click="openGallery(7, 'Attractions in Pula')"
                        ></v-img>
                    </v-card>

                    <div class="div_margin">
                        <span></span>
                    </div>

                </div>

                <v-dialog v-if="selectedImages.length" v-model="showGallery" :max-width="$vuetify.breakpoint.smAndDown ? '90vw' : '600px'">
                    <v-card>
                        <v-card-title>{{ galleryTitle }}</v-card-title>
                        <v-card-text>
                            <v-carousel v-model="currentImage" :height="$vuetify.breakpoint.smAndDown ? '250px' : '450px'" hide-delimiters>
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
        [ require('@/assets/apartmentspic3.jpg'), require('@/assets/apartmentspic10.jpg'), require('@/assets/apartmentspic1.jpg'), require('@/assets/4pic.jpg'), require('@/assets/apartmentspic11.jpg'), require('@/assets/apartmentspic8.jpg'), require('@/assets/apartmentspic6.jpg'), require('@/assets/apartmentspic12.jpg'),  require('@/assets/lapalmaapartments3.jpg'), require('@/assets/lapalmaapartments5.jpg'), require('@/assets/apartmentspic9.jpg')],
        [ require('@/assets/location1.jpg'), require('@/assets/location2.jpg'), require('@/assets/location3.jpg'), require('@/assets/location4.jpg'), require('@/assets/location5.jpg'), require('@/assets/location6.jpg'), require('@/assets/location7.jpg'), require('@/assets/location8.jpg'), require('@/assets/location9.jpg'), require('@/assets/location10.jpg'), require('@/assets/location11.jpg'), require('@/assets/location12.jpg'), require('@/assets/location13.jpg'), require('@/assets/location14.jpg'), require('@/assets/location15.jpg')],
        [ require('@/assets/beachbar1.jpg'), require('@/assets/beachbar2.jpg'), require('@/assets/restaurant1.jpg'), require('@/assets/restaurant2.jpg'), require('@/assets/restaurant3.jpg') ],
        [ require('@/assets/npbrijuni.jpg'), require('@/assets/brijuni/brijuni2.jpg'), require('@/assets/brijuni/brijuninew.jpg'), require('@/assets/brijuni/brijuni1.jpg'), require('@/assets/brijuni/npbrijuni2.jpg'), require('@/assets/brijuni/npbrijuni3.jpg'), require('@/assets/brijuni/npbrijuni4.jpg'), require('@/assets/brijuni/npbrijuni5.jpg'), require('@/assets/brijuni/npbrijuni6.jpg'), require('@/assets/brijuni/npbrijuni7.jpg'), require('@/assets/brijuni/npbrijuni8.jpg'), require('@/assets/brijuni/brijuni1.jpg'), require('@/assets/brijuni/npbrijuni9.jpg'), require('@/assets/brijuni/npbrijuni10.jpg'), require('@/assets/brijuni/brijuni3.jpeg'), require('@/assets/brijuni/brijuni4.jpg')],
        [ require('@/assets/rtkamenjak.jpg'), require('@/assets/rtkamenjak1.jpg'), require('@/assets/rtkamenjak2.jpg'), require('@/assets/rtkamenjak3.jpg'), require('@/assets/rtkamenjak4.jpeg'), require('@/assets/rtkamenjak5.jpg'), require('@/assets/rtkamenjak6.jpg'), require('@/assets/rtkamenjak7.jpg'), require('@/assets/rtkamenjak8.jpg'), require('@/assets/rtkamenjak9.jpg'), require('@/assets/rtkamenjak10.jpg'), require('@/assets/rtkamenjak11.jpg'), require('@/assets/rtkamenjak12.jpg') ],
        [ require('@/assets/rovinj.jpg'), require('@/assets/rovinj1.jpg'), require('@/assets/rovinj2.jpg'), require('@/assets/rovinj3.jpg'), require('@/assets/rovinj4.jpeg'), require('@/assets/rovinj5.jpg'), require('@/assets/rovinj6.jpg'), require('@/assets/rovinj7.jpg'), require('@/assets/rovinj8.jpg'), require('@/assets/rovinj9.jpg'), require('@/assets/rovinj10.jpg'), require('@/assets/rovinj11.jpg'), require('@/assets/rovinj12.jpg'), require('@/assets/rovinj13.jpg'),],
        [ require('@/assets/lk1.jpg'), require('@/assets/lk2.jpg'), require('@/assets/lk3.jpg'), require('@/assets/lk4.jpg'), require('@/assets/lk5.jpg') ],
        [ require('@/assets/aip.jpg'), require('@/assets/aip2.jpg'), require('@/assets/aip3.jpg'), require('@/assets/aip4.jpg'), require('@/assets/aip5.jpg')],
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
  width: 100vw;
  height: 100%;
  z-index: 0;
}
.secondDiv {
  position: relative;
  width: 100vw;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.secondDiv::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/backgroundimage.jpg');
  background-repeat: repeat-y;
  background-size: cover;
  filter: blur(8px); /* postavi intenzitet zamućenja ovdje */
  z-index: -1;
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
    margin-top: 50px;
    text-align: justify;
    z-index: 1;
}
.vueCard3{
    width:70%;
    height:auto;
    display: inline-block;
    margin-top: 50px;
    text-align: justify;
    z-index: 1;
}

.vueCard4{
    width:70%;
    height:auto;
    display: inline-block;
    margin-top: 50px;
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