<template>
    <div class="form-container">
      <img
        src="@/assets/mail.svg"
        alt="Mail"
        class="svg-image"
      />
      <form @submit.prevent="handleSubmit" class="contact-form">
        <h1 class="text-start pb-3">Want to get in touch?</h1>

        <div class="mb-3">
          <label for="name" class="form-label">Your Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            class="form-control"
            required
            placeholder="Enter your name"
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label text-start">Your Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-control"
            required
            placeholder="Enter your email"
          />
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Your Message</label>
          <textarea
            id="message"
            v-model="message"
            class="form-control"
            required
            placeholder="Enter your message"
            rows="5"
          ></textarea>
        </div>

        <div class="text-center mt-4">
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            <span v-if="isSubmitting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            {{ isSubmitting ? ' Submitting...' : 'Submit' }}
          </button>
        </div>

        <div v-if="submissionStatus" :class="`mt-3 alert ${submissionClass}`" role="alert">
          {{ submissionMessage }}
        </div>
      </form>
    </div>
  </template>


<script>
import {
    ref
} from 'vue';

export default {
    name: 'GetInTouchForm',
    setup() {
        // Form fields
        const name = ref('');
        const email = ref('');
        const message = ref('');

        // Submission state
        const isSubmitting = ref(false);
        const submissionStatus = ref(false);
        const submissionMessage = ref('');
        const submissionClass = ref('');

        // Handle form submission
        const handleSubmit = async () => {
            // Simple validation (optional, since 'required' is used in inputs)
            if (!name.value || !email.value || !message.value) {
                submissionStatus.value = true;
                submissionMessage.value = 'Please fill in all fields.';
                submissionClass.value = 'alert-danger';
                return;
            }

            isSubmitting.value = true;
            submissionStatus.value = false;

            try {
                // Simulate form submission (e.g., API call)
                await fakeApiCall({
                    name: name.value,
                    email: email.value,
                    message: message.value,
                });

                // Reset form fields
                name.value = '';
                email.value = '';
                message.value = '';

                // Show success message
                submissionStatus.value = true;
                submissionMessage.value = 'Your message has been sent successfully!';
                submissionClass.value = 'alert-success';
            } catch (error) {
                // Show error message
                submissionStatus.value = true;
                submissionMessage.value = 'There was an error sending your message. Please try again.';
                submissionClass.value = 'alert-danger';
            } finally {
                isSubmitting.value = false;
            }
        };

        // Fake API call function (replace with real API call)
        const fakeApiCall = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // Simulate success response
                    resolve('Success');
                    // To simulate an error, uncomment the line below and comment out the resolve line
                    // reject('Error');
                }, 2000);
            });
        };

        return {
            name,
            email,
            message,
            isSubmitting,
            submissionStatus,
            submissionMessage,
            submissionClass,
            handleSubmit, // Ensure handleSubmit is returned
        };
    },
};
</script>

<style lang="scss" scoped>
.form-container {
  position: relative;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 2rem;
  z-index: 1; // Ensure container is above the SVG
}

.svg-image {
  position: absolute;
  top: -50px; // Adjust as needed
  right: -50px; // Adjust as needed
  width: 400px; // Adjust size as needed
  height: auto;
  z-index: 0; // Ensure SVG is behind the form
}

.contact-form {
  position: relative;
  z-index: 1; // Ensure form content is above the SVG
  background-color: rgba(255, 255, 255, 0.0); // Transparent background
}

.btn {
  color: #ffffff;
  font-size: x-large;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.274);
}

.btn:active {
  color: #ffffff8a;
  font-size: x-large;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.274);
}

.form-label {
  color: white;
  font-size: 21px;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.418);
  opacity: 1; /* Firefox */
}

.form-control {
  background-color: rgba($color-primary, 0.2);
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.274);
  font-size: 21px;
  min-height: 4rem;
  color: #ffffff;
  border-radius: 1rem;
  border: none;
  box-sizing: border-box;
}
</style>
