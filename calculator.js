function set($event){
			
		if(parseInt($event.value)<10){
			document.getElementById("inp").value+=$event.value;
		}else if($event.value==="+"){
			document.getElementById("inp").value+="+";
		}else if($event.value==="-"){
			document.getElementById("inp").value+="-";
		}else if($event.value==="/"){
			document.getElementById("inp").value+="/";
		}else if($event.value==="*"){
			document.getElementById("inp").value+="*";
		}else if($event.value==="cls"){
			document.getElementById("inp").value="";
		}



		if($event.value==="="){
			let value= document.getElementById("inp").value;
				if(value.includes("+")){
					value=value.split("+");
					let ans=parseInt(value[0])+parseInt(value[1]);
					document.getElementById("inp").value=ans;
				}else if(value.includes("-")){
					value=value.split("-");
					let ans=parseInt(value[0])-parseInt(value[1]);
					document.getElementById("inp").value=ans;
				}else if(value.includes("/")){
					value=value.split("/");
					let ans=parseInt(value[0])/parseInt(value[1]);
					document.getElementById("inp").value=ans;
				}else if(value.includes("*")){
					value=value.split("*");
					let ans=parseInt(value[0])*parseInt(value[1]);
					document.getElementById("inp").value=ans;
				}

		}
}