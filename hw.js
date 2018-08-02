

class HW{

	constructor(id,name){

		this.id1 = id;
		this.name1 = name;
	}

	getId(){

		return this.id1;
	}

	getName(){

		return this.name1;
	}

}

var obj  = new HW(14,"Sahim")

console.log(

	obj.getId(),
	obj.getName()

	)
