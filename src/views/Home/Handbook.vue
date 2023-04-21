<template>
      <div className="h-80 w-full bg-[#F5F5F5]">
            <div className="mx-44 flex  flex-col ">
            <div class="h-[60px] mb-5 pt-5 ">
                    <span class="text-xl font-semibold">Cẩm nang</span>
                    <button class="text-black uppercase cursor-pointer float-right px-4 py-3 border-none outline-none block bg-[#ebebeb] text-[#ebebeb] hover:text-white hover:bg-[#f7d800]">
                        Tất cả bài viết
                    </button>
                </div>
            <div class="text-red-500">
                <!-- <div  v-for="( slide , index) in slides" :key="index">
                  
                     <div>{{ slide.name }}</div> 
                </div> -->
                <Carousel v-bind="settings" :breakpoints="breakpoints">
                    <Slide v-for="( slide , index) in slides" :key="index">
                            <div class="flex flex-row gap-5 w-full ">
                                <div
                                    class="`basis-1/2 w-[50%] h-[200px] bg-cover bg-white bg-center bg-no-repeat`"
                                    :style="`background-image : url(${slide.url})`"

                                ></div>
                                <div class="basis-1/2 ">
                                    <h3>{{ slide.name }}</h3>
                                </div>                    
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
    name: 'Handbook',
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
                itemsToShow: 2,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 2,
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
