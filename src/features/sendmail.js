import { setLoading, setMessage, setError } from '@/slices/contactSlice';

export const sendContactForm = (formData) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await fetch('/api/send-mail', { method: 'POST', body: JSON.stringify({ formData }), });
        const { message, success } = await response.json();
        if (success) {
            dispatch(setMessage(message));
            dispatch(setError(false));
        } else if (!success) {
            dispatch(setMessage(error));
            dispatch(setError(true));
        }
    } catch (error) {
        dispatch(setMessage("Error sending message."));
        dispatch(setError(true));
    } finally {
        dispatch(setLoading(false));
    }
};
