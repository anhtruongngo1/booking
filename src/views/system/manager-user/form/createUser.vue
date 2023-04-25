<template>
    <form className="w-full flex flex-wrap gap-x-[1%]" @submit.prevent="createUser">
        <emailField v-model="user.email" />
        <PasswordFieldVue v-model="user.password" />
        <firstNameField v-model="user.firstName" />
        <lastNameFieldVue v-model="user.lastName" />
        <PhoneFieldVue v-model="user.phoneNumber" />
        <addressFieldVue v-model="user.address" />
        <genderField v-model="user.gender" />
        <roleField v-model="user.role" />
        <positionFieldVue v-model="user.position" />
        <imageFieldVue v-model="preview" @change="previewImage" v-bind:preview="user.image" />
        <div className="w-full my-4">
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus-visible:ring-blue-800"
            >
                SAVE
            </button>
            <div>
            </div>
        </div>
    </form>
</template>

<script>
import addressFieldVue from './Field/addressField.vue';
import emailField from './Field/emailField.vue';
import firstNameField from './Field/firstNameField.vue';
import lastNameFieldVue from './Field/lastNameField.vue';
import PasswordFieldVue from './Field/PasswordField.vue';
import PhoneFieldVue from './Field/PhoneField.vue.vue';
import genderField from './Field/genderField.vue';
import roleField from './Field/roleField.vue';
import positionFieldVue from './Field/positionField.vue';
import { reactive , ref } from 'vue';
import imageFieldVue from './Field/imageField.vue';
export default {
    setup() {
        let user = reactive({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: 'M',
            role: 'R1',
            position: 'P0',
            image : ''
        });
        const preview = ref('')
        const createUser = () => {
            console.log('check user',user);
        };
        function previewImage(event) {
            var input = event.target;
            if (input.files) {
                var input = event.target;
                if (input.files) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                       user.image = e.target.result;
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            }
        }
        return {
            user,
            createUser,
            previewImage,
          
        };
    },
    components: {
        emailField,
        firstNameField,
        PhoneFieldVue,
        PasswordFieldVue,
        lastNameFieldVue,
        addressFieldVue,
        genderField,
        roleField,
        positionFieldVue,
        imageFieldVue,
    },
};
</script>

<style></style>
