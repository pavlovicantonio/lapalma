<template>
    <div>
      <div class="AML_firstDiv">
        <v-toolbar-title style="font-family: 'Pacifico', cursive;">La Palma Apartments 🌴</v-toolbar-title>
      </div>
  
      <div class="AML_secondDiv">
        <v-card elevation="11" outlined shaped class="sirinaVueCardss1" color="white" style="margin-bottom: 50px;">
          <v-card-title style="font-size: 1.5rem; font-weight: 600; color: #1976d2; margin-bottom: 24px; line-height: 1.4; text-align: left;">FAQ's</v-card-title>
  
          <div class="questions" style="margin-bottom: 50px;">
            <v-expansion-panels>
              <v-expansion-panel v-for="(item, index) in faqList" :key="index">
                <v-expansion-panel-header class="question"><b>{{ item.question }}</b></v-expansion-panel-header>
                <v-expansion-panel-content class="answer">{{ item.answer }}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-card>

        <v-sheet class="pa-4" elevation="2">
          <h1 style="font-size: 1.5rem; font-weight: 600; color: #1976d2; margin-bottom: 24px; line-height: 1.4; text-align: left;">Ask us anything!</h1>
  
          <v-form @submit.prevent="submitForm" ref="form" v-model="valid" class="contact-form">
            <v-text-field v-model="form.fullName" label="First and last name" :rules="[rules.required]" required />
            <v-text-field v-model="form.phone" label="Mobile number" :rules="[rules.required]" required />
            <v-text-field v-model="form.country" label="Where are you from" :rules="[rules.required]" required />
            <v-text-field v-model="form.email" label="Email" :rules="[rules.required, rules.email]" required />
            <v-textarea v-model="form.question" label="What are you interested in?" :rules="[rules.required]" required />
            <v-btn type="submit" color="light-blue" class="send-btn" elevation="2">Send</v-btn>
          </v-form>
        </v-sheet>
        <br>
        <v-sheet class="pa-4" elevation="2" style="margin-bottom: 50px;">
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
          <v-row>

                    <v-col cols="12" md="4" class="text-left mt-4 mt-md-0">
                    <v-btn
                        class="mt-4"
                        color="primary"
                        dark
                        href="/lapalmapdf.pdf"
                        target="_blank"
                        download
                      >
                      La Palma Flyer (PDF)
                      <v-icon right>mdi-file-download</v-icon>
                      </v-btn>
                    </v-col>
            </v-row>

            <br>
            <!-- Sredina: copyright -->
            <v-col cols="12" md="4" class="text-center mt-4 mt-md-0">
              <div style="color:#333;">
                © {{ new Date().getFullYear() }} La Palma Apartments<br />
                Website created by <strong style="color: #1976d2;"><a href="https://pavlovicantonio.netlify.app" target="_blank">Antonio Pavlović</a></strong>
              </div>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="4" class="text-center mt-4 mt-md-0">
            <v-btn icon href="https://facebook.com" target="_blank">
              <v-icon color="#1976d2">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon href="https://instagram.com" target="_blank">
              <v-icon color="#1976d2">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon href="https://facebook.com" target="_blank">
              <v-icon color="#1976d2">mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn icon href="https://facebook.com" target="_blank">
              <v-icon color="#1976d2">mdi-gmail</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        
        </v-container>
      </v-sheet>

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
        faqList: [
          { question: "How to book an apartment?", answer: "You can book the apartment via apartment section, or contact us through the form down." },
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
            .then(() => {
              alert('Email successfully sent!');
              window.location.reload();
            })
            .catch(() => {
              alert('Failed to send email. Please try again.');
              window.location.reload();
            });
        }
      }
    }
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: #f2f2f2;
    margin: 0;
  }
  
  .AML_firstDiv {
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
  
  .AML_secondDiv {
    background-color: #F5ECD5;
    padding: 80px 12px 40px 12px;
    width: 100%;
    box-sizing: border-box;
  }
  
  .v-card {
    border-radius: 16px !important;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .v-card:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  .v-card-title {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 10px;
    color: #333;
  }
  
  .questions {
    padding: 0 8px;
  }
  
  .v-expansion-panel-header {
    font-weight: 500;
    font-size: 16px;
  }
  
  .v-expansion-panel-content {
    font-size: 15px;
    color: #555;
  }
  
  h1 {
    font-size: 18px;
    text-align: center;
    padding: 20px 10px 0 10px;
    font-weight: 500;
    color: #333;
  }
  
  .contact-form {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    padding: 10px;
  }
  
  .v-text-field,
  .v-textarea {
    margin-bottom: 16px;
  }
  
  .send-btn {
    width: 100%;
    font-weight: 600;
    border-radius: 8px;
    text-transform: none;
    color: white;
  }
  </style>
  