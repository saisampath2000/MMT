import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { tokenSave } from './Data/token';

ReactDOM.render(<App />,document.getElementById('root'));


function generateNewToken() {
    
    let bodyData = new URLSearchParams();
	bodyData.append("client_id","FtIATpgjGqVdM3lfxnLMK9cpz4K53e0G");
	bodyData.append("client_secret","0s4AMqfpQjH1JVqK");
	bodyData.append("grant_type", "client_credentials");

    const urlNewToken = "https://test.api.amadeus.com/v1/security/oauth2/token";
	//console.log(bodyData);

	return new Promise((resolve, reject) => {
		fetch(urlNewToken, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: bodyData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				// const tokenData = {
				// 	token: data,
				// };

               tokenSave.token=data.access_token;
				
			})
			.catch((err) => reject(err));
	});
}


generateNewToken();