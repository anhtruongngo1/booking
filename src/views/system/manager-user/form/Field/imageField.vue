<template>
  <div className="w-[24%]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
            <div className="preview-img-container">
                <input
                @input="$emit('update:modelValue', $event.target)"
                 id="previewImg" type="file" accept="image/*" hidden />
                <label
                    htmlFor="previewImg"
                    className="flex max-w-[100px] cursor-pointer rounded-sm p-[5px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus-visible:ring-blue-500 focus-visible:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:ring-blue-500 dark:focus-visible:border-blue-500"
                >
                    Tải ảnh
                    <img className="h-7" :src="upload" />
                </label>
                <div className="h-24 preview-image">
                    <template v-if="preview">
                        <img :src="preview" class="w-[50%] cursor-pointer" />
                    </template>
                </div>
            </div>
        </div>
</template>

<script>
import upload from '@/assets/upload.png';
import {ref} from "vue"

export default {
    props: {
        preview : String
    },
    setup() {
        // const preview = ref(null);
        const image = ref(null);
        // function previewImage(event) {
        //     var input = event.target;
        //     if (input.files) {
        //         var input = event.target;
        //         if (input.files) {
        //             var reader = new FileReader();
        //             reader.onload = (e) => {
        //                 preview.value = e.target.result;
        //             };
        //             reader.readAsDataURL(input.files[0]);
        //         }
        //     }
        // }

        return {
            upload,
            // previewImage
        }
    }
}
</script>

<style>

</style>