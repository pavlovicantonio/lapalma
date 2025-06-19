<template>
  <div class="none">
    <center>
      <div class="padmarg"></div>

      <v-row class="d-flex justify-center" no-gutters>
        <!-- FAQ sekcija -->
        <v-col cols="12" md="6" class="pa-4">
          <v-card elevation="11" outlined shaped color="white" style="border-radius: 30px;">
            <v-card-title class="d-flex justify-center align-center">
              FREQUENTLY ASKED QUESTIONS
            </v-card-title>
            <v-expansion-panels>
              <v-expansion-panel v-for="(item, index) in faqList" :key="index">
                <v-expansion-panel-header class="question">{{ item.question }}</v-expansion-panel-header>
                <v-expansion-panel-content class="answer">{{ item.answer }}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-btn
              class="mt-4"
              color="primary"
              dark
              href="/lapalmapdf.pdf"
              target="_blank"
              download
            >
            Download La Palma Flyer (PDF)
            <v-icon right>mdi-file-download</v-icon>
            </v-btn>
          </v-card>
        </v-col>

        <!-- Kontakt forma -->
        <v-col cols="12" md="6" class="pa-4">
          <v-card elevation="11" outlined shaped color="white" style="border-radius: 30px; max-width: 500px;">
            <v-card-title class="d-flex justify-center align-center">
              Feel free to send an inquiry if you have any questions
            </v-card-title>
            <v-form @submit.prevent="submitForm" ref="form" v-model="valid">
              <v-text-field v-model="form.fullName" label="First and last name" :rules="[rules.required]" required />
              <v-text-field v-model="form.phone" label="Mobile number" :rules="[rules.required]" required />
              <v-text-field v-model="form.country" label="Where are you from" :rules="[rules.required]" required />
              <v-text-field v-model="form.email" label="Email" :rules="[rules.required, rules.email]" required />
              <v-textarea v-model="form.question" label="What are you interested in?" :rules="[rules.required]" required />
              <v-btn type="submit" color="light-blue" elevation="2" block>Send</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </center>
    <v-sheet>
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
            +393279431662<br>  
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
    </v-sheet>
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
        { question: "How to book an apartment?", answer: "You can book the apartment via apartment section, or contact us through the form right." },
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
  },
  openWhatsapp2(){
    const phoneNumber = "+393279431662";
    const message = `I%20am%20interested%20in%20your%20apartments!`;
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, "_blank");
  },
  sendGmail1(){
      const email = "croatiavacation05@gmail.com";
      const subject = `Inquiry about Apartments!`;
      const body = `I am interested in your apartments! Please send me more information.`;
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, "_blank");
  }
}
};
</script>

<style scoped>
.questions,
.info {
  height: auto;
  width: 50%;
  padding: 16px;
}

.answer {
  background-color: #F2EFE7;
}

.question {
  background-color: #F2EFE7;
}

.clickable-image {
  cursor: pointer;
  transition: transform 0.2s;
}

.clickable-image:hover {
  transform: scale(1.05);
}

.sirinaVueCardss1 {
  margin-top: 30px;
  width: 700px;
  text-align: justify;
  padding: 15px;
  height: auto;
}

.none {
  background-image: url(../assets/backgroundimage.jpg);
  background-attachment: fixed;
  height: 100%;
}

.padmarg {
  height: 80px;
}

/* Styles for the Snackbar */
.v-snackbar {
  z-index: 9999 !important; /* Ensure snackbar is always visible */
  width: auto;
  max-width: 500px;
  margin: 0 auto;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

/* Make the submit button more visible */
.v-btn {
  color: white;
  font-weight: bold;
  border-radius: 20px;
  margin-top: 10px;
}

.v-text-field,
.v-textarea {
  margin-bottom: 15px;
}

.v-text-field input,
.v-textarea textarea {
  font-size: 14px;
}

.v-form {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-card {
  padding: 20px;
}

.v-expansion-panel {
  margin-bottom: 10px;
}

.v-expansion-panel-header {
  background-color: #f2efe7;
  font-weight: bold;
}

.v-expansion-panel-content {
  background-color: #f2efe7;
}

</style>
