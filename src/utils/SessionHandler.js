export const handleSession = () => {
	const user = localStorage.getItem('user');
	const {href} = document.location;
	if (!user && !href.includes('login')) document.location.href = '/login';
};