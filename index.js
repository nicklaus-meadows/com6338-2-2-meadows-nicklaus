function greet() {
    let user = prompt("What is your name?")
    if (user) {
        alert('Hello, ' + user)
    } else {
        alert('Please provide your name next time...')
    }
    
        let age = prompt("How old are you?")
        if (age) {
            console.log(parseInt(age))
        } else {
            alert('Please tell us your age.')
        }
        
            let birthdayYet = confirm('You have had a birthday this year already?')
            if (birthdayYet) {
                console.log("hit ok")
            } else {
                console.log('hit cancel')
            }

}
    greet()

    