const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

// console.log(token);

const urlNewToken = "https://test.api.amadeus.com/v1/security/oauth2/token";
const url =
	"https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-11-11&adults=1";

//const baseSearchUrl='https://test.api.amadeus.com/v2/shopping/flight-offers';
// on expired token it will give :401


function getToken(){
	const getData=require('./token.json')
	return getData.token.access_token;
}

console.log(getToken());

function generateNewToken() {
    
    let bodyData = new URLSearchParams();
	bodyData.append("client_id","FtIATpgjGqVdM3lfxnLMK9cpz4K53e0G");
	bodyData.append("client_secret","0s4AMqfpQjH1JVqK");
	bodyData.append("grant_type", "client_credentials");

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
				const tokenData = {
					token: data,
				};
				
				// writeFile("./token.json", JSON.stringify(tokenData), (err) => {
				// 	if (err) {
				// 		console.log("error while writing token");
				// 	}
				// 	resolve();
				// });
			})
			.catch((err) => reject(err));
	});
}

//generateNewToken();

function makeQueryUrl(obj){
	let str='';
	for(let i=0;i<obj.length;i++){
		if(i===0){
			str+=`?${obj[i][0]}=${obj[i][1]}`
		}else{
			str+=`&${obj[i][0]}=${obj[i][1]}`
		}
	}
	return str;
}

export default function getFlightOffers() {

	// let params = [
	// 	["originLocationCode","SYD"],
	// 	["destinationLocationCode","BKK"],
	// 	["departureDate","2021-11-14"],
	// 	["adults","1"],
	// ]

	console.log("getOffer Called");

	// const queryUrl=baseSearchUrl+makeQueryUrl(params);
	// console.log(queryUrl);

	// fetch(url, {
	// 	headers: {
	// 		Authorization: `Bearer ${getToken()}`,
	// 	},
	// })
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		console.log(data);
	// 	})
	// 	.catch((err) => console.log(err));
}

//getFlightOffers();

