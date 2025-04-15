<template>
    <div>
        <div class="AML_firstDiv">
            <v-toolbar-title>La Palma Apartments 🌴</v-toolbar-title>
        </div>

        <div class="AML_secondDiv">
        <v-card elevation="11" outlined shaped class="sirinaVueCardss1" color="white" style="margin-bottom: 40px; margin-top: 50px;">
          <v-card-title class="">
              FREQUENTLY ASKED <br> QUESTIONS
          </v-card-title>

          <!-- Ovo je kontejner koji ih drži u redu -->
              <div class="questions">
                  <v-expansion-panels>
                      <v-expansion-panel v-for="(item, index) in faqList" :key="index">
                          <v-expansion-panel-header class="question">{{ item.question }}</v-expansion-panel-header>
                          <v-expansion-panel-content class="answer">{{ item.answer }}</v-expansion-panel-content>
                      </v-expansion-panel>
                  </v-expansion-panels>
              </div>
              <br>
              <br>
              <h1 style="font-size: 18px; padding-left: 15px; padding-right: 15px;">Feel free to send an inquiry if you have any questions</h1>
              <v-form @submit.prevent="submitForm" ref="form" v-model="valid" style="background-color: white; margin-left: 20px; margin-bottom: 40px; margin-top: 30px; width: 300px;">
                  <v-text-field v-model="form.fullName" label="First and last name" :rules="[rules.required]" required></v-text-field>
                  <v-text-field v-model="form.phone" label="Mobile number" :rules="[rules.required]" required></v-text-field>
                  <v-text-field v-model="form.country" label="Where are you from" :rules="[rules.required]" required></v-text-field>
                  <v-text-field v-model="form.email" label="Email" :rules="[rules.required, rules.email]" required></v-text-field>
                  <v-textarea v-model="form.question" label="What are you interested in?" :rules="[rules.required]" required></v-textarea>
                  <center>
                  <v-btn type="submit" color="light-blue" style="color: white;" elevation="2">Send</v-btn>
                  </center>
              </v-form>
      </v-card>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      valid: false,
      form: {
        fullName: '',
        phone: '',
        email: '',
        question: '',
        country: ''
      },
      rules: {
        required: value => !!value || 'Required field!',
        email: value => /.+@.+\..+/.test(value) || 'Please enter a valid email address!'
      },
      snackbar: false, // Za kontrolu prikaza snackbar obavijesti
      snackbarMessage: '', // Tekst obavijesti
      snackbarColor: '', // Boja obavijesti (zeleni, crveni...)
      faqList: [
        { question: "How to book an apartment?", answer: "You can book the apartment via Booking, or contact us through the form." },
        { question: "Is Wi-Fi available?", answer: "Yes, all apartments have free high-speed Wi-Fi." },
        { question: "Is the beach nearby?", answer: "Yes, the beach is just a 3-minute walk away." },
        { question: "Is free parking available?", answer: "Yes, each apartment comes with one free parking spot." },
        { question: "Are the pets allowed in the apartment?", answer: "Yes, they are." },
        { question: "Do all the apartments have access to the pool?", answer: "Yes, they do." }
      ]
    };
  },
  methods: {
    submitForm() {
    // Prvo provjerite da li je obrazac validan
    if (this.$refs.form.validate()) {
      const emailData = {
        from_name: this.form.fullName,
        from_email: this.form.email,
        reply_to: this.form.email,
        to_email: 'croatiavacation05@gmail.com',
        fullName: this.form.fullName,
        phone: this.form.phone,
        country: this.form.country,
        question: this.form.question,
        message: `
          <h3>You have a new contact form submission</h3>
          <p><strong>Name:</strong> ${this.form.fullName}</p>
          <p><strong>Email:</strong> ${this.form.email}</p>
          <p><strong>Phone:</strong> ${this.form.phone}</p>
          <p><strong>Country:</strong> ${this.form.country}</p>
          <p><strong>Question:</strong> ${this.form.question}</p>
        `
      };

      emailjs.send('service_up4n9ee', 'template_atm9kdp', emailData, 'sFLXs5tV3k0YzQFA7')
  .then((response) => {
    alert('Email successfully sent!');
    console.log(response);
    window.location.reload(); // Refresh nakon što korisnik klikne "OK"
  }, (error) => {
    alert('Failed to send email. Please try again.');
    console.error(error);
    window.location.reload(); // Refresh nakon što korisnik klikne "OK"
  });
    
    }
  },
  clearFields(){
    this.form.fullName = '';
    this.form.country = '';
    this.form.email = '';
    this.form.phone = '';
    this.form.question = '';
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
</style>