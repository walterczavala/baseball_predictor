//Arrays that contain the options for each phrase
const firstPhrase = ['Strikeout', 'Groundball', 'Flyball', 'Single', 'Double', 'Triple', 'Homerun'];

const secondPhrase = ['pitcher', 'catcher', 'first baseman', 'second baseman', 'third baseman', 'shortstop', 'left fielder', 'center fielder', 'right fielder', 'left field', 'center field', 'right field', 'looking', 'swinging'];

const thirdPhrase = ['Good job!', 'Better luck next time!'];

//Random word generator
const predictBaseballOutcome = () => {
    const play = firstPhrase[Math.floor(Math.random()*firstPhrase.length)];
    
    const option = '';
    if (play === 'Strikeout') {
        return option = secondPhrase[Math.floor(Math.random()+13)]
    } else if (play === 'Homerun') {
        return option = secondPhrase[Math.floor(Math.random()*2+10)]
    } else {
        return option = secondPhrase[Math.floor(Math.random)*9]
    };

    const feedback = ''
    if (play )

}