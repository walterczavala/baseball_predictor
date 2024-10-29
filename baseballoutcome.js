//Arrays that contain the options for each phrase
const firstPhrase = ['Strikeout', 'Groundball', 'Flyball', 'Single', 'Double', 'Triple', 'Homerun'];

const secondPhrase = ['pitcher', 'catcher', 'first baseman', 'second baseman', 'third baseman', 'shortstop', 'left fielder', 'center fielder', 'right fielder', 'left field', 'center field', 'right field', 'looking', 'swinging'];

const thirdPhrase = ['good job!', 'better luck next time!'];

//Random word generator
const predictBaseballOutcome = () => {
    const play = firstPhrase[Math.floor(Math.random()*firstPhrase.length)];
    let option = '';
    let feedback = '';

    if (play === 'Strikeout') {
        option = ` ${secondPhrase[Math.floor(Math.random()+13)]}`
    } else if (play === 'Homerun') {
        option = ` to ${secondPhrase[Math.floor(Math.random() * 2 + 10)]}`
    } else {
        option = ` to the ${secondPhrase[Math.floor(Math.random() * 9)]}`
    };
    
    if (play === 'Strikeout' || play === 'Groundball' || play === 'Flyball') {
        feedback = `, ${thirdPhrase[1]}`
    } else {
        feedback = `, ${thirdPhrase[0]}`;
    }
    
    const fullPhrase = play + option + feedback;
    return fullPhrase;
}

console.log(predictBaseballOutcome());