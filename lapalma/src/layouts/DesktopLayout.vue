<template>
    <div class="none">
        <center>
        <div class="padmarg"></div>

        <!-- 1️⃣ PRVA GALERIJA -->
        <v-card elevation="11" outlined shaped tile class="sirinaVueCard1">
            <v-card-title>La Palma Apartments 🌴</v-card-title>
            <v-card-subtitle>Discover Our Exclusive Offer – Four Unique Apartments Just for You!</v-card-subtitle>
            <v-card-text :class="{ 'text-truncated1': !expanded1 }" :style="{ maxHeight: expanded1 ? 'none' : '250px', overflow: expanded1 ? 'visible' : 'hidden' }">
                Escape to a place where comfort meets paradise. La Palma Apartments offer the perfect retreat 
                for those seeking relaxation, adventure, and unforgettable memories.
                Wake up to the scent of the sea breeze, spend your days basking by the pool or exploring the 
                vibrant surroundings, and unwind in our thoughtfully designed apartments that feel like home. 
                Whether you're looking for a romantic getaway, a fun-filled family vacation, or a peaceful escape, 
                your perfect stay starts here. Book your stay today and experience the magic of the Mediterranean! 🌿☀️🌊
                <br><br>
                At La Palma Apartments, we offer a selection of four beautifully designed apartments, 
                each providing a perfect blend of comfort and style. Located just 200 meters from the 
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

        <!-- 2️⃣ DRUGA GALERIJA -->
        <v-card elevation="11" outlined shaped tile class="sirinaVueCard2" style="margin-bottom: 10px;">
            <v-card-title>Location 🗺️📌</v-card-title>
            <v-card-subtitle>Our apartments are located in "Pješčana uvala" ( Pula, Istria, Croatia )</v-card-subtitle>
            <v-card-text :class="{ 'text-truncated2': !expanded2 }" :style="{ maxHeight: expanded2 ? 'none' : '250px', overflow: expanded2 ? 'visible' : 'hidden' }">
                ... one of the most popular destinations near Pula, offering a 
                perfect combination of natural beauty and modern amenities. Just 200 meters from the sea, our location 
                provides easy access to stunning beaches, vibrant local attractions, and a peaceful atmosphere for a truly relaxing stay.
                <br><br>
                "Pješčana uvala" offers a variety of attractions and amenities to enhance your stay. Here, you will find beautiful beaches, 
                restaurants serving local specialties, seaside cafés, shops, and a range of recreational activities such as water sports and 
                scenic seaside promenades. It is the perfect place to relax, explore, and enjoy the Mediterranean lifestyle.
            </v-card-text>
            <v-btn text @click="expanded2 = !expanded2">{{ expanded2 ? "View Less" : "View More" }}</v-btn>
            <v-img 
                src="../assets/location1.jpg" 
                style="height: 300px;"
                class="clickable-image"
                @click="openGallery(1, 'Location')"
            ></v-img>
        </v-card>

        <v-card elevation="11" outlined shaped tile class="sirinaVueCard2" style="margin-bottom: 10px;">
            <v-card-title>Locations near Pula 🏟</v-card-title>
            <v-card-subtitle>Explore Brijuni, Kamenjak, Rovinj, Limski kanal...</v-card-subtitle>
            <v-card-text :class="{ 'text-truncated2': !expanded2 }" :style="{ maxHeight: expanded2 ? 'none' : '250px', overflow: expanded2 ? 'visible' : 'hidden' }">
                In the vicinity of the apartment and Pula, there are many attractive locations you can explore while enjoying your relaxing vacation.
                <br><br><b>National park Brijuni</b><br>
                Brijuni National Park is a stunning archipelago known for its untouched nature, rich history, and diverse wildlife. The islands boast 
                ancient Roman ruins, a safari park with exotic animals, and breathtaking coastal views. Once a private retreat of Yugoslav leader Tito, 
                Brijuni still holds an air of exclusivity and charm. A visit offers a perfect mix of history, nature, and relaxation just a short boat ride 
                from Pula. <br><br>
                <center>
                    <img src="../assets/npbrijuni.jpg" alt="" style="width: 400px;" class="clickable-image" @click="openGallery(3, 'NP Brijuni')">
                </center>
                <br><br>
                <b>Rt Kamenjak</b><br>
                Kamenjak is a beautiful nature park at the southernmost tip of Istria, known for its rugged coastline, crystal-clear waters, and hidden coves. 
                It’s a paradise for nature lovers, offering scenic bike trails, unique rock formations, and rich marine life. The park is also famous for its 
                prehistoric dinosaur footprints and the quirky Safari Bar, a must-visit spot for a laid-back experience. Whether you’re into swimming, hiking, 
                or just enjoying stunning sunsets, Kamenjak is a perfect getaway. <br><br>
                <center>
                    <img src="../assets/rtkamenjak.jpg" alt="" style="width: 400px;" class="clickable-image" @click="openGallery(4, 'Rt Kamenjak')">
                </center>
                <br><br>
                <b>Rovinj</b><br>
                Rovinj is one of the most picturesque towns in Istria, known for its colorful old town, charming cobblestone streets, and breathtaking sunsets. 
                The iconic Church of St. Euphemia offers stunning panoramic views of the Adriatic. With its rich Venetian heritage, vibrant art scene, and beautiful beaches, 
                Rovinj is a perfect blend of history and coastal charm. Whether you explore its hidden alleys or relax by the sea, this town leaves a lasting impression.
                Rovinj is approximately 40 km from Pješčana Uvala, and the drive takes around 35 minutes, depending on traffic <br><br>
                <center>
                    <img src="../assets/rovinj.jpg" alt="" style="width: 400px;" class="clickable-image" @click="openGallery(5, 'Rovinj')">
                </center>
                <br><br>
                <b>Limski kanal</b><br>
                Limski kanal is a stunning natural fjord-like bay between Rovinj and Vrsar, known for its emerald-green waters and steep cliffs covered in lush vegetation. 
                It is famous for its oyster and mussel farms, making it a great spot for seafood lovers. The area is also rich in history, with ancient caves once used by hermits 
                and pirates. Whether you explore it by boat, hike along the scenic trails, or enjoy fresh seafood at a local restaurant, Limski kanal offers a perfect mix of nature and gastronomy. <br><br>
                <center>
                    <img src="../assets/limskikanal.jpg" alt="" style="width: 400px;" class="clickable-image" @click="openGallery(6, 'Limski kanal')">
                </center>

            </v-card-text>
            <v-btn text @click="expanded2 = !expanded2">{{ expanded2 ? "View Less" : "View More" }}</v-btn>
            <center>
                <v-img src="../assets/lnp1.jpg" style="width: 450px;"></v-img>
            </center>
        </v-card>

        <!-- 3️⃣ TREĆA GALERIJA -->
        <v-card elevation="11" outlined shaped tile class="sirinaVueCard2" style="margin-bottom: 30px;">
            <v-card-title>Attractions in Pješčana Uvala 🏖️</v-card-title>
            <v-card-subtitle>In Pješčana Uvala, there are many attractive things.</v-card-subtitle>
            <v-card-text :class="{ 'text-truncated3': !expanded3 }" :style="{ maxHeight: expanded3 ? 'none' : '250px', overflow: expanded3 ? 'visible' : 'hidden' }">From restaurants, cafés, beach bars, shops, children's playgrounds, sports fields...</v-card-text>
            <v-card-text>Restaurants:<br><br>Škuža<br>Lanterna<br>Cava Romana<br>Bistro Margerita</v-card-text>
            <v-card-text>Beach bars, caffe bars:<br><br>Batana<br>Splash<br>Caffe bar YES<br>Lounge bar DolceVibe</v-card-text>
            <v-img 
                src="../assets/beachbar1.jpg" 
                class="clickable-image"
                @click="openGallery(2, 'Attractions')"
            ></v-img>
        </v-card>

        <v-card elevation="11" outlined shaped tile class="sirinaVueCard2" style="margin-bottom: 30px;">
            <v-card-title>Attractions in Pula 🐬!</v-card-title>
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
          <v-btn icon @click="openWhatsapp2()" target="_blank">
            <v-icon color="#1976d2">mdi-whatsapp</v-icon>
          </v-btn>
          <v-btn icon @click="sendGmail1()" target="_blank">
            <v-icon color="#1976d2">mdi-gmail</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
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
      currentImage: 0,
      galleryTitle: "",
      selectedImages: [],

      // 📷 Svaka kartica ima svoju galeriju
      galleries: [
        [ require('@/assets/apartmentspic3.jpg'), require('@/assets/apartmentspic10.jpg'), require('@/assets/apartmentspic1.jpg'), require('@/assets/lapalmaapartments1.jpg'), require('@/assets/apartmentspic11.jpg'), require('@/assets/apartmentspic8.jpg'), require('@/assets/apartmentspic6.jpg'), require('@/assets/apartmentspic12.jpg'),  require('@/assets/lapalmaapartments3.jpg'), require('@/assets/lapalmaapartments5.jpg'), require('@/assets/apartmentspic9.jpg')],
        [ require('@/assets/location1.jpg'), require('@/assets/location2.jpg'), require('@/assets/location3.jpg'), require('@/assets/location4.jpg'), require('@/assets/location5.jpg'), require('@/assets/location6.jpg'), require('@/assets/location7.jpg'), require('@/assets/location8.jpg'), require('@/assets/location9.jpg'), require('@/assets/location10.jpg'), require('@/assets/location11.jpg'), require('@/assets/location12.jpg'), require('@/assets/location13.jpg'), require('@/assets/location14.jpg'), require('@/assets/location15.jpg')],
        [ require('@/assets/beachbar1.jpg'), require('@/assets/beachbar2.jpg'), require('@/assets/restaurant1.jpg'), require('@/assets/restaurant2.jpg'), require('@/assets/restaurant3.jpg') ],
        [ require('@/assets/npbrijuni.jpg'), require('@/assets/brijuni/brijuni2.jpg'), require('@/assets/brijuni/brijuninew.jpg'), require('@/assets/brijuni/brijuni1.jpg'), require('@/assets/brijuni/npbrijuni2.jpg'), require('@/assets/brijuni/npbrijuni3.jpg'), require('@/assets/brijuni/npbrijuni4.jpg'), require('@/assets/brijuni/npbrijuni5.jpg'), require('@/assets/brijuni/npbrijuni6.jpg'), require('@/assets/brijuni/npbrijuni7.jpg'), require('@/assets/brijuni/npbrijuni8.jpg'), require('@/assets/brijuni/brijuni1.jpg'), require('@/assets/brijuni/npbrijuni9.jpg'), require('@/assets/brijuni/npbrijuni10.jpg'), require('@/assets/brijuni/brijuni3.jpeg'), require('@/assets/brijuni/brijuni4.jpg')],
        [ require('@/assets/rtkamenjak.jpg'), require('@/assets/rtkamenjak1.jpg'), require('@/assets/rtkamenjak2.jpg'), require('@/assets/rtkamenjak3.jpg'), require('@/assets/rtkamenjak4.jpeg'), require('@/assets/rtkamenjak5.jpg'), require('@/assets/rtkamenjak6.jpg'), require('@/assets/rtkamenjak7.jpg'), require('@/assets/rtkamenjak8.jpg'), require('@/assets/rtkamenjak9.jpg'), require('@/assets/rtkamenjak10.jpg'), require('@/assets/rtkamenjak11.jpg'), require('@/assets/rtkamenjak12.jpg') ],
        [ require('@/assets/rovinj1.jpg'), require('@/assets/rovinj2.jpg'), require('@/assets/rovinj3.jpg'), require('@/assets/rovinj4.jpeg'), require('@/assets/rovinj5.jpg'), require('@/assets/rovinj6.jpg'), require('@/assets/rovinj7.jpg'), require('@/assets/rovinj8.jpg'), require('@/assets/rovinj9.jpg'), require('@/assets/rovinj10.jpg'), require('@/assets/rovinj11.jpg'), require('@/assets/rovinj12.jpg'), require('@/assets/rovinj13.jpg'),],
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
    },
    openWhatsapp2(){
      const phoneNumber = "393279431662";
      const message = `I%20am%20interested%20in%20your%20apartments!`;
      const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.open(url, "_blank");
    },
    sendGmail1() {
      const email = "croatiavacation05@gmail.com";
      const subject = `Inquiry about Apartments!`;
      const body = `I am interested in your apartments! Please send me more information.`;
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, "_blank");
    },
  }
};
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

.sirinaVueCard1, .sirinaVueCard2 {
    margin-top: 30px;
    width: 500px;
    text-align: justify;
    padding: 15px;
}

.none {
    background-image: url(../assets/backgroundimage.jpg);
    background-attachment: fixed;
} 

.padmarg {
    height: 80px;
}
</style>
