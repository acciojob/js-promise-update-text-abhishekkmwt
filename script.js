//your JS code here. If required.
function a(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000)
	})
}

a().then((data)=>{
	const ele = document.getElemetById("output");
	ele.innerText="data";
	div.appendChild(ele);
})