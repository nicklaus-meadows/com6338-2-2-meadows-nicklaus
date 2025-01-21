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
        
            let birthdayYet = confirm(user + ' have you had a birthday this year already?')
            if (birthdayYet) {
                
                alert(new Date().getFullYear() - age)
            } else {
                
                alert(new Date().getFullYear() - age - 1)
            }

}
    greet()

