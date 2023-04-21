<template>
    <div className="h-[300px] w-full bg-white cursor-pointer">
            <div className="mx-[170px] flex flex-col">
                <div className="h-[60px] mb-5 pt-5 ">
                    <span className='text-xl font-semibold'>Bác sĩ nổi bật tuần qua</span>
                    <button className="text-black uppercase cursor-pointer float-right px-4 py-3 border-none outline-none block bg-[#ebebeb] text-[#ebebeb] hover:text-white hover:bg-[#f7d800]">
                        tim kiếm
                    </button>
                </div>
                <div >
                </div>
                <Carousel v-bind="settings" :breakpoints="breakpoints">
                    <Slide v-for="( slide , index) in slides" :key="index">
                        <div className="border border-solid border-[#EEEEEE] w-full m-2">
                            <div className="w-full h-[200px] bg-center bg-cover bg-no-repeat bg-white flex items-center flex-col">
                                <div className="w-full  h-[120px] mt-2.5 flex  justify-center">
                                    <img className='w-[120px] h-[120px] rounded-[50%]' :src="`${slide.url}`" />
                                </div>
                                <span className='block text-center'>{{ slide.name }}</span>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>
</template>

<script>
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
    name: 'Outstanding',
    setup() {
        const slides = ref([
            {
                name: 'khoa tam ly',
                url: 'https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678187349/booking-care/111237-tam-ly-2_d3mbab.jpg',
            },
            {
                name: 'khoa tam ly',
                url: 'https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678187349/booking-care/111237-tam-ly-2_d3mbab.jpg',
            },
            {
                name: 'khoa tam ly',
                url: 'https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678187349/booking-care/111237-tam-ly-2_d3mbab.jpg',
            },
            {
                name: 'khoa tam ly',
                url: 'https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678187349/booking-care/111237-tam-ly-2_d3mbab.jpg',
            },
            {
                name: 'khoa tam ly',
                url: 'https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678187349/booking-care/111237-tam-ly-2_d3mbab.jpg',
            },
            {
                name: 'khoa tam ly',
                url: 'https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678187349/booking-care/111237-tam-ly-2_d3mbab.jpg',
            },
            {
                name: 'khoa tam ly',
                url: 'https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678187349/booking-care/111237-tam-ly-2_d3mbab.jpg',
            },
            {
                name: 'khoa tam ly',
                url: 'https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678187349/booking-care/111237-tam-ly-2_d3mbab.jpg',
            },
            {
                name: 'khoa tam ly',
                url: 'https://res.cloudinary.com/dl0wt2mgx/image/upload/v1678187349/booking-care/111237-tam-ly-2_d3mbab.jpg',
            },
        ]);
        const settings = {
            itemsToShow: 1,
            snapAlign: 'center',
        };
        const breakpoints = {
            // 700px and up
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 4,
                snapAlign: 'start',
            },
        };
        return { slides, settings, breakpoints };
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
};
</script>

<style></style>
jj