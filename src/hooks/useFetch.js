import { useState, useEffect } from "react";
import axios from "../api";

export const useFetch = (path, params, deps = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);  // Loading dastlab true
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(path, { params });
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, deps);

    return { data, loading, error };
};
// import axios from "../api";

// export const useFetch = (path, params, deps = []) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);  // Loading dastlab true
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(path, { params });
//                 setData(response.data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, deps);

//     return { data, loading, error };
// };



// // import { useState, useEffect } from "react";
// // import axios from "../api";

// // export const useFetch = (path, params, deps=[]) => {
// //     const [data, setData] = useState(null)
// //     const [loading, setLoading] = useState(false)
// //     const [error, setError] = useState(null)

// //     useEffect(()=> {
// //         setLoading(true)
// //         axios
// //             .get(path, {params})
// //             .then(res => setData(res.data))
// //             .catch(err => setError(err))
// //             .finally(()=> setLoading(false))
// //     }, [...deps])

// //     return {data, loading, error}
// // } 