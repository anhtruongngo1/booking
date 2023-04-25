<template>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">FistName</th>
                    <th scope="col" className="px-6 py-3">LastName</th>
                    <th scope="col" className="px-6 py-3">Role</th>
                    <th scope="col" className="px-6 py-3">Addrress</th>
                    <th scope="col" className="px-6 py-3">Image</th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in listData"
                    :key="item.id"
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.email }}
                    </th>
                    <td className="px-6 py-4">{{ item.firstName }}</td>
                    <td className="px-6 py-4">{{ item.lastName }}</td>
                    <td className="px-6 py-4">{{ item.roleData.valueVi }}</td>
                    <td className="px-6 py-4">{{ item.address }}</td>
                    <td className="px-6 py-4">
                        <img className="h-12 w-12 bg-cover bg-no-repeat bg-center cursor-pointer" :src="item.image" />
                    </td>
                    <td className="px-0 py-4 text-right flex gap-2">
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="text-center mt-2">
        <button
            :disabled="pageIndex <= 0"
            @click="prevPage"
            type="button"
            className="disabled:opacity-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            <font-awesome-icon :icon="['fas', 'arrow-left-long']" />
            <span className="sr-only">Icon description</span>
        </button>
        <button
            :disabled="pageIndex + 1 >= totalPage"
            @click="nextPage"
            type="button"
            className="disabled:opacity-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            <font-awesome-icon :icon="['fass', 'arrow-right-long']" />
            <span className="sr-only">Icon description</span>
        </button>
    </div>
</template>

<script>
import apiListUser from '@/services/apiListUser';
import { ref, computed } from 'vue';
export default {
    setup() {
        const { listData, errorData, fetchListUser, totalPage } = apiListUser();
        const pageIndex = ref(0);
        fetchListUser(pageIndex.value);
        function nextPage() {
            pageIndex.value = pageIndex.value + 1;
            fetchListUser(pageIndex.value);
        }
        function prevPage() {
            pageIndex.value = pageIndex.value - 1;
            fetchListUser(pageIndex.value);
        }
        computed(() =>  fetchListUser(pageIndex.value) )
        return {
            listData,
            pageIndex,
            totalPage,
            nextPage,
            prevPage
        };
    },
};
</script>

<style></style>
