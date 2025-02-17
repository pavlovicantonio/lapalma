<template>
    <div class="none">
        <center>
        <div class="padmarg"></div>

        <!-- 1️⃣ PRVA GALERIJA -->
        <v-card elevation="11" outlined shaped tile class="sirinaVueCard1">
            <v-card-title>La Palma Apartments 🌴</v-card-title>
            <v-card-subtitle>Discover Our Exclusive Offer – Three Unique Apartments Just for You!</v-card-subtitle>
            <v-card-text :class="{ 'text-truncated1': !expanded1 }" :style="{ maxHeight: expanded1 ? 'none' : '250px', overflow: expanded1 ? 'visible' : 'hidden' }">
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

        <!-- 2️⃣ DRUGA GALERIJA -->
        <v-card elevation="11" outlined shaped tile class="sirinaVueCard2" style="margin-bottom: 10px;">
            <v-card-title>Location 🗺️📌</v-card-title>
            <v-card-subtitle>Our apartments are located in "Pješčana uvala" (Istria, Croatia)</v-card-subtitle>
            <v-card-text :class="{ 'text-truncated2': !expanded2 }" :style="{ maxHeight: expanded2 ? 'none' : '250px', overflow: expanded2 ? 'visible' : 'hidden' }">
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
                src="../assets/apartmentspic2.jpg" 
                class="clickable-image"
                @click="openGallery(1, 'Location')"
            ></v-img>
        </v-card>

        <!-- 3️⃣ TREĆA GALERIJA -->
        <v-card elevation="11" outlined shaped tile class="sirinaVueCard2">
            <v-card-title>Attractions in Pješčana Uvala 🏖️</v-card-title>
            <v-card-subtitle>In Pješčana Uvala, there are many attractive things.</v-card-subtitle>
            <v-card-text :class="{ 'text-truncated3': !expanded3 }" :style="{ maxHeight: expanded3 ? 'none' : '250px', overflow: expanded3 ? 'visible' : 'hidden' }">From restaurants, cafés, beach bars, shops, children's playgrounds, sports fields...</v-card-text>
            <v-card-text>Restaurants:<br><br>Škuža<br>Lanterna<br>Cava Romana<br>Bistro Margerita</v-card-text>
            <v-card-text>Beach bars, caffe bars:<br><br>Batana<br>Splash<br>Caffe bar YES<br>Lounge bar DolceVibe</v-card-text>
            <v-btn text @click="expanded3 = !expanded3">{{ expanded3 ? "View Less" : "View More" }}</v-btn>
            <v-img 
                src="../assets/beachbar1.jpg" 
                class="clickable-image"
                @click="openGallery(2, 'Attractions')"
            ></v-img>
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
        [ require('@/assets/apartmentspic1.jpg'), require('@/assets/apartmentspic3.jpg'), require('@/assets/apartmentspic4.jpg') ],
        [ require('@/assets/apartmentspic2.jpg'), require('@/assets/backgroundimage.jpg'), require('@/assets/apartmentspic5.jpg'), require('@/assets/igraliste1.jpg'), require('@/assets/igraliste2.png') ],
        [ require('@/assets/beachbar1.jpg'), require('@/assets/beachbar2.jpg'), require('@/assets/restaurant1.jpg'), require('@/assets/restaurant2.jpg'), require('@/assets/restaurant3.jpg') ]
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
