<template>
    <div class="none">
        <center>
        <div class="padmarg"></div>

        <!-- 1️⃣ PRVA GALERIJA -->
        <v-card elevation="11" outlined shaped tile class="sirinaVueCardss1">
  <v-card-title class="d-flex justify-center align-center">
    Frequently asked questions
  </v-card-title>

  <!-- Ovo je kontejner koji ih drži u redu -->
  <div class="d-flex">
    <div class="questions">
        <v-expansion-panels>
            <v-expansion-panel
            v-for="(item, index) in faqList"
            :key="index"
            >
            <v-expansion-panel-header>{{ item.question }}</v-expansion-panel-header>
            <v-expansion-panel-content>{{ item.answer }}</v-expansion-panel-content>
            </v-expansion-panel>
         </v-expansion-panels>
    </div>

    <div class="info">
        <v-form @submit.prevent="submitForm" ref="form" v-model="valid">
        <v-text-field v-model="form.fullName" label="First and last name" :rules="[rules.required]" required></v-text-field>
        <v-text-field v-model="form.phone" label="Mobile number" :rules="[rules.required]" required></v-text-field>
        <v-text-field v-model="form.email" label="Email" :rules="[rules.required, rules.email]" required></v-text-field>
        <v-textarea v-model="form.question" label="What are you interested in?" :rules="[rules.required]" required></v-textarea>
        <v-btn type="submit" color="primary">Send</v-btn>
      </v-form>
    </div>
  </div>
</v-card>

        
        <div></div>
        </center>
    </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      submitted: false,
      form: {
        fullName: '',
        phone: '',
        email: '',
        question: ''
      },
      rules: {
        required: value => !!value || 'Required field!',
        email: value => /.+@.+\..+/.test(value) || 'Please enter a valid email address!'
      },
      faqList: [
        {
          question: "How to book an apartment?",
          answer: "You can book the apartment via Booking, but you can also contact us through the form on the right or send an inquiry for the apartment you're interested in through the Apartments section on our website."
        },
        {
          question: "Is Wi-Fi available?",
          answer: "Of course, all apartments have free high-speed Wi-Fi."
        },
        {
          question: "Is the beach nearby?",
          answer: "Yes, the beach is just a 3-minute walk away."
        },
        {
          question: "Is free parking available?",
          answer: "Yes, each apartment comes with one free parking spot."
        },
        {
          question: "Are the pets allowed in the apartment?",
          answer: "Yes, they are."
        },
        {
          question: "Do all the apartments have acess to the pool?",
          answer: "Yes, they do."
        }
      ]
    };
  },
  methods: {
    submitForm(){

    }
  }
};
</script>

<style>
.questions, .info {
  height: auto;
  width: 50%;
  padding: 16px;
}

.clickable-image {
    cursor: pointer;
    transition: transform 0.2s;
}

.clickable-image:hover {
    transform: scale(1.05);
}

.sirinaVueCardss1{
    margin-top: 30px;
    width: 700px;
    text-align: justify;
    padding: 15px;
    height: auto;
}
.none{
    background-image: url(../assets/backgroundimage.jpg);
    background-attachment: fixed;
    height: 100%;
} 

.padmarg {
    height: 80px;
}
</style>

