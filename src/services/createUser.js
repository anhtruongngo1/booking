import axios from '../../axios';
import { ref } from 'vue';
export default function () {
    const messege = ref({});
    const handleCreateUser = async (data) => {
        try {
            const res = await axios.post(`/api/create-new-user`, data);

            if (res && res.errCode === 0) {

            } else {
                messege.value = res.errMessage;
            }
            return res;
        } catch (err) {
            messege.value = err;
        }
    };
    return { messege , handleCreateUser };
}
