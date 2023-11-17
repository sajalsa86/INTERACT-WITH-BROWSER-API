console.log('Welcome')

const alertIsrael = () => {
    alert('be carefull israel.. i will kill you')

};
const confirmKill = () => {
    const confirmWar = confirm('Are you sure to start war in Israel ??');
    console.log(confirmWar);
    if (confirmWar === true) {
        alert('Welcome for srtat war for kill israel')
    }
    else { console.log('You are a Munafek') }
};

const isAcceptForWar = () => {
    const accept = prompt("Are you wanna sure to war in israel?")
    if (accept === null) {
        console.log('You are a Munafek')
    }
    else { alert("OK, let's go"); }
};