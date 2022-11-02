const formatDate = (date) =>  {
        const alpha = date.split('-');
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return `${months[+alpha[1]-1]}, ${alpha[0]}`
}

export default formatDate;