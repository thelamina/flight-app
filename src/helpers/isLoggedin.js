const myData = JSON.parse(localStorage.getItem('user'));
const data = { username: 'demo', password: 'demo' };
console.log(myData === data);

export default () => {
	if (myData) {
		return (
			myData.username === data.username &&
			myData.password === data.password
		);
	}
	return false;
};
