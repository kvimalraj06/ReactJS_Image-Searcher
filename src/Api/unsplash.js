//Api configuration

import axios from 'axios'


export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {Authorization: 'Client-ID x-cjCWMJvsJWUAzp9mltJ_prb51h42ePhK4qgKV6XXI'}
        
});
