<template>
    <div>
        <div class="AML_firstDiv">
            <v-toolbar-title>La Palma Apartments 🌴</v-toolbar-title>
        </div>
        <div class="AML_secondDiv">
            <center>
                    <v-card elevation="11" outlined shaped tile class="AML_vueCard3" >
                        <v-container style="text-align: left;">
                        <v-card-title style="font-size: 15px; position: relative; right: 12px;">Apartment 4</v-card-title>
                        <v-card-text style="font-size: 13px;" class="pa-1"><b>Size:</b> 1 Bedroom, 1 Bathroom</v-card-text>
                        <v-card-text style="font-size: 13px;" class="pa-1"><b>Amenities:</b> Wi-Fi, Air Conditioning, Heating, TV, Kitchen</v-card-text>
                        <v-card-text style="font-size: 13px;" class="pa-1"><b>Outdoor:</b> Balcony, Terrace, Garden, BBQ</v-card-text>
                        <v-card-text style="font-size: 13px;" class="pa-1"><b>View:</b> Sea view, Garden view, City view</v-card-text>
                        <v-card-text style="font-size: 13px;" class="pa-1"><b>Parking:</b> Private parking, Free street parking</v-card-text>
                        <v-card-text style="font-size: 13px;" class="pa-1"><b>Pet Policy:</b> Pets allowed</v-card-text>
                        <v-card-text style="font-size: 13px;" class="pa-1"><b>Nearby:</b> Beach 200m, Supermarket 100m, Restaurant 100m</v-card-text>
                    </v-container>
                        <v-card-text>For more information, feel free to contact us via:</v-card-text>
                       <center>
                            <v-icon @click="openWhatsApp()" class="icons" style="padding: 10px;">mdi-whatsapp</v-icon>
                            <v-icon @click="sendSMS()" class="icons" style="padding: 10px;">mdi-phone</v-icon>
                            <v-icon @click="sendEmail()" class="icons" style="padding: 10px;">mdi-email-outline</v-icon>
                            <br>
                            <v-btn @click="goToApartments()" color="red" style="color: white; margin-top: 10px; margin-bottom: 10px;">BACK</v-btn>
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
.AML_vueCard3{
    width:70%;
    height: auto;
    display: inline-block;
    margin-top: 100px;
    text-align: justify;
    z-index: 1;
    margin-bottom: 80px;
}
.icons:hover{
    scale: 1.4;
}
</style>

<script>
export default{
    data(){

    },
    methods:{
        sendEmail() {
        const email = "croatiavacation05@gmail.com";
        const subject = "Inquiry about Apartment 4";
        const body = "I am interested in apartment 4! Please send me more information.";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        },
        openWhatsApp() {
        const phoneNumber = "+385993427477";
        const message = "I am interested in apartment 4!";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        },
        sendSMS() {
        const phoneNumber = "+385993427477";
        const message = "I am interested in apartment 4!";
        window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
        },
        goToApartments() {
        this.$router.push('/apartments').then(() => {
        window.location.reload();
        });
        }
    }
}
</script>
