/* 
    Checking for valid data types: text, integer, and boolean
*/
const checkText = (req, res, next) => {
	const { name, description, seller, image } = req.body;
	if (name && description && seller && image) {
		// console.log("text is ok")
		next();
	} else {
		res.status(400).json({ error: "text is required" });
	}
};

const checkInteger = (req, res, next) => {
	const { price, rating } = req.body;
	if (typeof price === "number" && typeof rating === "number") {
		// console.log("number is ok")
		next();
	} else {
		res.status(400).json({ error: "number is required" });
	}
};

const checkBoolean = (req, res, next) => {
	const { featured } = req.body;
	if (typeof featured === "boolean") {
		// console.log("boolean is ok")
		next();
	} else {
		res.status(400).json({ error: "boolean is required" });
	}
};

module.exports = {
	checkText,
	checkInteger,
	checkBoolean,
};
