const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            token:null,
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			
            synctokenFromSessionStorage: () => {
                const token = sessionStorage.getItem("token");
                if (token && token!== "" && token!== undefined) setStore({token:token})
            },

            login: async(username,password) => {
                const opts = {
                    method:'POST',
                    headers:{
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type':'application/json', 
                    },
                    body:JSON.stringify({
                        username:username,
                        password:password 
                    })
                };
                
                try{
                    const resp = await fetch('/api/customer',opts)
                if (resp.status !== 200){
                    alert("there hasn been an error")
                    return false;
                }

                const data = await resp.json();
                sessionStorage.setItem("token",data.access_token);
                setStore({token:data.access_token})
                return true;
                }
                catch(error){
                    console.error("there is an error")
                }
			}   
            },    
        

			
		};
};

export default getState;