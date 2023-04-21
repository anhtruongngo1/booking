<template>
    <div className="h-72 w-full bg-white ">
        <div className="mx-44 flex  flex-col ">
            <div className="h-[60px] mb-5 pt-5 ">
                <span className="text-xl font-semibold">{{ $t('homeheader.popular-specialty') }}</span>
                <button
                    className="text-black uppercase cursor-pointer float-right px-4 py-3 border-none outline-none block bg-[#ebebeb] text-[#ebebeb] hover:text-white hover:bg-[#f7d800]"
                >
                {{ $t('button.more') }}
                </button>
            </div>
            <div className="text-red-500" >
                <!-- <div  v-for="( slide , index) in slides" :key="index">
                  
                     <div>{{ slide.name }}</div> 
                </div> -->
                <Carousel v-bind="settings" :breakpoints="breakpoints">
                    <Slide v-for="( slide , index) in slides" :key="index">
                        <div>
                            <div
                        :class="`w-[278px] h-[150px] bg-cover  bg-center bg-no-repeat`"
                        :style="`background-image : url(${slide.url})`"

                    ></div>
                     <div>{{ slide.name }}</div> 
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
import { computed, ref } from 'vue';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import anh1 from "@/assets/anh1.png"
export default {
    name: 'specialty',
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
                url: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
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
                itemsToShow: 5,
                snapAlign: 'start',
            },
        };

        return { slides, settings, breakpoints  };
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        
    },
};
</script>

<style></style>
