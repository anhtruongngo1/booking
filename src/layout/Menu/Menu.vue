<template>
    <header class="flex justify-between bg-mainColor text-white h-[40px] relative">
        <MenuList items="{MENU_ITEMS}" />
        <div class="header-tabs-container"></div>
        <div class="flex items-center gap-2 mr-[5%]">
            <span class="mr-[10px]" v-if="local === 'en'"> {{ profile.firstName }} {{ profile.lastName }}</span>
            <span class="mr-[10px]" v-else-if="local === 'vn'"> {{ profile.lastName }} {{ profile.firstName }}</span>
            <span>{{ url.name }}</span>
            <span :class="{ 'text-red-700 cursor-pointer': local === 'vn' }" class="cursor-pointer">
                <span value="vn" @click.prevent="callSetLangActions('vn')">VN</span>
            </span>
            <span class="cursor-pointer" :class="{ 'text-red-700 cursor-pointer': local === 'en' }">
                <span value="en" @click.prevent="callSetLangActions('en')">EN</span>
            </span>
                <div class="text-white px-[10px] hover:bg-mainColor " title="Log out">
                    <font-awesome-icon :icon="['fasl', 'right-from-bracket']" />
            </div>
        </div>
    </header>
</template>

<script>
import { computed , ref} from 'vue';
import { useStore } from 'vuex';
import i18n from '@/language/i18n';
export default {
    setup() {
        const MENU_ITEMS = [
        {
            title: `${$t('menu.admin.user')}`,
            // children: {
            //     title: 'user',
            //     data: [
            //         {
            //             type: 'user',
            //             to  : '/system/manager-user',
            //             title: t('menu.admin.manage-user'),
            //         },
            //            {
            //             type: 'user',
            //             to  : '/system/manager-doctor',
            //             title: t('menu.admin.manage-doctor'),
            //         },
            //            {
            //             type: 'user',
            //             to  : '/system/manager-schedule',
            //             title:  t('menu.doctor.manage-schedule'),
            //         },
            //     ],
            // },
        },
        //   {
        //     title: t('menu.admin.clinic'),
        //     children: {
        //         title: 'clinic',
        //         data: [
        //             {
        //                 type: 'clinic',
        //                 to : '/system/manager-clinic',
        //                 title: t('menu.admin.manage-clinic'),
        //             }
        //         ],
        //     },
        // },
        //   {
        //     title: t('menu.admin.specialty'),
        //     children: {
        //         title: 'special',
        //         data: [
        //             {
        //                 type: 'special',
        //                 to : '/system/manager-special',
        //                 title: t('menu.admin.manage-specialty'),
        //             }
        //         ],
        //     },
        // },
        //  {
        //     title: t('menu.admin.handbook'),
        //     children: {
        //         title: 'Handbook',
        //         data: [
        //             {
        //                 type: 'Handbook',
        //                 to : '/system/manage-handbook',
        //                 title: t('menu.admin.manage-handbook'),
        //             }
        //         ],
        //     },
        // },
    
    ];
        const store = useStore();
        const local = computed(() => i18n.global.locale);
        const profile = computed(() => store.state.profile);
       function callSetLangActions(lang){
         store.dispatch("setLang", lang)
        console.log('check' , lang);
        }
        return {
            MENU_ITEMS ,
            profile,
            local,
            callSetLangActions
        };
    },
};
</script>

<style></style>
