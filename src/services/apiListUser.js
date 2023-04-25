import axios from '../../axios';
import { ref } from 'vue';
export default function () {
    const listData = ref({});
    let errorData = ref('');
    let totalPage = ref(null)
    const fetchListUser = async (pageIndex) => {
        try {
            const res = await axios.get(`/api/get-all-users?page=${pageIndex}&size=6`);

            if (res && res.errCode === 0) {
          
                listData.value = res.users.data;
                totalPage.value = res.users.totalPages
   
            } else {
                errorData.value = res.errMessage;
            }
            return res;
        } catch (err) {
            errorData.value = err;
        }
    };
    return { listData, errorData, fetchListUser , totalPage };
}
